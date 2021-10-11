# Clinikk Front End Assignment

This project is an attempt to implement a design as a Progressive Web App. The design can be found in here: https://www.figma.com/file/IGajI2Cg1lqjSwck5sHpIs/Dashboard-(1) .

## Demo App

The app is running on demo here : https://shyamspillai.github.io/clinikk-figma-dashboard/

## Running the app

* You need to have Nodejs installed on your system
* Clone the repo
* `cd` into the folder
* Run `npm install`
* Run `npm run start` 

## Running tests
* You need to install the node modules first ( `npm install` from step above )
* Run `npm run test`

## Project Specs

* Commit convention - https://www.conventionalcommits.org/en/v1.0.0/
* React JS - `17.0.2`
* Node JS ( local ) - `10.23.0`
* Tests - Jest & Enzyme

## Requirements Status
| Requirement | Status | Comments  |
|--|--|--|
| Meet the design requirements  | Partially met | Tried to meet the design spec as much as possible but time was a major constraint so tried to balance priorities |
| Responsive site  | Partially met | Site is responsive on small screens ( `<600px` and large screens ). Tablets and medium size screens are yet to be covered |
| PWA  | Met | App is downloadable as a PWA |
| Push Notifications  | **Not Met** | Push Notifications have not been implemented. The current implementation is not sufficient |
| Tests  | Partially Met | Essential tests ( snapshot & basic rendering ) have been added |
| Audio & Video Files  | **Not Met** | Could not find any audio or video files in the link |

## Author's Notes
* Although many of the components are custom components, some of them are third party ones including:

|Component| Source |
|--|--|
| Circular Progress Graph | https://www.npmjs.com/package/react-circular-progressbar |
| Line Chart | https://www.npmjs.com/package/react-chartjs-2 |
| Some essential components | https://ant.design/ |
| Icons | https://fontawesome.com/v5.15/icons and https://ant.design/components/icon/ |
| Faker - for some fake course data | https://www.npmjs.com/package/faker |

## Known Issues

* The responsiveness of the app breaks in medium sized screens
* The button for the single course bar does not trigger any change
* Some of the UI implementation does not match the design specification
* Some icons / images were not available hence have used alternatives
* Push Notifications do not work

** Have tried to ellipse out the course title and author's name from the course list as larger names were affecting the spacing between the row components.

## If there was more time
* Would try to address the above issues :)  
