<h3 align="center">
  <a href="https://app-secret.herokuapp.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/main/secrets-readme-img.png?raw=true" width="230px">
  </a>
  <br/>
  EJS webapp with MongoDb database
  <br/>
  & OAuth options with Express (session) cookies
</h3>

## Hello there 👋

During my final stages of self-study on Udemy, I was intrigued to push a particular project further—one that involved MongoDB, Node, Express, and EJS. Originally, it was a simple CRUD application using MongoDB for the back-end and EJS for the front-end **[original project](https://github.com/AndrasE/secret-original")**. However, I made significant enhancements, adding user authentication with session cookies to ensure users could interact only with their own content while still being able to view other users' posts. Once authenticated, users remain logged in unless the cookie expires or the browser is closed.

To elevate the project further, I incorporated animations, themes, SVGs, and a dynamic navigation bar with swipe functionality using Hammer.js. These additions brought the app to life and improved user engagement. After sharing the project link in a study group, I was excited to see many "secrets" being posted, which highlighted the interactive nature of the app.

Overall, I am proud of the outcome - not only for the technical achievements but also for how it resonated with users. You can read a detailed report and learn more about the challenges I faced in the "About" or "Read More" sections of the app. Deployed on Heroku's eco-dyno, please note that it may take a few seconds for the server to wake up.

### Key Features

- **Authentication** - User authentication with session cookies, allowing personalized content management. Includes Signup, Login, Signout, and the option to delete the account.
- **Content Management** - CRUD operations with MongoDB, enabling users to share and view posts securely.
- **Dynamic UI & Navigation** - Enhanced user interface with animations, themes, and SVGs, plus swipe functionality via **[hammer.js](https://hammerjs.github.io/)**.
- **User Engagement** - Seamless navigation with a dynamic navbar and responsive design to improve user interaction.

## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

`
$ git clone https://github.com/AndrasE/secrets
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm install -S myLib
`

Or if you prefer using Yarn:

`
$ yarn add --dev myLib
`

Add your own credentials:

`
add own credentials or .env
setup own google and facebook Apis
`

Serving the app:

`
$ npm start
`

Running the tests:

`
$ npm test
`

Building a distribution version:

`
$ npm run build
`
