const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    // the request parameter and the dot notation .url, .url is a property in the request object of HTTP modules that contains the URL of the incoming request but the URL will not hold the full URL, it will hold the part after the domain i.e. the path
    response.statusCode = 200; //we need to have a response send to the requests by the browser or else the browser will show errors for that the requests were not given any resposes.
    //and here we are using the dot notation and we have various properties and methods that can be utilised here and the .statusCode is a way to tell the browser wether a request succeded or not.
    response.end("<h1>" + new Date().toISOString() + "<h1>"); //the new keyword is a feature built-into JavaScript(browser and NodeJS that allows us to create JS objects based on certain "blueprints".)
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!<h1>");
  }
}

//just like we did with event listeners before when we add the handleRequest function between our brackets and we omit the parenthisis and also createServer wants a function as a parameter value and the function itself takes two parameter values
const server = http.createServer(handleRequest); // create server returns an object which has all the server functionality that is required under the hood built in
//and we just created a server, using the createServer that knows how to handle incoming requests

server.listen(3000); //and here in the next step we start listening on a so colled port number
// note Entrypoints for network traffic. Http requests sent from your browser to some remote machine require such an entrypoint in order to be handled by the server
