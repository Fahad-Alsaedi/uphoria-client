# Welcome to Uphroia

This is a place to share short form content, much like an app that sounds like TipTop. Maybe you don't want to share all 
your data with China but you still want to understand what your friends are referencing. This is the app for you. Create 
a profile, following hashtags and other users, update your own profile with a bio, instagram link or a personal url.

## Getting Started
To run this project on your local machine, fork and clone the [client](https://github.com/anthonygregis/uphoria-client) 
and [backend](https://github.com/anthonygregis/uphoria-backend) repos from github. Install all dependencies by running
 `npm i` in the project directory terminal. Create a .env file to keep your APP_SECRET, MONGO_URI, CLOUDINARY_SECRET 
 CLOUDINARY_KEY and CLOUDINARY_NAME. Make sure you are using Node version 12; check by running `node -v` in your terminal. 
 If you're running something higher than 12.18.3 then run `nvm use 12` in your terminal to use the correct version. 
 
 ### Erd & Wireframe
 
 [ERD](https://app.lucidchart.com/documents/edit/d6c23495-cdc7-4958-a05b-f4d7aaa90dbc/0_0?shared=true).
 
 ![Wire Frame 1](https://i.imgur.com/iO6v55E.png)
 ![Wire Frame 2](https://i.imgur.com/mqXkyYd.png)

### Tech Stack

* Mongoose
* Mongodb
* Express
* React
* Nodejs
* GraphQL
* Apollo
* Material UI
* Cloudinary
* Bcrypt

### Style Guide

* All components are functional, not class based and use arrowhead syntax
* Ensure your IDE is using 2 space tabbing (VS Code | Intellij)
* Use double quotes in strings
* We are #AntiSemiColon Gang
* Make sure your functions / variables describe what they are doing or storing
* Catch your errors, those are important.
* When console logging your errors, make it descriptive of what/where the error is
* Refrain from excessive coding comments
* Avoid going over 80 characters per line
* ONE FEATURE PER BRANCH (If you don’t it will lead to mass PR conflictions)


### Import Code Snippets

```javascript
const resolver = {
	Query: {
		user: {
			description: "Returns a user based off their ID",
			resolve: async (_, {id, ...args}, context) => {
				console.log("User route hit")
				if (!args.privilegedSecret) {
					args.privilegedSecret = ""
				}
				const foundUser = await db.User.findById(id).populate({ path: "videos", options: { sort: { 'createdAt': -1 } } })

				console.log(foundUser)
				if (args.privilegedSecret !== "antiTikTok") {
					foundUser.email = "Not Authorized"
					foundUser.birthday = "Not Authorized"
				}
				return foundUser
			}
		}
    }
}
```

```javascript
const typeDefs = gql`  
type User {
    id: ID!
    username: String!
    email: String
    password: String!
    name: String!
    birthday: Date
    profile: Profile!
    followingUsers: [ID!]!
    videos: [Video!]!
  }
`
```





# Models

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| username | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| birthdate | Date | Can be updated later |
| followingUsers | Array | Can be updated later |
| followingHashtags | Array | Can be updated later |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Profile Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| bio | String | Can be provided later |
| instagramUrl | String | Can be provided later |
| personalUrl | String | Can be provided later |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |


### Videos Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| description | String | Can be provided later |
| shares | Integer | Can be provided later |
| user | String | ObjectId |
| likes | Integer | Inc |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Routes

| Route Name |  Notes |
| ---------------  | ------------------------------ |
| / |  Home route, protected |
| /auth  | Auth route with register and login |
| /profile  | User profile, protected |
| /create  | Upload videos |
| /edit  | Edit user profile, protected |




### Sample Text

Title (A Title Image too if possible…Edit them on canva.com if you are not a graphic designer.)
Description(Describe by words and images alike)
Demo(Images, Video links, Live Demo links)
Technologies Used
Special Gotchas of your projects (Problems you faced, unique elements of your project)
Technical Description of your project like- Installation, Setup, How to contribute.

https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991
