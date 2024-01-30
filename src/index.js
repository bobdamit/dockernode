const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
	res.send('Hello Worldzzzz');
});

app.get('/foo', (req, res) => {
	res.send({data:"oooooh fancy", time: new Date()});
});

app.listen(port, () =>{
	console.log('listening on 3000 from inside a container');
})