# Frontend README

## Iteration 1:

For Iteration 1, we connected backend to passing data from Mongodb and implementing CSS/react for user better review the website. For Frontend, we includes Navbar, link of menu/pages, login&logout, those are directing user to different destination. We leave the order page be blank and will working on it in next iteration. 

### Tasks

- Created frontend Navbar
- GoogleOAUTH login&out
- Implement background page and logo to website.
- Create ordering page and CSS in local page including items list and summarize the price
- Set up appropriate routes to take the data from backend


### Challenges
Had several routes that we needed to configure the path, and how to coordinate the data transfering

### Screenshots
![homepage](/RestaurantWebsite/media/homepage.png)
Home Page for the Restaurant

![menu](/RestaurantWebsite//media/menudemo.png)
Layout of the Menu Page

<br/>

## Iteration 2

For Iteration 2, we have successfully made persistency for the customer adding things to the cart, which is the core for the carting system of this website. Checking out is also partly done. Reloading and logging out while having items in the cart will not make the items go away. Moreover, we have created several pages: about page and order page. The about page is the description about the restaurant we decided to build the website for. The order page is the order history that the customer has done in the website. 

### Tasks

- Implement carting and checking out system
- Creating Order Page
- Creating About Page

### Screenshots
![GetMenuScreenShot](/RestaurantWebsite/media/getMenuScreenShot.png)
Insomnia Test for retrieving Menu

![databaseJsonScreenShot](/RestaurantWebsite/media/databaseJsonScreenShot.png)
JSON for Menu

![aboutPageScreenShot](/RestaurantWebsite/media/aboutPageScreenShot.png)
Layout of the About Page

![cartByUserIdScreenShot](/RestaurantWebsite/media/cartByUserIdScreenShot.png)
Insomnia Test for retrieving checkout cart

![checkoutSuccessScreenShot](/RestaurantWebsite/media/checkoutSuccessScreenShot.png)
Insomnia Test for successful chekout

![addToCartDBScreenShot](/RestaurantWebsite/media/addToCartDBScreenShot.png)
MongoDB of successful user cart registration

![OrderAddToCartScreenShot](/RestaurantWebsite/media/OrderAddToCartScreenShot.png)
Adding an item to the checkout cart

![orderAddToDBScreenShot](/RestaurantWebsite/media/orderAddToDBScreenShot.png)
MondoDB of successful order

<br/>

## Iteration 3

For Iteration 3, we further implemented the checking out. Reloading and logging out while having items in the cart will not make the items go away. we also implemented order history by displaying the items added to cart and calculating the total price to pay. Moreover, customers can search items by typing the name or category of the item.

### Tasks
- Created and further implemented Order and cart system, which can take order from user, and he also designed the logic to process checkout with different quantities, add search bar in frontend so that user can search by food category or by name. 
- Created food category button in Menu page so that chosen category will show up for user to view.
- Design and Implement order page. After checking out, user will be lead to order page, which display total price for the items in cart, the price will be automatically updated according to user's selection and updates.
- Added route, controller and and dao for getSearchItem and getSearchID so that customers can search food by id as well as by typing substring of a given food. 
- Add footer, adjust style for all the pages
- Implemented function deleteCart, research and implement search function by adding filter and update corresponding controllers for getMenu function so that customers can search by typing name of the food.

### Screenshots
![searchBar](/RestaurantWebsite/media/searchBar.png)
Fully implemented Search Bar

![searchKeyWords](/RestaurantWebsite/media/searchKeyWords.png)
Search Result based on Category (Dessert)

![sidebar](/RestaurantWebsite/media/sidebar.png)
Side Bar for Menu Page

![orderhistory](/RestaurantWebsite/media/orderhistory.png)
Past Order History

![checkoutpage](/RestaurantWebsite/media/checkoutpage.png)
Checkout Confirmation Page

### Challenges
Did research on creating Searchbar by dealing with Frontend and backend data connection, Key word searching and category filter, add/delete/reset cart. 

