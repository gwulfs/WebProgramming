#Overview
A simple Node.js + Express web application (server-side).  This has the same behavior as [server.js](https://github.com/tuftsdev/WebProgramming/blob/gh-pages/examples/nodejs/server.js) but the code is much more cleaner and readable thanks to the Express framework.

#About the Files
* `app.js` - the source of the server
* `package.json` -  This file holds various metadata relevant to the project. This file is used to give information to `npm` that allows it to identify the project as well as handle the project's dependencies (VERY important).  See https://docs.npmjs.com/files/package.json for more details on what goes in to a `package.json` file.
* `Procfile` - Required by Heroku.  A `Procfile` "is a mechanism for declaring what commands are run by your application's dynos on the Heroku platform."  In other words, it must specify which is the entry source file (i.e., the `app.js` file).  See https://devcenter.heroku.com/articles/procfile for more details.

#Running This Example Locally
Try running `node app.js` first.  You should receive an error.  The reason: dependencies (as listed in `package.json`) for web application are not installed.

1. Run `npm install` to install all dependencies as listed in `package.json` file.
2. Run `node app.js` and LET IT KEEP RUNNING!
3. Go to `http://localhost:8888` on a web browser