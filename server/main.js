const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const screenshot = require('desktop-screenshot');
const fetch = require('node-fetch');
const fs = require('fs');
const b64 = require('base-64');

const app = express()
  // Logging middleware (dev only)
  app.use(require('volleyball'))


module.exports = app
  // We'll store the whole session in a cookie

  // Body parsing middleware
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  
  // Serve static files from ../public
  .use(express.static(resolve(__dirname, '..', 'public')))

  // Serve static javascript from ../js
  .use(express.static(resolve(__dirname, '..', 'js')))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))
  
  const PORT = process.env.PORT || 1337;
    // app.listen(PORT, () => {
    //     console.log(`Our app is running on port ${ PORT }`);
    // });
  app.listen(
    PORT,
    () => {  
      console.log(`Listening on ${PORT}`)
    }
  )
// }

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });


screenshot("hackathon.jpg",  function(error, complete) {
  if(error)
    console.log("Screenshot failed", error);
  else {
    console.log("Screenshot succeeded");
    console.log("COMPLETE", complete);
    fs.readFile('TEST.jpg', 'base64', function(error, base64img){

      // var binImg = buffer.toString('binary');

      var binImg = b64.decode(base64img);
      console.log('!!!', typeof base64img, '^', typeof binImg,'!!!');

      var APIURL = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
      return fetch(APIURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': '9f1a09fa512f4097876dd9d72f5d2ad4'
        },
        body: Number(binImg)
      })
      .then( res => res.json() )
      .then( json => console.log('yoooo', json) )
      .catch( err => console.error(err) )
    })
  }
});

// request.post('https://api.projectoxford.ai/emotion/v1.0/recognize')


