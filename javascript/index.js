const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.use(express.static('public'));
app.use(express.static('.well-known'));



document.getElementById('date').innerHTML = new Date().toDateString();
