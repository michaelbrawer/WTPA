# Where's The Party App? 
### *A Mongoose/Express/Node App For Organizing a Night Out.*
#### ![Screenshot](https://i.imgur.com/dMaedgB.png)

---
### Team Blue Jays: [Alonso Tacanga](https://github.com/likealonso), [Devin Fox](https://github.com/devinfox), [Kevin de Roulet](https://github.com/kderoulet), [Michael Brawer](https://github.com/michaelbrawer)
---
### Core Technologies Used:
- HTML
- CSS
- Javascript
- Mongo DB / Mongoose
- Express.js
- Node.js

### Additional Libraries / Frameworks:
- jQuery for DOM traversal / event handling
- Bootstrap - for styling / responsive box sizing
- fontAwesome - for icons
- Passport.js / Google oAuth - for authentication / authorization
----
### Getting Started: [Click Here](https://wtpa.herokuapp.com/) to Play-In-Browser.
----
Where the Party App? is designed to address a centuries old problem for humanity:  Why am I finding myself at this terrible bar / restaurant?  And where are all of my friends?  What is the cause of this dreadful paradigm?  Where lies the seat of my morose?

This answer to these questions are relatively simple.  Human beings are creatures of habit.  We aim to break those habits.

By accessing the excellent Yelp! Fusion API our app enables users to search for nightlife options available near them. Bars & Restaurants can the be added by users to an itinerary which can then be shared with friends.  So when you next ask yourself, "Where the party app?"; boot up our site.  Then you will know!

----
### WTPA's API:
Access Where the Party App?'s API and search for an individual user, their stops, an individual stop or simply fetch all of our users' planned destinations:

#### API Endpoints:

| URL        | Method           | Required URL Params | Use  |
| ------------- |:-------------:| -----:| -----: |
| /api/users/{userId}   | Get | userId=[string] | Retrieves a single user |
| /api/users/{userId}/stops      | Get | userId=[string]   |   Retrieves all strops for a single user |
| /api/stops | Get      | None |   Retrieves all stops |
| /api/stops/{stopId} | Get      |  stopId=[string] |Retrieves an individual stop |

Sample Call (returning a single stop):
https://wtpa.herokuapp.com/api/stops/5a1a36898166804b3deedd35

----
### Next Steps / Planned Features:
- Geolocation
- calendar view / multiple itineraries
----
#### Unsolved Problems:
- Social media share functionality
----
### App Development:
#### [Trello Board](https://trello.com/b/ELxyn47s/blue-jays-nite-out)

#### Data Model:

#### ![Data Model](https://i.imgur.com/IdqBwrg.png)

#### Initial Erd:

#### ![Initial ERD](https://i.imgur.com/54Z4v4H.png)

#### [Initial Wires](https://i.imgur.com/XTe15kP.jpg)
