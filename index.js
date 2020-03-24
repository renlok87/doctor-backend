const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());



app.listen(6666, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('Server runned!');
});
