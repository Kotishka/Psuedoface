document.addEventListener('DOMContentLoaded', function() {
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize
  );


  // Create FilePond object
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);
}); 