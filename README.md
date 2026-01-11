# Mongoose Data Modelling Examples
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/vishesh1111/Data-Modelling)

This repository provides a collection of practical data models using Mongoose, the Object Data Modeling (ODM) library for MongoDB. It serves as a reference for structuring and defining schemas for various real-world application domains.

## Overview

The project contains several Mongoose schema examples categorized into different domains, demonstrating how to define models, establish relationships, and structure data for complex applications. An Express server is included to provide a basic running context.

## Data Models

The core of this repository is the `Models/` directory, which is organized by application domain.

### 1. E-commerce

This model represents a basic e-commerce platform.

-   **`User`**: Manages user accounts with `username`, `email`, and `password`.
-   **`Category`**: Defines product categories with a `name`.
-   **`Product`**: Represents items for sale. It includes `name`, `description`, `price`, `stock`, and relationships to `Category` and `User` (owner).
-   **`Order`**: Represents a customer order, containing `orderPrice`, `address`, `status`, and a reference to the `User`. It includes an array of sub-documents (`OrderItemSchema`) to list the products and quantities in the order.

### 2. Hospital Management

This model demonstrates a simplified hospital management system.

-   **`Hospital`**: Stores information about a hospital, including `name`, `address` details, and an array of `specializedIn` fields.
-   **`Doctor`**: Contains doctor details like `name`, `salary`, `qualifications`, and a reference to the `Hospital`(s) they work in.
-   **`Patient`**: Manages patient information, including `name`, `diagnosedWith`, and a reference to the `Hospital` they are admitted in.
-   **`MedicalRecord`**: A placeholder schema for future implementation of patient medical records.

### 3. Todos Application

This model outlines a simple todo list application with nested tasks.

-   **`User`**: Defines users of the todo application with `username`, `email`, and `password`.
-   **`Todo`**: Represents a main todo item, which has `content`, a `complete` status, a reference to its creator (`User`), and an array of `subTodos`.
-   **`SubTodo`**: Represents a sub-task within a main todo. It contains `content`, a `complete` status, and a reference to its creator (`User`).

## Technologies Used

-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: A minimal and flexible Node.js web application framework.
-   **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

To explore the code and run the basic server locally, follow these steps.

### Prerequisites

-   Node.js (v14 or later)
-   npm (or a compatible package manager)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/vishesh1111/data-modelling.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd data-modelling
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Start the server:**
    ```sh
    npm start
    ```

The server will start on `http://localhost:3010`. You can open this URL in your browser to see the basic "Hello Express!" page.
