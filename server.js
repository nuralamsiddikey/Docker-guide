const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send([
        { id: 1, name: 'John'},
        { id: 2, name: 'Doe'}
    ])
})

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})