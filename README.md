<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/simonasta97/fitzone-blog.git">
    <img src="./public/images/fitness.png" alt="Logo" width="75">
  </a>

  <h3 align="center">FitZone Blog</h3>
  <p align="center">
    Build Your Body Strong!
    <br />
    <br />
    <img width ='46px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg'>
    <br />
    <a href="#usage">Demo</a>
    ·
    <a href="https://github.com/simonasta97?tab=repositories">Explore my other projects</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<kbd>![image](https://user-images.githubusercontent.com/103176056/227202991-d7ddb9ca-2cf8-4a0a-9eb5-e10a833754ed.png)</kbd>


FitZone blog allows you to find and add information about how to be healthy, to share comments & find your fitness program!

## Key Features

* A **Guest view**, with limited interaction and a **Logged in view** with full functionality
* Logged in users can: 
    * **Add** new posts
    * **Comment**
    * **Add** new fitness program(admin only)
    * **Delete** or **Edit** any post they have created 
* Client-side **Routing** via **React Router**

The website uses functional components, the **Context API**, **Controlled Forms** and does styling via **CSS modules** and **Bootstrap**.
Architecturally, components are split into folders, containing the relevant logic & styling. 

## Built With

The project is built using:
* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [react-router](https://reactrouter.com/en/main) - collection of navigational components.

<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/simonasta97/fitzone-blog.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```sh
   npm start
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Demo
![](https://github.com/simonasta97/fitzone-blog/blob/main/public/images/demo.gif)

**Register** a new account or **Login** with the demo credentials. This allows you to **Create** new posts and **Add** new program(only for admin), to **Comment** on all existing posts. Furthermore, you can **Edit** & **Delete** the posts you have created and if you are admin you can  **Edit** & **Delete** the fitness program. **Blog** page (All users can view all posts. Authenticated users have ability to view their own posts.)
**Details** page(All users can view detail information for each post. Guests can see only the information for given post. The author of post have ability to edit or delete post. At the comments section of detail view authenticated users can write or delete comments.

<!-- CONTACT -->
## Contact

Simona Milcheva - simonasta@abv.bg

Project Link: [https://github.com/simonasta97/fitzone-blog.git](https://github.com/simonasta97/fitzone-blog.git)
