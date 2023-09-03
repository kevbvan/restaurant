# Backend README

**All Backend tests are conducted through Insomnia*

## Iteration 1:

### Tasks
- Implementing routes, controller, and DAO for the beginning getMenuItems() and getMenutItemsByCategory() that will be used for the display of items on the menu page.
- Trimmed down and uploaded the menu items to a MongoDB Atlas 
- Uploaded the repo on Netflify

### Screenshots

![Successful get Call](/RestaurantWebsite/media/insomnia_get.png)
To test the whether the backend was working, Xinyu was used Insomnia and was able to get all of the menu items from out database.


###  Problems and Challenges
Initially we had both frontend and backend setup in the same repo. However, our group discovered that we would eventually run into problems when came time to deploy, so we had to create two repositories and upload each part separately, which is why some personal branches and tags from github are not used since mostly Xinyu uploaded into the new repo.

<br/>

## Iteration 2: 

### Tasks
- Made modifications to the json of the Mongodb file. Originally, the file contained over thousands of entries each non descriptive names and item description and had stock photos that were not very restaurant-like. We decided to trim down the json so that it was at a more mangable size as well as renamed/reworded the name and description of the items, as well created links to new images that would suit the website that we are creating better. 
- Create the APIs necessary for carting and checking out system.

### Screenshots

![Updated Json](/RestaurantWebsite/media/json.png)
For the database and our website, we will be using the id, name, desc, and img link. The rate and country will not be used for this project.

### Problems and Challenges
While we were deciding on what details to include, the images were not originally going to be added. However, asking further planning, we decided that including the images might be important depending on what we wanted for the last iteration 3 release to look like

<br/>

## Iteration 3:

- Implement function deleteCart, research and implement search function by adding filter and update corresponding controllers for getMenu function so that customers can search by typing name of the food.
- Implement route, controller and and DAO for getSearchItem and getSearchID so that customers can search food by id as well as by typing substring of a given food.

### Screenshots
![searchByName1](/RestaurantWebsite/media/searchByName1.png)
A search result that returns a list of matching search objects: 'me'
![searchByName2](/RestaurantWebsite/media/searchByName2.png)
A search result that returns only one matching name search: 'Calamari'
![searchByID](/RestaurantWebsite/media/searchByID.jpg)
A search result that returns only one matching id search: 'chip-dip'

### Problems and Challenges
The object we were trying to get was imbedded in a list inside of the foodCategory object, so rather than returning the element inside of the list, when a match was found, the entire foodCategory was returned which was counter-intuitive for a search function. We resolved it by creating a new collection with individual menu objects for each food so that we can return specific food given their id or name.