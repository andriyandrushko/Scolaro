## Project Overview

This project consists of a backend API and a frontend application for managing orders.

### Backend

**Technologies Used:**
* .NET 8
* Entity Framework Core
* LocalDB (for development)
* Swagger (for API documentation)

**Setup:**
1. Clone the repository
2. Navigate to the backend directory:
   cd backend
3. Restore NuGet packages:
   dotnet restore
4. Apply database migrations:
   dotnet ef database update
5. Start the development server:
   dotnet run
   This will start the backend development server at https://localhost:7185/.


**API Endpoints:**

**Orders Controller**

* **GET /api/orders**
  Retrieves a list of all orders.
  * **Response:** An array of order objects with properties: orderId, customerName, productId, quantity, orderDate.

* **POST /api/orders**
  Creates a new order.
  * **Request Body:** An order object with properties: customerName, productId, quantity.
  * **Response:** The created order object with a generated orderId.

* **GET /api/orders/{orderId}**
  Retrieves a specific order by ID.
  * **Response:** The order object with the specified orderId.

* **PUT /api/orders/{orderId}**
  Updates an existing order.
  * **Request Body:** An order object with updated properties.
  * **Response:** The updated order object.

* **DELETE /api/orders/{orderId}**
  Deletes an order by ID.
  * **Response:** A success message.

**Products Controller**

* **GET /api/products**
  Retrieves a list of all products.
  * **Response:** An array of product objects with properties: productId, productName, description, price.

* **GET /api/products/{productId}**
  Retrieves a specific product by ID.
  * **Response:** The product object with the specified productId.

### Frontend

**Technologies Used:**
* Angular 17
* Angular Material

**Setup:**
1. Make you have installed NodeJS latest stable version
2. Navigate to the frontend directory:
   cd ScolaroOrdering
3. Install dependencies:
   npm install
4. Start the development server:
   ng serve
   This will start the frontend development server at http://localhost:4200.
