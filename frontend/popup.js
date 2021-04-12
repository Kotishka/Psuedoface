document.addEventListener('DOMContentLoaded', function() {
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize
  );


  // Create FilePond object
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);
  pond.allowMultiple = false;
  pond.labelFileProcessing = 'Cloaking';
  pond.labelFileProcessingComplete = 'Cloaking complete';
  pond.labelFileProcessingAborted = 'Cloaking cancelled';
  pond.labelFileProcessingError = 'Cloaking error';
  pond.labelTapToCancel = '';
  pond.allowRevert = false;
  pond.server = {
    process: cloakFile
  }

  pond.onaddfile = (err, file) => {
    if(err){
      console.error(err);
    } else {
      pond.processFiles().then(file => {
        console.log(file);
      }).catch(err => {});
    }
  }
}); 

function cloakFile(fieldName, file, metadata, load, error, progress, abort){
  console.log(file)
  var formdata = new FormData();
  formdata.append("image", file, file.name);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://localhost:5000", requestOptions)
    .then(response => response.blob())
    .then(response => {
      download(response, `cloaked.png`, "image/png");
      load(file.name);
    })
    .catch(err => {
      console.log('error', err)
      error(file.name);
    });
}

// Function to download data to a file
function download(data, filename, type) {
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}