
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
 return response.status(200).send('check it out!!')
})

//printing the message body in terminal when you receive the event
app.post('/', async(request, response) => {
//  console.log(request.body);

 console.log("Chat body is --->> " +request.body.data.body);

//  if (!data) return response.send(400);

if (request.method == "POST") {

//terminal will print a uncolored json response
// console.log(JSON.stringify(request.body))


//terminal will print a colored json response
// console.log(request.body)


var options = {
    'method': 'POST',
    'url': 'https://driftapi.com/conversations/3098989957/messages',
    'headers': {
      'Authorization': 'Bearer 9pBAHSXwzcibygiemAmitv0GV59qc7Cx',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "body": "response from postman",
      "type": "chat"
    })

  
  };

  
  request2(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);


  });

    }


})