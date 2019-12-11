**Table of Contents**

1. [Setup](https://github.com/keshavkhatri/angular8-with-ssr#setup "Setup")
2. [What is Angular Universal ?](https://github.com/keshavkhatri/angular8-with-ssr#what-is-angular-universal)
3. [Why we need SSR?](https://github.com/keshavkhatri/angular8-with-ssr#why-we-need-ssr)
4. [Types of Angular Universal and which one to use](https://github.com/keshavkhatri/angular8-with-ssr#types-of-angular-universal-and-which-one-to-use)
	- [Dynamic SSR](https://github.com/keshavkhatri/angular8-with-ssr#dynamic-ssr)
	- [Static Prerendering](https://github.com/keshavkhatri/angular8-with-ssr#static-prerendering)
5. [Implementing Angular Universal](https://github.com/keshavkhatri/angular8-with-ssr#implementing-angular-universal)
6. [Conclusion](https://github.com/keshavkhatri/angular8-with-ssr#conclusion)


## Setup

I have created this repo as an example of how to implement Angular Universal in an existing project.
To get this setup running on your local machine download or clone this project in your working directory.
Then run below comand to install its dependencies.

> npm install

You can serve this app using below commands

For normal serve
> ng serve

For Dynamic SSR
> npm run build:ssr && npm run serve:ssr

For Static Prerender
> npm run build:prerender && npm run serve:prerender

### What is angular universal?

Usually angular applications are built as SPA&#39;s which means single page application which renders on client side and all the necessary codes (HTML, CSS, JavaScript) are bundled together and provided to the client browser at once.

This process can be referred to as CSR (Client Side Rendering).

Angular Universal helps us to generate and render these pages on server before serving it to client side browser. This process is known as SSR (Server side rendering) in which angular universal converts given page to an HTML string and provides it to client browser. It can also pre-generate pages as HTML files that you serve later.

### Why we need SSR?

- Facilitate web crawlers (SEO)
- Improve performance on mobile and low-powered devices
- Show the first page quickly
- Improved user experience as the page loads in less than 3 seconds


### Types of Angular Universal and which one to use

There basically two concepts in Angular Universal which are described below.

##### Dynamic SSR

In this concept when user hits the url that page will be dynamically rendered on the server and will provide the serialized string to the browser. This method is useful for websites which have routes that are very dynamic. Below are some cases where we can use dynamic SSR.

- When the website routes and content are very dynamic.
- When there are lists or sliders which shows dynamic things based on calculations.
- When the apis are being provided by CMS or a database which is changing continuously.

##### Static Prerendering

This method is used when we want to create static files of routes such as homepage.html or aboutus.html. In this case SSR will create static files at the time of angular build and server those static files when user hits the respective route. This method is quite faster then the dynamic SSR as it does not load the page at the time of request neither on server side nor the client side, instead it will server a pre-rendered html file. Below are the cases when we can use static prerendering.

- The routes or the whole application is static and does not show dynamic content from server.
- We can also include only those routes which are static instead of pre rendering whole application.
- When the application data does not update very often, in this case we can create a new build whenever the application is updated.



### Implementing Angular Universal

We will be using latest Angular 8 and latest Angular CLI 6.1 to get things done easily.

Below steps are given to integrate Angular Universal in an existing application.

Run the below given command to install Angular Universal Dependencies.

> ng add @nguniversal/express-engine --clientProject [name]

Have a look at your angular.json located at the root of your project and replace the &quot;name&quot; in the above command with your project name.

Above given command will install all the required packages to start with Dynamic SSR. You will see something like the below given output in command line.

> installed packages for tooling via npm.
CREATE src/main.server.ts (220 bytes)
CREATE src/app/app.server.module.ts (427 bytes)
CREATE src/tsconfig.server.json (219 bytes)
CREATE webpack.server.config.js (1360 bytes)
CREATE server.ts (1472 bytes)
UPDATE package.json (1872 bytes)
UPDATE angular.json (4491 bytes)
UPDATE src/main.ts (432 bytes)
UPDATE src/app/app.module.ts (438 bytes)

As you can see in the above output, there are several files created and also updated.

In the _package.json_ new scripts are added which can be used to make build with dynamic SSR

To start rendering your app with Universal on your local system, use the following command.

> npm run build:ssr &amp;&amp; npm run serve:ssr

This will compile your application and start a Node Express server to serve your Universal application on [http://localhost:4000](http://localhost:4000)

As of now you should have dynamic SSR up and running. Now the below guide is to implement Static Prerender. If you want to keep only Dynamic SSR then you don&#39;t need to follow below steps.

Integrating Static Prerender SSR

By default prerender scripts were not added in the _package.json_ neither the files were created. To implement static prerender first we need to run the below given command which will create update files for us as well as add scripts in package.json.

> ng add @ng-toolkit/universal

You will see something like the below given output in you command line.

> Installed packages for tooling via npm.
CREATE local.js (215 bytes)
CREATE prerender.ts (9079 bytes)
CREATE static.js (165 bytes)
CREATE static.paths.ts (70 bytes)
CREATE src/app/app.browser.module.ts (473 bytes)
CREATE ng-toolkit.json (496 bytes)
UPDATE server.ts (1346 bytes)
UPDATE package.json (2150 bytes)
UPDATE src/app/app.server.module.ts (485 bytes)
UPDATE src/app/app.module.ts (759 bytes)
UPDATE src/main.ts (500 bytes)
UPDATE webpack.server.config.js (1419 bytes)

After executing this you should have all setup with static prerender now you need to run below given command to see the magic happens.

> npm run build:prerender &amp;&amp; npm run serve:prerender

All that magic thanks to the prerender.ts script, which fires Angular Universal, runs the server locally, visit it and save rendered HTML to the static files.

#### Conclusion

Depending on which form or angular universal you have used you will see the output on the browser. You can verify it using CTRL + U to see the source of the page or you can use curl in your command line to see the output of the webpage.
