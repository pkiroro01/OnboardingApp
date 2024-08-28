# **Onboarding Application**

## **Overview**

The Onboarding Application is a web-based tool designed to guide new employees through a structured onboarding process. The application collects user information, validates input, and provides a customized learning path based on the user’s job role. It utilizes a simple form with multiple steps and offers a responsive design to enhance user experience.

## **Features**


- Multi-step form with form validation
- Progress bar indicating completion
- Dynamic display of learning paths based on job roles
- Form reset and edit functionalities
- Carousel for showcasing images
- Back-to-top button functionality

## **Technologies Used**

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **Testing**: Jest, Supertest

# **Getting Started**

## **Prerequisites**

Ensure you have Node.js installed on your machine. This project uses Node.js for the server and package management.

## **Cloning the Repository**

To get started with the project, clone the repository using the following command:

`git clone https://github.com/pkiroro01/OnboardingApp.git`

Navigate into the project directory:

`cd OnboardingApp`

## **Installing Dependencies**

Install the necessary dependencies using npm:

`npm install`

## **Running the Application**

To start the application, use the following command:

`node server.js`

This will start the server and you can access the application at http://localhost:3000/onboarding.html in your web browser.

## **Running Tests**

To ensure everything is working correctly, you can run the tests using Jest.

Ensure **Jest** is installed using `npm install jest`.

To execute the tests, use:

`npm test`

This command will run all the test cases defined in the server.test.js file to verify that the server-side functionality is working as expected.

## **File Structure**

- **Public/:** Contains static files such as HTML, CSS, JavaScript, and images.
  - **app.js:** The main JavaScript file that handles client-side interactions and form logic.
  - **index.html:** The homepage of the application.
  - **onboarding.html:** The main onboarding form page.
  - **styles.css:** Contains the styling for the application.
- **Tests/:** Contains test files.
  - **server.test.js:** Contains server-side tests using Jest and Supertest.
- server.js: The Node.js server file that serves static files and handles form submissions.
- package.json: Defines project metadata and dependencies.
- package-lock.json: Records the exact version of installed packages.

## **Contributing**

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your changes to the branch (`git push origin feature-branch`).
5. Create a pull request on GitHub.
