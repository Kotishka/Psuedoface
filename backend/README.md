Pseudoface API
------

Requirements
------
1. Pyhton 3.5-3.8
2. install fawkes ```pip install fawkes```

Usage
------
To start web api: ```python app/web.py```

Sample request using JS request of web api running on http://localhost:5000.

```javascript
var formdata = new FormData();
formdata.append("image", fileInput.files[0], "photo goes here");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:5000", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```