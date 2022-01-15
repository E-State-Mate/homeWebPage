# __homeWebPage__
Home Web Page for E-StateMate solutions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Yarn Package Manager](https://yarnpkg.com/). 

## __Getting Started__ using [Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

Start by cloning the `main/development` repository from github.
<!-- I believe we will be using the development branch as the primary source to pull from, since that is where we are merging into? -->

### `git checkout -b new_branch_name`
To make new updates, start by creating a new branch. Branches allow you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository. <br/>
Your new branch should be created while the `development` branch is selected. The `development` branch is where we will primarily be working off. *Notice that the origin site will reflect the new branch name.* <br/>

__To make updates to an existing branch:__<br />
### `git pull origin branch_name`
Use this command to fetch the most up-to-date code from the remote branch into your local to update all files.<br/>
<br/>

## Running React App Locally 
This React App uses [Yarn](https://yarnpkg.com/) Package Manager.

### `npm install -g yarn`
Installing Yarn will install all dependencies for the project. You can confirm the installation and check the version with `yarn -v`.
<!-- I found that I could not use 'yarn' to install, as it said that the command was not found.  -->

### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br/><br/>

## Pushing Code to the Remote Repository
### `git push origin branch_name`
After adding and commiting the updated code, be sure to push your work to *origin branch_name*. <br />

*__Do not push to the `main` or `development` branch, as it will override the `main/development` branch on the remote repository. New code needs to be reviewed first before merging into the `main/developement` branch. Otherwise, we may lose perfectly good existing code.__<br /><br />

## Deleting a Branch
You can have head branches automatically deleted after pull requests are merged in your repository. To do so: 
 1. On GitHub, navigate to the main page of the repository. 
 2. Above the list of files, click *n* branches. 
 3. Scroll to the branch that you want to delete, then click 🗑. 