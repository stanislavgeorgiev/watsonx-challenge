# electric-cars-8200
This repo is an integration of the FLO EV Charging Admin Console and Trello's EV Charging board

### Getting started

1. Have Node.js 14+ installed.
2. Run `npm i` from the Terminal.
3. Clone the `cypress.env.json-sample` and rename the clone to `cypress.env.json`. Fill in the empty fields in the file.

### Develop tests

1. Run `npm run cypress:open`. A new browser window will open.
2. Click on `E2E Testing`.
3. Choose a browser and click on the `Start E2E Testing` button.
4. A new browser window will open.
5. Click on the `flo.cy.js`.
6. The FLO test will run:
    1. It will login in the FLO Admin console.
    2. It will get the current sessions for 8200 Warden.
    3. It will save them in `server/public/flo/`.

### Running

1. Run `npm start`
2. Open https://localhost:8200