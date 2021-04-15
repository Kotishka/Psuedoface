# Psuedoface

## General info
A facial-cloaking extension software aimed to create a user friendly version from an open source project, Fawkes[1].
	
## Technologies
Project is created with:
* Javascript
* Bootstrap v5.0.0
* HTML5/CSS
* Filepond v4.26.0
* Python v3.5-3.8
* npm v6.14.8
	
## Setup
1. Clone Psuedoface on your local machine.
### Frontend
2. In your selected terminal, `cd frontend` and run `npm install` to install node_modules. This requires to have npm installed (https://www.npmjs.com/get-npm) but there can be other ways to install the necessary dependencies listed in `frontend/package.json`.
3. Install the chrome extension[2]:
	> 1. Open the Extension Management page by navigating to chrome://extensions.
	> 2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
	> 3. Click the Load unpacked button and select the extension directory.
### Backend
4. In your selected terminal from the Psuedoface folder, `cd backend` and run `pip install fawkes` to install python libraries. This requires to have python v3.5-3.8 installed. Additionally, you may need to run terminal as admin to allow the files to be installed.

## Running the project
1. To start the web api, run `python app/web.py` in your terminal from the Psuedoface/backend directory.
2. Enable the extension through `chrome://extensions/`.
3. Open a new tab and use the extension. The extension will not work on `chrome://extensions/` or any other `chrome://` pages due to security features.

## Refrences
[1] https://github.com/Shawn-Shan/fawkes

[2] https://developer.chrome.com/docs/extensions/mv3/getstarted/
