# Project - React Vite - Networks QrCode Generator

QRCode Generator

## About

* When a social network url is entered, the central image is replaced by the network icon.
    * options : 
        * Networks : Github, Linkedin, Facebook, Instagram, Pinterest, Youtube, Twitter, Twitch, Tiktok, Reddit
        * Supports : KissKissBankBank, Liberapay, Patreon, Tipee, Utip

* The QrCode can then be downloaded as a png file

* There are 4 input fields accessible by clicking on the corresponding arrows, to modify the qrcode : 
    * social network url
    * the qrcode correction scale
    * the background color
    * the foreground color

## Screenshots

* When the application is launched

![start](./src/assets/start-app.webp)

* After entering a social network address

![after](./src/assets/after-app.webp)

* Downloadable Png image

![download](./src/assets/qrcode.webp)

* Mobile view (280px max)

![mobile](./src/assets/mobile.webp)

# Get Started

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Getting Started with Vite

This project was bootstrapped with [Create vite](https://github.com/vitejs/vite/tree/main/packages/create-vite).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` directory.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [building for production](https://vitejs.dev/guide/build.html) for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://fr.reactjs.org/).

# Dependencies

This project use:
* [styled-components](https://www.npmjs.com/package/styled-components) to do CSS in JS and [@types/styled-components](https://www.npmjs.com/package/@types/styled-components) for TypeScript compatibility.
* [qrcode.react](https://www.npmjs.com/package/qrcode.react) to generate the QRCode
* [react-icons](https://www.npmjs.com/package/react-icons) for Burger icon in menu 
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) for routing