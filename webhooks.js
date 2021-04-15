
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Drift = require('drift-chat');
var request2 = require('request');



app.use(bodyParser.json());
app.listen(process.env.PORT || 5500, () => console.log('Your first bot is listening on port 5500!'));

//shows that your public domain is hooked up
app.get('/', async(request, response) => {
 return response.status(200).send('check it out!!')
})

//printing the message body in terminal when you receive the event
app.post('/', async(request, response) => {
//  console.log(request.body);

 console.log("Chat body is --->> " +request.body.data.body);

//  if (!data) return response.send(400);

// var options = {
//     'method': 'POST',
//     'url': 'https://driftapi.com/conversations/3098908189/messages',
//     'headers': {
//       'Authorization': 'Bearer 9pBAHSXwzcibygiemAmitv0GV59qc7Cx',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "body": "hey there, check this out <a href='https://www.youtube.com/watch?v=kD30F_tjogs'>here</a>",
//       "type": "chat"
//     })
  
//   };
//   request2(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
//   });

})


