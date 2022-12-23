require('dotenv').config()
const express = require('express');
const request = require('request');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.get('/token', (req, res) => {
    request.post(
        {
            url: 'http://192.168.0.101/admin/api/api/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&scope=gql:core',
            auth: {
                user: `${process.env.CLIENT_ID}`,
                pass: `${process.env.CLIENT_SECRET}`
            }
        },
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })
            return res.send(body)
          }
        )

})


app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))