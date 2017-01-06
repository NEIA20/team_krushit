const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const screenshot = require('desktop-screenshot');
const request = require('request');



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


screenshot("hackathon.png", function(error, complete) {
  if(error)
    console.log("Screenshot failed", error);
  else {
    console.log("Screenshot succeeded");
    console.log("COMPLETE", complete)
  }
});

request.post('https://api.projectoxford.ai/emotion/v1.0/recognize')