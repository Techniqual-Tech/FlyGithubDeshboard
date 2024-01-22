# FlyGithubDeshboard
I developed this  GithubRepositoryListing website using pure html,css,javascript with node server to list the repositories of particular github account.

# FlyGithubDeshboard
I developed this  GithubRepositoryListing website using pure html,css,javascript with node server to list the repositories of particular github account.

# For running project on local machine
1.download project file from github
2.install require dependencies of node js
package.json:
{
  "name": "flygithubdeshboard",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "Vicky",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.6.5",
    "express": "^4.18.2"
  }
}
3.run "node server.js"
4.open browser and type "localhost:3000"
5.project open with default github user "johnpapa"

#Responsive
This webpage is responsive an accomodate to any screeen from desktop to mobile.

#Things about develop Project
1.This project is just for listing corresponding repositories of github user.
2.we can see a search bar at top of webpage which is use to search github user and their corresponding repositories.
3.webpage is divided into three part upper,body and lower
4.upper:provide basic information about github user
  body:provide list of github repositories
  lower:provide pagination option
5.here user can move to next and previous page as direction logo predict
6.user can choose number of repositories per page as input field given at lower section of webpage
7.just enter number and press button "perPage".
8.here user get bydefault 10 repositories per page but can change between 1 to 100
9.enter number can't  goes below 1 and above 100.
10.if user enter -1 / less then 1 or 101 or more then 100 by clicking "perPage" number align min to 1 and max to 100.
