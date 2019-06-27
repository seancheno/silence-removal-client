# Silence Removal 

Silence removal is an online tool to remove non speech/music from mp3 and wav files using a custom trained Convolutional Neural Net.

* This is the client-side repo  powered by React. 

* The back-end repo can be found [here](https://github.com/seancheno/silence-removal-server).

* Visit the live demo at [silenceremoval.com](https://silenceremoval.com).


## Installation

    git clone https://github.com/seancheno/silence-removal-client/
    cd silence-removal-client
    npm i
    npm run start
    open localhost:8080
    # To build the app for production, run the following command:
    npm run build
   

## Notes

For the silence removal to work, the back-end repo must be running on a local or production server and the `AXIOS_BASE_URL` setting in the `config.js` file must be configured with the servers address.  More details can be found inside the [silence-removal-server repo](https://github.com/seancheno/silence-removal-server).

