# __homeWebPage__
Home Web Page for E-StateMate solutions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Yarn Package Manager](https://yarnpkg.com/). 

## __Getting Started__

## Running Locally 
This React App uses [Yarn](https://yarnpkg.com/) Package Manager. These instructions only cover Yarn versions prior to 2.0 (this app currently uses version 1.22.17).  

1. Install Yarn. Yarn will download all required packages to run homeWebPage. 

- It is recommended to install Yarn through the [npm manager manager](https://www.npmjs.com/), which comes bundled with [Node.js](https://nodejs.org/en/) when you install it on your system. Once you have npm installed, you can run the following to install and upgrade Yarn:

```
npm install -g yarn
```

- Check installation by running: 

```
yarn -v
```

2. In starting a new project, create or update a package.json file by running: 

```
yarn init -y
```

3. Run the app in development mode (http://localhost:3000).

``` 
yarn start
```
<br/>

## Create/Pull a [Branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

1. Start by cloning the `development` branch of the repository from github.

2. To make new updates, start by creating a new branch. 

- Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository. 

- A new branch should be created while the `development` branch is selected. The `development` branch is where we will primarily be working off. 
*The origin site on your terminal will reflect the branch name once it is created.* 

```
git checkout -b new_branch_name
```

To make updates to an existing branch, run the following. This fetches the most up-to-date version from the remote branch into your local.

```
git pull origin branch_name
```
<br/>

## Pushing Code to the Remote Repository
After adding and commiting, push to the branch name that is being worked on. <br/>

__Do not push to the `main` or `development` branch, as it will override the `main/development` branch on the remote repository. New code needs to be reviewed first before merging into the `developement` branch. Otherwise, we may lose perfectly good existing code.__

```
git push origin branch_name
```

<br />

## Deleting a Branch
You can delete branches after pull requests are merged and reviewed in the remote repository on GitHub. To do so: 
 1. On GitHub, navigate to the main page of the repository. 
 2. Above the list of files, click *n* branches. 
 3. Scroll to the branch that you want to delete, then click 🗑. 