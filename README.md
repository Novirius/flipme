# FLIPME

### Description
Flip me is a flashcard generating application. It uses user input to create flashcards that the user can interact with to memorize facts or phrases. 

[Website](https://flip-me.herokuapp.com/#/)

### Getting started


Users can interact with the website by creating an account or using the demo login. The demo login is recommended since new users will need to create cards if they want to interact with the main feature (Flashcards).

### Technologies used

Flipme was developed using the following:

* Rails 5.2.4.1
* Node v13.3.0
* Ruby 2.5.1
* PostgreSQL 10.10
* React 16.12.0
* Redux 4.0.5

The frontend is built as a single page app using React and Redux. Node and webpack act as the module bundler. The backend uses Ruby on Rails with PSQL acting as the database. 

### Notable features
###### User Auth

I built user authentication, from scratch, on both the backend and frontend. Logged out users have limited functionality including the ability to log in and sign up. Logged have expanded functionality and the ability to navigate to every page except the original splash page. Attempts to log into the original splash page will redirect to the user's show page. Items belonging to logged in users will display when logged in and disappear upon logging out.

![alt logo](https://media.giphy.com/media/eLp4Bd4GbEkjfIYyyK/giphy.gif)

###### Flashcard interaction

Logged in users can create and save decks to the database. These decks will persist upon page refresh and session closure on the backend. Users can then interact with their deck by accessing their decks index and clicking on their desired deck. This will bring the user to a flashcard interaction page. Clicking on the flashcard will flip it and reveal the back text. Clicking the arrows, left or right, will change the card displayed.

![](https://media.giphy.com/media/daa4a2TRypSBL6ELxb/giphy.gif)

###### Card editing and creation

Logged in users can create, update, and save cards to the database. While on the flashcard interaction page, users can click the edit icon to access a page where they can make changes to their deck. Clicking the "Create card" button will display a dropdown that reveals a field for adding new cards. Newly added cards will appear in the card list index for that given deck.

![](https://media.giphy.com/media/M971bF7G8NwOKjzWHs/giphy.gif)
