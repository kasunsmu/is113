// Import the http module to create a server
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
 // Set the response header to indicate HTML content
 res.writeHead(200, { 'Content-Type': 'text/html' });

 // Send the "Hello, World!" message to the browser
 res.end('<h1>Hello, WAD1!</h1>');
});

// The server listens on the defined port
const port = 8000;
server.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});
