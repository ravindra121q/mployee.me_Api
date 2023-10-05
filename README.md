

# User Sign-Up and Post Management API

This project implements a User Sign-Up and Post Management API that allows users to sign up using their name and email, create posts with content and user field, delete posts by providing a postID, and fetch all posts made by a specific user.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Deployed Version](#deployed-version)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Getting Started

### Prerequisites

Before running this project, you'll need the following:

- Node.js and npm installed
- MongoDB installed and running
- Git (for cloning the repository)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/user-signup-post-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd user-signup-post-api
   ```

3. Install the dependencies for both the backend and frontend (if applicable):

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

4. Configure your environment variables (e.g., database connection settings) in a `.env` file.

5. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

6. Start the frontend (if applicable):

   ```bash
   cd frontend
   npm start
   ```

Your User Sign-Up and Post Management API should now be up and running.

## Usage

Use Api with the Give End Points

## API Endpoints

1. **User Sign-Up API**
   - Endpoint: `POST /api/signup`
   - Request Body:
     - `name` (string): The user's name.
     - `email` (string): The user's email address.
   - Response: 200 OK (Successful user sign-up)

2. **Create Post API**
   - Endpoint: `POST /api/posts`
   - Request Body:
     - `userId` (string): The ID of the user creating the post.
     - `content` (string): The content of the post.
   - Response: 200 OK (Successfully created)

3. **Delete Post API**
   - Endpoint: `DELETE /api/deletepost/:postId`
   - Request Params:
     - `postId` (string): The ID of the post to be deleted.
   - Response: 200 OK (Successful post deletion)

4. **Fetch User's Posts API**
   - Endpoint: `GET /api/posts/:userId`
   - Request Params:
     - `userId` (string): The ID of the user whose posts are to be fetched.
   - Response: 200 OK (All the posts from the user)

## Testing with Postman

To test the API, you can use Postman with the following deployed link:

- **Postman Testing Link**: [https://zealous-pink-donkey.cyclic.app](https://zealous-pink-donkey.cyclic.app)

## Deployed Version

You can access the deployed version of this API at [https://zealous-pink-donkey.cyclic.app/EndPoints](https://zealous-pink-donkey.cyclic.app).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- React.js (if applicable)
- Other libraries and dependencies (list them here)

## Contributing

If you'd like to contribute to this project, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes
- Test your changes thoroughly
- Create a pull request


---

