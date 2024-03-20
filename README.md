# Renfrewshire Foodbanks

Renfrewshire Foodbanks is a web application that provides a list of food banks in Renfrewshire, Scotland. This web application uses HTML, CSS, and JavaScript to create a user-friendly interface to find a list of food banks near a specific postcode area.

# Features

* A search bar for users to enter a postcode.
* A list of food banks near a specific postcode area.
* A table with food bank names, addresses, phone numbers, and a clickable link for directions.


# How does it work?

The webpage contains a form with an input field where users can enter a postcode. When the user clicks on the search button, a JavaScript function called getFoodBanks() is called. This function retrieves the postcode entered by the user and validates it by checking if its a postcode within the Renfrewshire area, for example PA3 PA4 etc. If a user enters a postcode outside the Renfrewshire are, for example G11, G12, it will return an error message.

If the postcode is valid, an AJAX request is sent to the givefood.org.uk API to retrieve a list of food bank locations near the postcode area.

The returned data is then filtered based on the valid postcode areas specified in an array. If no food banks are found in valid areas, a message is displayed to inform the user that no food banks were found. Otherwise, a table is generated that displays the name, address, phone number, and a clickable link for directions to each food bank in the valid areas.

This web application is designed to be responsive to different screen sizes, thanks to Bootstrap CSS framework, which provides a mobile-first design approach. The Google Maps JavaScript API is also loaded to display directions to each food bank on the map. The application also has an event listener to the postcode input field, which triggers the getFoodBanks() function when the enter key is pressed.

# Comments

The Renfrewshire Foodbanks web application provides an easy and accessible way for users to find a list of food banks in the Renfrewshire area. It is designed to be user-friendly, responsive, and informative, providing essential information to users who may be in need of food assistance.

# View app
[https://cmack.tech/renfrewshirefoodbanks](https://cmack.tech/renfrewshirefoodbanks/)

