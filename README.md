### Pre-requirements

1. Install nodejs (https://nodejs.org/en/download/)
2. (for Windows) `npm install --global windows-build-tools` (as administrator)
3. Clone this repo
4. `npm i` to install dependencies
5. Copy `.env.example` to `.env` in project root. You can change some env var settings in `.env` 

### Use case 1. Listen + Write

1. Install com0com as null-modem. Connect `COM3 <-> COM4`
2. Make sure `READ_COM_PORT` and `WRITE_COM_PORT` env vars has correct values in `.env`
3. In one terminal run `npm run listen`
4. In another terminal run `npm run write`
5. Try to do something in "write" terminal. And send message
6. After some time (shortly) it should appear on listening terminal

### Use case 2. Duplex

1. Make sure `READ_COM_PORT` and `WRITE_COM_PORT` env vars has correct values in `.env`. Note, you can set same com port to both env vars. You also can use `COM_PORT` env var.
2. In one terminal run `npm run duplex`
3. Try to input something. And send message
4. After some time (shortly) it should appear
