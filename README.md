# Wikipedia Image Search

A simple JavaScript project that allows users to search for a topic or enter any text and automatically fetches related images from **Wikimedia Commons API** and displays them in a clean, card-based layout.

## Features

- **Text-Based Search:** Enter a keyword or topic to find related images.
- **API Integration:** Fetches images dynamically using the Wikimedia Commons API.
- **Image Previews:** Displays thumbnail images for faster loading.
- **Image Captions:** Shows the corresponding image title below each image.
- **Open Original Image:** Provides a link to view the original, full-resolution image in a new tab.
- **Dynamic Rendering:** Generates image cards using JavaScript DOM manipulation.
- **Error Handling:** Handles failed API requests and unsuccessful HTTP responses.
- **Responsive Search:** Clears previous results and displays new ones whenever a search is performed.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API
- Wikimedia Commons API

## How It Works

1. The user enters a search query in the input field.
2. JavaScript captures the form submission and prevents the default page reload.
3. The query is encoded using `encodeURIComponent()` and appended to the Wikimedia Commons API URL.
4. The Fetch API sends an asynchronous HTTP request.
5. The API returns image information in JSON format.
6. JavaScript extracts the image data and dynamically creates image cards.
7. The images, captions, and links to original images are displayed on the page.

## API Used

**Wikimedia Commons API**

`https://commons.wikimedia.org/w/api.php`

The project uses the API's search generator to find relevant files and retrieve their image information, including thumbnail and original image URLs.

## Key JavaScript Concepts Practiced

- DOM Manipulation
- Event Listeners
- Form Handling
- Async/Await
- Fetch API
- Promises and HTTP Responses
- JSON Parsing
- Array Methods (`forEach`, `Object.values`)
- Dynamic HTML Element Creation
- Error Handling (`try...catch`)
- URL Encoding (`encodeURIComponent`)
- Template-free DOM Rendering

## Running the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/shivrajsuman0200-droid/Wikipeadia-Image-Search
   ```
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a search term and explore the related images.

## Project Purpose

Built as a hands-on JavaScript learning project to understand how frontend applications communicate with external APIs, process asynchronous data, and dynamically render content on a webpage.

