const express = require('express')

const app = express();
const greet = process.env.greet || 'Yo! From ';
const msg = process.env.msg || 'Hello From your example API';

app.set('port', (process.env.PORT || 8000));

app.get('*', function(request, response) {
  response.send(`${greet}` + `${msg}`);
});

app.listen(app.get('port'), function() {
  console.log(`Node app is running at localhost: ${app.get('port')}`);
});
