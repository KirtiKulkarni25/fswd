const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('GET method used');
});

app.post('/', (req, res) => {
    res.send('POST method used');
});

app.delete('/', (req, res) => {
    res.send('DELETE method used');
});

app.put('/', (req, res) => {
    res.send('PUT method used');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
