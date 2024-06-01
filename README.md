# Taiwan National Health Insurance Info

## Installing and Running

Follow these steps to install and run the Taiwan National Health Insurance Info Chrome extension:

9. **Verify Node.js Version**: Ensure your [Node.js](https://nodejs.org/) version is 18 or higher.
10. **Clone the Repository**: Clone this repository to your local machine.
11. **Update Package Information**: Modify the `name`, `description`, and `repository` fields in the `package.json` file to reflect your project's details.
12. **Update Extension Name**: Change the name of your extension in the `src/manifest.json` file.
13. **Install Dependencies**: Run `npm install` to install all necessary dependencies.
14. **Start Development Server**: Run `npm start` to start the development server.
15. **Load Extension in Chrome**:
    1. Navigate to `chrome://extensions/` in your Chrome browser.
    2. Enable `Developer mode` by toggling the switch in the upper right corner.
    3. Click on `Load unpacked` and select the `build` folder from your project directory.
16. **Begin Development**: Your extension is now loaded and ready for development.

## Webpack auto-reload and HRM

Enhance your workflow efficiency with the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) used for development (started with `npm start`). It includes an auto-reload feature that automatically reloads the browser every time you save a file in your editor.

To run the development mode on a different port, specify the `PORT` environment variable like this:

```
$ PORT=6002 npm run start
```

## Content Scripts

Check [here](https://github.com/lxieyang/chrome-extension-boilerplate-react?tab=readme-ov-file#content-scripts) for more information on content scripts.

## Packaging

After the development of your extension run the command

```
$ NODE_ENV=production npm run build
```

Now, the contents of the `build` folder will be the extension ready to be submitted to the Chrome Web Store. For more information about publishing, refer to the [official guide](https://developer.chrome.com/webstore/publish).
