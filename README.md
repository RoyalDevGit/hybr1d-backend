<h1 align='center'>Hybr1d backend assessment</h1>

## Overview
This is a mockup of REST API for an e-commerce marketplace.
The endpoints are like the following:
POST /api/auth/register
  Register a user (accept username, password, type of user - buyer/seller)
POST /api/auth/login
  Let a previously registered user log in (e.g. retrieve authentication token)
GET /api/buyer/list-of-sellers
  Get a list of all sellers
GET /api/buyer/seller-catalog/:seller_id
  Get the catalog of a seller by seller_id
POST /api/buyer/create-order/:seller_id
  Send a list of items to create an order for seller with id = seller_id
POST /api/seller/create-catalog
  Send a list of items to create a catalog for a seller
GET /api/seller/orders
  Retrieve the list of orders received by a seller


Using:
- Node.js
- Express
- Mongoose

### Set up
1. <b> cd hybr1d-backend </b>
2. <b> npm install </b>

### How to run
1. <b> npm start </b> or <b> yarn install </b>
