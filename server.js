const express = require('express');
const { exec } = require('child_process');
const app = express();

const server = app.listen(80, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/public'));

var lightOn = true;

// Set gpio pin 9 to output
exec('gpio mode 9 out');
exec('gpio write 9 1');

app.post('/send', function(request, response){
    if (lightOn) {
        exec('gpio write 9 0');
    } else {
        exec('gpio write 9 1');
    }
    lightOn = !lightOn;
    response.sendFile(__dirname + "/public/index.html");
});
