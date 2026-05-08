# iTunes Search App

## Description

The iTunes Search App is a full-stack web application built with React, Bootstrap, Node.js, and Express. It allows users to search for content from the iTunes Store and Apple Books using the iTunes Search API.

Users can search for different media types such as music, movies, podcasts, audiobooks, TV shows, software, ebooks, and more. Search results are displayed in a clean, responsive interface, and users can add or remove items from a temporary favourites list.

## Purpose

The purpose of this application is to demonstrate how a React frontend can communicate with an Express backend that securely interacts with a third-party API. The backend uses JWT authorization to protect API requests.

No user accounts are required, and no favourites or search history are stored after the user leaves the application.

## Key Features

- Search the iTunes Store and Apple Books
- Filter searches by media type
- Display album/content title, artist name, artwork, release date, and content type
- Add search results to a favourites list
- Remove items from favourites
- Responsive Bootstrap interface
- Express backend API
- JWT-secured API requests
- No permanent user data storage

## Technologies Used

### Frontend

- React
- Vite
- Bootstrap
- Axios

### Backend

- Node.js
- Express
- JSON Web Token
- dotenv
- iTunes Search API

## How to use

1. Clone the repo
2. In the backend folder: 
- Install dependencies:
   ```bash
   npm install
   ```
- Run application (dev)
   ```bash
   npm run dev
   ```
- Run application
   ```bash
   npm run start
   ```
- Server runs on: 
   ```bash
   http://localhost:5000

3. Front end:
- Install dependencies:
   ```bash
   npm install
   ```
- Run application (dev)
   ```bash
   npm run dev
   ```
- App runs on: 
   ```bash
   http://localhost:5173