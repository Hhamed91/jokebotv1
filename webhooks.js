
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Drift = require('drift-chat');
var request2 = require('request');
const { request } = require('express');



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

if (request.method == "POST") {

//terminal will print a uncolored json response
// console.log(JSON.stringify(request.body))


//terminal will print a colored json response
// console.log(request.body)




    try {

        return;

    } catch (err) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.write("Bad Post Data.  Is your data a proper JSON?\n");
        response.end();
        return;
      }

    }

})