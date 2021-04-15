var http = require("http"); //Library to create the server
var port = process.env.PORT || process.env.VCAP_APP_PORT || 5500;
// var connect = require('connect');
// var app = connect();

function onRequest(request, response) {
  //GET handling
  //   if (request.method == 'GET') { //THIS WILL BE EXECUTED WHEN YOU OPEN THE LOCAL HOST IN THE BROWSER
  //   createEmbeddedWithTemplate(options).then(function(signatureId) {
  //       geturl(signatureId).then(function(signUrl){
  //         console.log("Sign url", signUrl);
  //         var prettResponse = JSON.stringify({ 'url': signUrl });
  //         response.writeHead(200, {'Content-Type' : 'application/json', 'Access-Control-Allow-Origin' : '*'});
  //         response.end(prettResponse);

  //       }, function(error){
  //         console.error(error);
  //       });

  //   }, function(error) {
  //     console.error("Failed!", error);
  //   });
  // }

  if (request.method == "POST") {
    //TO MANAGE CALLBACKS (callbacks come as a POST requests)
    //Prepare and send response
    try {
      var responseBody = JSON.stringify({ body: "" });
      response.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      });
      response.end(responseBody);

      //End of prepare and send response

      var body = "";
      var { headers } = request;
      var signature = headers["user-agent"]; //Extract the 'x-helloworks-signature' header from the request in order to print it for debugging (all headers are represented in lower-case, regardless of how the client sent them)
      console.log("User agent ", signature);
      request.on("data", function (data) {
        body += data;

        // console.log(body)

        // var newBody = data.slice(88, 1604);

        // var newBody = JSON.parse(newBody)

        // console.log(newBody)

        // var test = body.indexOf("signature_request_sent");

        // console.log(test)

        // if (body.indexOf("signature_request_sent") === 115) {
        //   var newBody = data.slice(88, 1604);
        //   var newBody = JSON.parse(newBody)
        //   const eventType = newBody.event.event_type;
        //   const signatureRequestId = newBody.signature_request.signature_request_id;
        //     console.log(`Signature request ${signatureRequestId} has been sent.`);
        // } else {
        //   console.log("You got the worng index")
        // }

        // const eventType = newBody.event.event_type;
        // const signatureRequestId = newBody.signature_request.signature_request_id;

        // console.log("event for  " + signatureRequestId , " ----> " + eventType);

        // const data = req.body.json;
        // const events = JSON.parse(data);
        // const eventType = events.event.event_type;
        // const signatureRequestId = events.signature_request.signature_request_id;

        // switch (eventType) {
        //   case 'signature_request_sent':
        //     console.log(`Signature request ${signatureRequestId} has been sent.`);
        //     break;
        //   case 'signature_request_viewed':
        //     console.log(`Signature request ${signatureRequestId} has been viewed.`);
        //     break;
        //   case 'signature_request_downloadable':
        //     console.log(`Signature request ${signatureRequestId} is downloadable.`);
        //     break;
        //   case 'signature_request_signed':
        //     console.log(`Signature request ${signatureRequestId} has been signed.`);
        //     break;
        //   case 'signature_request_declined':
        //     console.log(`Signature request ${signatureRequestId} has been declined.`);
        //     break;
        //   case 'signature_request_all_signed':
        //     console.log(`Signature request ${signatureRequestId} has been fully compelted.`);
        //     break;

        //   default:
        //     console.log('');
        //     break;
        // }
      });
      return;
    } catch (err) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write("Bad Post Data.  Is your data a proper JSON?\n");
      response.end();
      return;
    }
  } // End of POST handling
} // end of OnRequest

http.createServer(onRequest).listen(port);

//TO SEE THE FULL URL WHERE THE SERVER IS RUNNING (THIS IS THE URL THAT YOU WILL NEED TO OPEN IN THE BROWSER IN ORDER TO EXECUTE THE CODE)
console.log("Server running at http://127.0.0.1:" + port);
