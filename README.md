Kindly welcome to myAlbums app

App is supposed to give you a visual idea of how your albums collection looks like. It uses a fake REST API - json server. For the full functionality you need to install it

npm install -g json-server

then launch - the port must be set to 4000, otherwise the fetch functions won't work

json-server --watch albums.json --port 4000

in the command line. Then start another terminal and run npm start

It's a crud and simple application nontheless it takes advantage of React.createContext, ReactRouter, includes typical fetch methods, classnames to support the validation. I thougth implementing redux state manager would be an exaggeration looking at the size of state and the React.createContext API was used instead.  Yet I tried to mimic the action of redux by creating reducer functions. Bootstrap supports the styling, still the app doesn't look like an eye candy ;-)

To do :

- more friendly UI
- search engine
- detailed album information
- check for artist new releases
- album rating system



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
