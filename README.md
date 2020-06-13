# Timetable-API

Here, I've created an API for managing timetables and finding out freeslots for user. This was my ISOC'20 Web Developement project. I would like to thank my mentor [Divyansh Khandewal](https://github.com/noob-master147) without whose help and constant guidance, this would not have been possible. This was truly an enriching experience. I have learnt a lot from this project. This API is divided into 3 routes namely:
1. ## **user.js**
      This is a route for accepting basic user details and performing CRUD operations. 

2. ## **timetable.js**
      This is a route for accepting the specific user's timetable by finding the user and adding the timetable as a sub-document to user document and performing CRUD operations. This route can also be used to find out the free slots of user. This route can also be used to find out the free slots of user.
  
3. ## **availableSlots.js**
      This route is basically used for finding out all users free in a particular slot and alloting desk duties accordingly. 
      
  ## User Routes
     
| Route Name | Request Type | Function |
| --- | --- | --- |
| /user/create| Post | To create a new user in database |
| /user/find| Post | To find a new user by their name in the database |
| /user/patch| Patch | To update the existing details of the user in the database |
| /user/delete| Delete | To delete an exisiting user from database by finding them by their name |

  ## Timetable Routes     
     
| Route Name | Request Type | Function |
| --- | --- | --- |
| /timetable/create| Post | To create user's timetable as a sub-document to the user's detail document |
| /timetable/find| Post | To find a the timetable of user by his name |
| /timetable/freeSlots| Post | To find the free slots of the user |
| /timetable/patch| Patch | To update the existing details of the user's timetable in the database |
| /timetable/delete| Delete | To delete an user's timetable from database by finding them by their name |

## Available Slots Routes
     
| Route Name | Request Type | Function |
| --- | --- | --- |
| /duties/find| Post | To find all users who're free in a particular slot |




