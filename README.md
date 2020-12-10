# Ravn GraphQL Code Challenge

This project is a challenge of RAVN to get data of Star Wars API, using queries to access the data with https://swapi.dev/ so the development was a FontEnd job with requests to https://swapi-graphql.netlify.app/.netlify/functions/index. The technologies used were:

  - ReactJs
  - Apollo
  - GraphQL

## Setup/Runing instrucions
Below are the necessary configurations to run the project

### Prerequisites

- Install Node.js https://nodejs.org/en/download/ according to your operating system
- Install npm https://www.npmjs.com/get-npm **(this step must be obviated because npm is installed with Node.js)**

### Setup
- Clone the project using the command `git clone https://github.com/OVarLaz/Ravn-Challenge-V2-OlenkaVargas.git` 
-  Install dependencies with the command `npm install`, his command installs a package, and any packages that it depends on.

### Run project
- Once the dependencies are installed, we can run the project using the command `npm start`
- By default the browser should open with the project execution, however, it can be accessed by placing in the browser http://localhost:3000/

## Project Description

The plataform of the Star Wars API is develepment in REST, howewer for this project we requiere a connection using queries with GraphQL so it uses Apollo Client to conect with  https://swapi-graphql.netlify.app/.netlify/functions/index, being able to use a tool like GraphQL Playground or GraphiQL to verify our requests.

### Document structure
The project is made up of two main modules. That of the components, where the objects to use in the challenge are stored, which are divided by folders that group these files with their style sheets, and a module called API contains the base of the queries to the server, functioning as a client and where is storing the queries. Finally,  index.js works like a main root of the project.
```
starwars
├── public
└── src
    └── api
    │   ├── query.js
    │   ├── resource.js
    ├── components
    │   ├── Detail
    │   │   ├── detail.css
    │   │   └── detail.js
    │   ├── Header
    │   │   ├── header.css
    │   │   └── header.js
    │   ├── Icons
    │   │   ├── Fontawesome
    │   │           └── fontawesome.js
    │   │   └── spinner.js
    │   ├── List
    │   │   ├── list.css
    │   │   └── list.js
    │   └── 
    ├── index.css
	└── index.js
```

## Navigation

When we start running the project the first view is the main with the Header Component and meanwhile, data is loaded, it is displayed in a **loading** section in the list view.
![View Loading](https://github.com/OVarLaz/Ravn-Challenge-V2-OlenkaVargas/blob/main/loading.png)

If the data have a problem to load, the message **error** will be displayed.
![View Error Message](https://github.com/OVarLaz/Ravn-Challenge-V2-OlenkaVargas/blob/main/error.png)

The correcty data loaded will be visualizated between a **List** component.
![View List People](https://github.com/OVarLaz/Ravn-Challenge-V2-OlenkaVargas/blob/main/list.png)

Finally, when clicking on any of the components of the list, we will see in **detail** on the right side the information of the data in the query 
![View Detail Information Person](https://github.com/OVarLaz/Ravn-Challenge-V2-OlenkaVargas/blob/main/detail.png)

## Additional information

### Query
Note that the project only makes use of an API query. 

    query{    
	    allPeople { 
		    people { 
			    id, 
			    name, 
			    hairColor, 
			    skinColor, 
			    eyeColor, 
			    birthYear, 
			    homeworld { 
				    name 
				}, 
				 species { 
					 name 
				}, 
				vehicleConnection { 
					vehicles { 
						name 
					} 
				} 
			} 
		}
	}

The objective of this is to take advantage of the graph structure that GraphQL uses, to access the information, and to be able to handle without problem in the development. A valid idea would have been to use multiple queries for each data request to Person, however, that would not allow us to take advantage of the tree structure of GraphQL

## Technologies 
Description of the technologies used

### React.js
A JavaScript library for building interactive user interfaces to websites. Provide reusable **React** library code and works with two properties: 
- JS 
- Virtual DOM
https://reactjs.org/

### Apollo Client
**Apollo Client** is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.
https://www.apollographql.com/docs/react/

### GraphQL
**GraphQL** provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
https://graphql.org/
