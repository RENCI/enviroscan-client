# NC ENVIROSCAN Client

## Overview
This is the website for NC ENVIROSCAN, a resource that aims to help North Carolina communities gain understanding of environmental and social factors that can impact their health. NC ENVIROSCAN also has a [mapping tool](https://github.com/RENCI/nc-enviroscan) to aid in visualizing the trends across environmental contaminants, sociodemographic information, environmental justice indicators, and health outcomes throughout the state.

The React application is built with create-react-app as a base and deployed on a Netlify server. The Semantic UI React library is used for UI components, with some icons sourced from the React Icons library. You can visit the main website at [enviroscan.org](https://enviroscan.org/) and the mapping tool at [https://enviroscan-map.renci.org/](https://enviroscan-map.renci.org/)

___
## Deployment
This website is hosted on Netlify. There is a build script (see `package.json`) to prepare the site for production and deploy to Netlify once you have connected the repo to a Netlify domain.
> `$ yarn build`
___
## How to Contribute
If you would like to contribute to the development of this site, please propose your changes to the `master` branch via pull request(s). The `master` branch consists of what is currently live on the site so create feature branches off of that.

To develop locally, you will need `yarn` package manager. Once cloned, execute `yarn` to install the dependencies. After this is complete, run `yarn start` from the project root to run the development server on localhost which is on port 3000 by default. Thanks to the `nodemon` dev dependency, any saved changes to the source code are seen and testable in the development browser immediately.
___
## Resources
* [React](https://reactjs.org/)
* [Semantic UI React](https://react.semantic-ui.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Netlify](https://docs.netlify.com/?_ga=2.143967157.1464594570.1628696516-1753369940.1621636580)