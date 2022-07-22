const http = require('http')

const server = http.createServer( (req,res) => {
  console.log('The server is running')
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.end(
    "<html><body><h1>Welcome to the World Wide Web!</h1></body></html>"
  );
});


server.listen(3000)




/*
Our integration test in app.test.js expects a JSON response.

Change the test to expect an HTML response header: Content-Type: text/html

Change the test to expect this HTML in response.text:

Welcome to the World Wide Web!
Run the test with npm test — it should fail.
Update the code in app.js to send the HTTP response the test expects.
Run the test with npm test — it should pass.
*/