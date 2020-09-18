
## Home Monitor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Description

Home Monitor allows users to monitor their home's temperature and humidity via live data from their smart home sensors. Users log in and register devices, which are simulated and plotted. 

### Running

In the project directory, you can run:

#### `npm install -g yarn`
#### `yarn` 

Build the listed dependency packages.

#### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The deployed project can also be viewed at [https://home-monitor-mg-cg.firebaseapp.com/](https://home-monitor-mg-cg.firebaseapp.com/)

### Unit Testing
Tests were designed to verify the functionality of every component to maintain continous integration.

*Authentication:*
Users must be able to sign-in using their Google account and access their personal data and unique live feeds. Sessions are single sign-in and must not need to reverify the identity of the user during the same session.

*Weather:*
Users should be able to retrieve data about the weather at their home or search location accurately and intuitively.

*Device Management:*
Signed in users must be able to add either a temperature or humidity sensor, and view data retrieved from the device once it is available (currently simulated using PRNG). Users should also be able to delete the device.

*Plotting:*
Data from each device must be able to be graphed live with minimal latency on the app. The graph must be easy to comprehend, labeled correctly and display an appropriate range and units.

*Home:*
The home screen acts as a central hub, where other pages can be accessed from. Every page in the project directory must be accesible via live links in the navigation bar on top of every page. This bar must also display the currently signed in user, or an option to sign in.

