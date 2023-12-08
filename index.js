const express = require('express');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Login Routes
app.use('/login', loginRouter);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})