const express = require('express');
// const bodyParser = require('body-parser');  //same as JSON which is used below
const tc = require('./controllers')

const app = express();
// app.use(bodyParser.json() )
app.use(express.json());


// app.use(express.static( __dirname + '/../public/build')) //will need once connect

app.get( '/api/tournaments', tc.getTourneys )  //get works
app.post('/api/tournament', tc.createTourney)  //post works
app.delete(`/api/tournament/:id`, tc.deleteTourney)  //need to verify in postman
app.put( `/api/tournament/:id`, tc.updateTourney)  //need to verify in postman



// app.get("/api", function(req, res){
//     res.send("testing get")
// })

const PORT = 4000
app.listen(PORT, () => console.log(`002 Server ready on port ${4000}`))