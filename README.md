# Nutrition Application with PWA

![Image of screenshot nutrition-app](https://i.imgur.com/SSiGiER.jpg)

__Project Features__

- Calculates daily intake (cal)
- Search and add new food items to todays date
- Responsive design (mobile and desktop)

### Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [material-ui](https://material-ui.com/) - Google's Material Design in easy to use React components
- [styled-components](https://www.styled-components.com/)
- [redux](https://redux.js.org/introduction/getting-started) - cross-component state management

[Click here to go to their portal.](https://jayantk07.github.io/nutrition-app-with-pwa/).

__Install__

- `node v11.11.0`
- `npm v6.7.0`

__Build Static Files__

`npm run build`

This command will compile all the required files to run the site inside the folder `/build`. You can run the site using these files on a static hosting service. Below is a command for easy deploying to **GitHub Pages**.

__Deploy to GH Pages__

`npm run deploy`

Inside your `package.json` file on the line starting with `"homepage"`, replace `<USERNAME>` with your GitHub username and `<GITHUB_REPO_NAME>` with the repo in which you want to host your site in.
```
"homepage": "http://<USERNAME>.github.io/<GITHUB_REPO_NAME>",
```
