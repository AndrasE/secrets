<a width="300px">
<h3 align="center">
  <a href="https://app-secret.herokuapp.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/e0ba0d38fc6f2bb201983bbc4986e59f1ae946f2/logo/secrets-readme-img.png" width="180px">
  </a>
  <br/>
  EJS webapp with MongoDb database & OAuth options with Express (session) cookies
</h3>
</div>

## Hello there 👋

During my final stages of self-study on Udemy, I was intrigued to push a particular project further—one that involved **[MongoDB](https://www.mongodb.com/)**, **[Express](https://www.npmjs.com/package/express-session)**, and **[EJS](https://ejs.co/)**. Originally, it was a simple CRUD application using MongoDB for the back-end and EJS for the front-end **[original project](https://github.com/AndrasE/secret-original")**. However, I made significant enhancements, adding user authentication with session cookies to ensure users could interact only with their own content while still being able to view other users' posts. Once authenticated, users remain logged in unless the cookie expires or the browser is closed.

To elevate the project further, I incorporated animations, themes, SVGs, and a dynamic navigation bar with swipe functionality using Hammer.js. These additions brought the app to life and improved user engagement. After sharing the project link in a study group, I was excited to see many "secrets" being posted, which highlighted the interactive nature of the app.

Overall, I am proud of the outcome - not only for the technical achievements but also for how it resonated with users. You can read a detailed report and learn more about the challenges I faced in the "About" or "Read More" sections of the app. Deployed on Heroku's eco-dyno, please note that it may take a few seconds for the server to wake up.

<div align="center">
<img src="https://github.com/AndrasE/raw-readme/blob/c54d6a4c1f9c2f4b212235584ec55fdf695b0a95/thumbs/secrets_1.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/c54d6a4c1f9c2f4b212235584ec55fdf695b0a95/thumbs/secrets_2.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/c54d6a4c1f9c2f4b212235584ec55fdf695b0a95/thumbs/secrets_4.png" width="220">
</div>

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
