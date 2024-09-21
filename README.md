# Market List App (CRUD API using Mongoose and Express)

This project is a simple Express app with Mongoose that allows users to create a list of items they need from the market and categorize them under Dairy, Fruits, and Vegetables. The application supports all CRUD (Create, Read, Update, Delete) operations for managing the list of market items.

## Features
Create an Item: Add a new item to the list and categorize it as Dairy, Fruit, or Vegetable.
Read Items: Retrieve a list of all items or filter them by category.
Update an Item: Modify an existing item's details, including its name and category.
Delete an Item: Remove an item from the list.


## Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing market items.
Mongoose: MongoDB ODM (Object Data Modeling) library for managing MongoDB data.
Body-Parser: Middleware to parse incoming request bodies.

## Prerequisites
Node.js and npm installed on your machine.
MongoDB installed locally or a MongoDB Atlas account.

## Installation
Clone the repository:

## bash
Copy code
git clone https://github.com/your-username/market-list-app.git
cd market-list-app
Install dependencies:

## bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add the following:


## Run the app:

## bash
Copy code
npm start
The server will start on http://localhost:3000.

## API Endpoints
Create a Market Item
URL: /items
Method: POST
Request Body:
json
Copy code
{
  "name": "Milk",
  "category": "Dairy"
}
Response:
json
Copy code
{
  "message": "Item created successfully",
  "item": {
    "_id": "itemId",
    "name": "Milk",
    "category": "Dairy"
  }
}
Get All Items
URL: /items
Method: GET
Response:
json
Copy code
[
  {
    "_id": "itemId1",
    "name": "Milk",
    "category": "Dairy"
  },
  {
    "_id": "itemId2",
    "name": "Apple",
    "category": "Fruits"
  }
]
Get Items by Category
URL: /items?category=<category>
Method: GET
Response:
json
Copy code
[
  {
    "_id": "itemId",
    "name": "Milk",
    "category": "Dairy"
  }
]
Update a Market Item
URL: /items/:id
Method: PUT
Request Body:
json
Copy code
{
  "name": "Cheese",
  "category": "Dairy"
}
Response:
json
Copy code
{
  "message": "Item updated successfully",
  "item": {
    "_id": "itemId",
    "name": "Cheese",
    "category": "Dairy"
  }
}
Delete a Market Item
URL: /items/:id
Method: DELETE
Response:
json
Copy code
{
  "message": "Item deleted successfully"
}
Data Model
Item Schema
The Item schema stores the details of each market item, with the following fields:

name: String, required.
category: String, required. Must be one of "Dairy", "Fruits", or "Vegetables".
Example schema definition in Mongoose:

js
Copy code
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Dairy', 'Fruits', 'Vegetables'],
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
Running Tests
To test the API, you can use a tool like Postman or curl to make HTTP requests to the API endpoints.

Example curl request to add an item:

bash
Copy code
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name": "Banana", "category": "Fruits"}'

## Contributing
Contributions are welcome! If you find any bugs or want to add features, feel free to submit an issue or a pull request.

