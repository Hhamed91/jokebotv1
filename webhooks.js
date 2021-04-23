const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Drift = require("drift-chat");
var request2 = require("request");
const { request } = require("express");

app.use(bodyParser.json());
app.listen(process.env.PORT || 5501, () =>
  console.log(`Your bot is listening on port 5501!`)
);

//shows that your public domain is hooked up
// app.get("/", async (request, response) => {
//   // send a response to the html page that is loading on a port
//   return response.status(200).send("┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿");
// });

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.get('/test', function(req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});

//printing the message body in terminal when you receive the event
app.post("/", async (request, response) => {

  console.log("I am getting something before post")

  // log the whole response body
  //  console.log(request.body);

  //chat type
  //console.log("Chat type is --->> " + request.body.type);

  // conversationId
  // console.log("conversationId  --->> " +request.body.data.conversationId);

  // Chat body
  //console.log("Chat body is --->> " + request.body.data.body);

  // orgId
  //console.log("Org ID --->> " + request.body.orgId);

//  author type 
//console.log("Author info --->> " + JSON.stringify(request.body.data.author) );


  if (request.method == "POST") {
    //log something
    // console.log("I am getting something after post")
    //terminal will print a uncolored json response
    // console.log(JSON.stringify(request.body))
    //terminal will print a colored json response
    // console.log(request.body)
    // Send a response back to the chat as a new chat
    // var options = {
    //     'method': 'POST',
    //     'url': 'https://driftapi.com/conversations/3098989957/messages',
    //     'headers': {
    //       'Authorization': 'Bearer 9pBAHSXwzcibygiemAmitv0GV59qc7Cx',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       "body": "response from postman",
    //       "type": "chat"
    //     })
    //   };
    //   request2(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     console.log(response.body);
    //   });
  }
});
