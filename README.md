### Pre-requirements

1. Install nodejs (https://nodejs.org/en/download/)
2. (for Windows) `npm install --global windows-build-tools` (as administrator)
3. Clone this repo
4. `npm i` to install dependencies 

### Use case 1. Dummy

1. Install com0com as null-modem. Connect `COM3 <-> COM4`
2. In one terminal run `npm run listen`
3. In another terminal run `npm run write`
4. Try to write something in second terminal and hit ENTER
5. After some time it should appear on listening terminal
