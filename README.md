# simple-node-app
A simple node app.
Express was used to start an HTTP server and send an HTML file!
require() is the main way that we call packages in Node. Once we have created an Express application in app, we can define routes on it using the HTTP variable. app.get() creates a GET route for /.
When creating routes, we will always have access to the req (request) and res (response). The request contains information from the browser like HTTP agent, information passed in and more. The response is what we will send back to the user. We are using sendFile(), there are more things that can be done like sending back JSON data using res.json().
We can start the server using app.listen() and passing in the port that we want 8080.
