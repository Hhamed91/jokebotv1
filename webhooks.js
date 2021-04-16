
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Drift = require('drift-chat');
var request2 = require('request');
const { request } = require('express');



app.use(bodyParser.json());
app.listen(process.env.PORT || 5500, () => console.log(`Your bot is listening on port 5500!`));

//shows that your public domain is hooked up
app.get('/', async(request, response) => {

    // send a response to the html page that is loading on a port
 return response.status(200).send('check it out!!')
})

//printing the message body in terminal when you receive the event
app.post('/', async(request, response) => {


// log the whole response body
//  console.log(request.body);

console.log("Chat type is --->> " +request.body.type);

// conversationId
console.log("conversationId  --->> " +request.body.data.conversationId);


console.log("Chat body is --->> " +request.body.data.body);





if (request.method == "POST") {

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


})