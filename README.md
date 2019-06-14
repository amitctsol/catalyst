
# Project Name: Catalyst

## Description
This is the project rebuild using ReactJs, Gatsby and Bootstrap Technologies using npm as package manager. This is a single page website.


## Technology Stack 
+ ReactJs (Using Gatsby framework) static website.
+ Twitter Bootstrap framework(Responsive web layout and front-end display).
+ Hosted on Amazon S3 Bucket as static website.

## Requirement 
Below requirements should be installed globally
 - NodeJS: ^6.14.1
 - npm: ^3.10.10
 - reactJS: ^16.2.0
 - Gatsby (installation instruction below): ^1.9.277
 - aws sdk configured locally


## How to run project locally
Project can be installed locally using below command:
- `npm install -g gatsby`      		<!-- to install gatsby locally -->
- `npm install`
- `gatsby develop`


## Push static site to Amazon s3 bucket:
Static site can be pushed to s3 for deployment and production sites easily using aws sdk.
Assuming you have configured aws locally, use below step
- `npm run deploy:dev` // for development server
- or
- `npm run deploy:prod` // for production server


## File Structure 
```
Src
├── components             # Basic website design structure 
│   ├── SiteNavi           # Header section and navigation section
│   ├── SitePage           # Basic layout of the page
│   └── home               # All the components and sections of the page
│   ├── sitefooter         # Footer section of the page
└── ....
Static
     ├── All the static resources like css, Js, images are present here

```
