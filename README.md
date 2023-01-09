<div align="center">
  <h1 align="center">WorkoutBuilder</h3>
  <img src="https://user-images.githubusercontent.com/78510016/211168572-382d0e7c-887f-41c9-baee-44281cd8226a.png"/>
  <br/>
  <br/>
  <div align="center">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
    <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>
  </div>
  <br/>
  <p align="center">
    A workout routine builder and explorer built with Angular, TailwindCSS, and Firebase.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#todo">TODO</a></li>
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CarlNoe/workout-builder.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add the Api Keys (Firebase API key + ExercisesAPI key) to environment_example.ts, then rename the file to environment.ts

<!-- USAGE EXAMPLES -->

## Usage

1. Run the app by going to the root directory and running
   ```sh
   ng serve
   ```
2. Navigate to localhost:4200

<!-- ROADMAP -->

## TODO

- /!\ Secure firebase and user connections (https://firebase.google.com/docs/firestore/quickstart#secure_your_data)
- /!\ Find a long term solution for the Angular/Fire incompatible version
  (Currently fixable by adding the type <T> at the end of the functions in "node_modules\@angular\fire\compat\firestore\interfaces.d.ts")
- Make the nav bar listening to the user's auth state
- Add user friendly popups that confirm the user's actions and display errors
- Get all exercise instead of a random fraction of them
- Better Navigation in the exercise list
- Add a search bar to the exercise list
- Use modules to organize the code
- Create models and type data that are not typed yet