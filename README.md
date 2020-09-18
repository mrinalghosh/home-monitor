This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Description

This app's purpose is to allow users to monitor their home's temperature and humidity live, from anywhere

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


**Unit Testing**
Tests were designed to verify the functionality of every cmoponent, during, after, and before integration.

*Authorization:*
The test comprises of a user attempting to sign in/create an account through google for one of the tests, and any email address for another test. Once the user has created and signed into their account, their authorization status will be checked to confirm they remain signed in, and their user ID will be checked to confirm they are signed in to the correct account, and can only access their data.

*Weather:*
The user should be able to retrieve data about the weather at their home location accurately.

 *Device Management:*
The test comprises of a signed in user attempting to add a device that is a temperature or humidity sensor, retrieving data from the device once data is available (simulated data to begin), and deleting the device.

*Plotting:*
To perform this test, the data from each device must be able to be graphed live with minimal latency on the app. The interface must be easy to comprehend and be labeled correctly and display an appropriate range

*Home:*
The home screen acts as a central hub, where other pages can be accessed from. To test this, the tester must be able to navigate to any of the available pages from the home screen

