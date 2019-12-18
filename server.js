const express = require('express');
const { exec } = require('child_process');
const app = express();

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

var lightOn = false;

app.post('/send', function(request, response){
    exec('ls | grep js', (err, stdout, stderr) => {
    });
    response.sendFile(__dirname + "/public/index.html");
});
