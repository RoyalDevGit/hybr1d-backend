<h1 align='center'>Hybr1d backend assessment</h1>

## Overview
This is a mockup of REST API for an e-commerce marketplace. <br/>
The endpoints are like the following:<br/>
<b> -- POST /api/auth/register </b> <br/>
  Register a user (accept username, password, type of user - buyer/seller) <br/>
<b> -- POST /api/auth/login </b> <br/>
  Let a previously registered user log in (e.g. retrieve authentication token) <br/>
<b> -- GET /api/buyer/list-of-sellers </b> <br/>
  Get a list of all sellers <br/>
<b> -- GET /api/buyer/seller-catalog/:seller_id </b> <br/>
  Get the catalog of a seller by seller_id <br/>
<b> -- POST /api/buyer/create-order/:seller_id </b> <br/>
  Send a list of items to create an order for seller with id = seller_id <br/>
<b> -- POST /api/seller/create-catalog </b> <br/>
  Send a list of items to create a catalog for a seller <br/>
<b> -- GET /api/seller/orders </b> <br/>
  Retrieve the list of orders received by a seller <br/>


Using:
- Node.js
- Express
- Mongoose

### Set up
1. <b> cd hybr1d-backend </b>
2. <b> npm install </b>

### How to run
1. <b> npm start </b> or <b> yarn install </b>
