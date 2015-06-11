# Node.js-Template
A simple template for Node.js webservers. Serves files in the "public" directory and handles errors properly.
If you're looking for a ready-to-go Node.js web server, you're in the right place. 

# Dependencies
You'll need Express.js for this to work. To get it, run "npm install express" in the directory you'll be running the server from or "npm install express -g" to install it globally.

#Operation
Choose a release and point your terminal of choice at the directory with server.js and localhost.js in it. 

Run either "node server" if you want to run the web server (notice: this may not work if you don't have your settings ready for web-facing content as it uses port 80 which may be blocked) or "node localhost" if you want to run the localhost-friendly version (point your web browser to localhost:8080 when using this version).

# How to serve files
If a user connects to "yoursitehere.com" they will get the file at "public/index.html" by default.
If a user connects to "yoursitehere.com/content.html" they will get the file at "public/content.html" by default.
