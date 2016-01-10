Thermostat Challenge
=================

Author: Emma Beynon

Github: https://github.com/emmabeynon

Email: emma.beynon@gmail.com


This is my submission for the Makers Academy Week 5 Project: https://github.com/makersacademy/course/blob/master/thermostat/0_challenge_map.md

Overview
---------
For this project I have learned JavaScript and jQuery to build a thermostat.  HTML and CSS have also been used for the front end.  JavaScript has been unit tested using Jasmine.

User Stories
------------
```
As a User
So that it's not too cold
I would like a default temperature of 20C

As a User
So that I can feel warmer
I would like to be able to increase the temperature

As a User
So that I can feel cooler
I would like to be able to decrease the temperature

As a User
So that it doesn't get too cold
I would like a minimum temperature

As a User
So that I can limit the maximum temperature
I would like to turn on a Power Saving Mode

As a User
So that I can have a higher maximum temperature
I would like to to turn off Power Saving Mode

As a User
So that I can limit the maximum temperature
I would like Power Saving Mode to be on by default

As a User
So that I can quickly return to the default temperature
I would like a reset button

As a User
So that I can gauge what my energy usage level is
I would like as colour displayed to indicate the energy usage level

As a User
So that I can make the right decision about choosing the temperature
I would like to see what my city's current temperature is
```

Instructions
------------
1. Fork this repo.
2. Open index.html in your browser.

Approach
---------
To start off, I wrote a JavaScript programme that enables the thermostat to perform its various functions.  I created a Thermostat object constructor method that has a temperature variable with a default temperature of 20. In order to change the temperature, I created functions for an "up button" and a "down button" which increase and decrease the temperature variable by 1 respectively.  The user stories required a minimum temperature, so I created a constant variable to store this and implemented an error message which is thrown if the user tries to decrease the temperature below the minimum.  The next user story required a power saving mode, which changes the maximum temperature depending on whether it's on an off.  To begin with, I created functions which changed a maximumTemperature variable to the required number.  Later, in order to meet front end requirements, I added a powerSavingMode variable to capture whether it is on or off.  This is also set as the default mode, so the maximum temperature is also set to the default mode limit.  Now that there is a maximum temperature in place, I added an error which is thrown if the user tries to increase the temperature above the maximum.  I also realised that it was possible that if a user had their temperature set above the power saving mode maximum temperature and then turned it on, the temperature would stay above the maximum.  So I ensured that if this was the case, when power saving mode is switched on the temperature is decreased down to the new maximum temperature.  The user stories also required a reset button which I implemented as function that sets the temperature to the default temperature.  Finally, I created a function to return an energy usage level dependent on what temperature the thermostat is set to.

With the business logic in place, I moved on to using HTML and jQuery to build the interface.  As a first step I built a rough outline of the page in HTML and added the necessary buttons for increasing, decreasing and resetting the temperature, as well setting the power saving mode to on or off.  Then, I used the jQuery text() method to display the current temperature on the page.  Next I added functionality to the buttons using click events to trigger the relevant JavaScript method.  However, while the buttons were working and I could see the change to temperature in the console, it wasn't displaying on the page.  So I added the text method I created to display the current temperature to a function called updateTemperature, which is called by each button after their temperature changing function is called.  I also wanted the user to be able to see if power saving mode is on or off, so I created a function to display "On" or "Off" on the page, which is called after the power saving mode methods are called.  Next, I integrated the energy usage levels by using the attr method to set the class of the temperature depending on its usage level.  Green is displayed for low usage, orange for medium usage and red for high usage.

The final user story requires displaying the current temperature for the user's city.  I used the OpenWeatherMap API as the data source, and AJAX to request the data without having to refresh the page.  The user can select a city from the dropdown menu and the page will display that city's current temperature.

Further Work
-------------
* Allow users to enter their city to display temperature - error if not recognised?
* Display errors on the page
* Variable temperature increments?
* Fahrenheit
* Styling - power saving mode buttons, local temperature
