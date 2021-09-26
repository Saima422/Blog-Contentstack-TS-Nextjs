
# Blog Rendering App
Blog Rendering App makes API calls to Contentstack for Fetching all blogs, Fetching a Single blog with specific ID, Fetching NavBar data and Footer data.

## Introduction

A simple frontend for Blog Rendering Application created with Typescript and Next.js. Built with an aim to learn and implement creation of a Next.js Frontend with Typescript and Implementing Contentstack as Backend. Blog Application supports functionalities of fetching all the blog data from Contentstack and displaying it on the UI in the form of tiles and fetching a single blog data with specific blog ID and displays the data on a different Route. 

## Getting Started

These are instructions to set up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) (which comes with npm) installed on your computer.

### Installation

From your command line:

1. Clone the repo
   ```sh
   $ git clone https://github.com/Saima422/Blog-Contentstack-TS-Nextjs.git
   ```
2. Install the Dependencies
   ```sh
   $ npm install
   ```
3. To start the App, use the following command
    ```sh
    $ npm run start
    ```
4. The Next.js Application is now Up and Running
5. Open [http://localhost:3000](http://localhost:3000)
    with your browser to see the result.

<br>

## Application View

* `/` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/blog-react/home-route.png)

* `/:blogId` Route

    ![](https://saima422.github.io/Image-JSON-Data-Repo/blog-react/id-route.png)


## Scope and Functionality

#### Features:
* Fetches All blogs from Contentstack upon load of Application
* Fetches a single Blog content from Contentstack when a "View Full Blog" button of the Blog is Clicked
* Navigation between Different Related Blogs through Links provided on the Blog
* Fetches the NavBar and Footer Data from Contentstack and displays the content according to it.
* Manages a central state for NavBar data and Footer data using Context API

## Referred Resources
* [Next.js](https://nextjs.org/docs/getting-started)
* [Typescript](https://basarat.gitbook.io/typescript/type-system/index-signatures)
* [Next.js Routing](https://nextjs.org/docs/routing/introduction)
* [Context API in Next.js](https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25)


## Contact

* Author - Saima Sayed 
* [Connect on LinkedIn](https://www.linkedin.com/in/saima-sayed-6482481b9/)
* [Project Resources](https://github.com/Saima422/Blog-Contentstack-TS-Nextjs)
* [Live Link](https://blog-contentstack-ts-nextjs-a5dxkb01y-saima422.vercel.app/)
