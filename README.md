Product Showcase Application:
This is a TypeScript-based web application designed to showcase products with a simple frontend-backend architecture. The application is built with a React (or Next.js) frontend and a Node.js backend, which serves product data stored in a JSON file. This setup is suitable for a small-scale project and avoids the complexity of a full database.

Project Structure:
Frontend: Built with Next.js (React-based framework) and TypeScript. The frontend fetches data from the backend and displays product cards with properties such as Name, Rating, Price, Image, and Color.
Backend: A lightweight Node.js server serves as the API provider. Product data is stored in a JSON file (products.json), which the server reads to respond to API requests.
Key Features
Static Product Data: Data is stored in a JSON file rather than a database, making it easy to manage without requiring a database setup.
Modular Structure: Separation between frontend and backend allows for easy updates and scalability.
TypeScript: Provides static typing, enhancing code reliability and maintainability across both frontend and backend.
Installation & Setup
Clone the repository and navigate to the project directory.

Install dependencies:

cd server
npm install
cd client
npm install

Run the backend:
cd server
npm run dev

Run the frontend:
cd client
npm run dev
The backend will start on localhost:3001 and the frontend on localhost:3000.

Choices Made & Rationale
Next.js (React-based frontend): Next.js is a powerful framework that supports TypeScript, server-side rendering, and API routes, making it ideal for scalable applications.
JSON File for Data Storage: For a small, lightweight application, a JSON file is sufficient for storing data. This avoids the overhead of managing a database (e.g., MongoDB) and simplifies setup.
Express for the Backend: Node.js with Express is used to serve the JSON data as an API, making it easy to fetch data from the frontend without adding a complex backend infrastructure.
TypeScript: Using TypeScript adds type safety to the project, reducing potential bugs and making the code easier to understand and maintain.


Trade-offs:
-JSON Storage Limitations: Using a JSON file for data storage is quick and simple but limits the scalability of the application. This setup is best suited for projects with minimal data manipulation needs.
-Lack of Database Flexibility: While the JSON approach simplifies setup, it lacks features like indexing, querying, and scalability found in databases such as MongoDB. For more complex applications, a database would be preferable.
-Static Data: The current setup does not support real-time data updates. Any modifications to product data require manual changes to the JSON file, which could be a limitation if frequent updates are necessary.

Future Improvements:
Switch to a Database: For a production-ready application, consider moving from a JSON file to a NoSQL database (e.g., MongoDB) to allow for data expansion and flexibility.
Add Caching: Implementing caching would improve performance, especially as data size grows.
Enhanced Frontend: Adding features like filtering, sorting, and search functionality would improve the user experience.
