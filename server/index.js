require("dotenv").config();
const express = require("express");
const request = require("request");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/clearCookie", (req, res) => {
  res.clearCookie('token')
  res.send('token delete')
})

app.get("/token", (req, res) => {

  const accessToken = [];

  if (!req.cookies.token) {

    request.post(
      {
        url: `${process.env.PBX_URL}/token`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials&scope=gql",
        auth: {
          user: `${process.env.CLIENT_ID}`,
          pass: `${process.env.CLIENT_SECRET}`,
        },
      },

      (err, response, body) => {
        if (err) return res.status(500).send({ message: err });

        for(let i = 57; i < body.length; i++){
          accessToken.push(body[i])
        }

        const replaceAccessToken = JSON.stringify(accessToken).replace(/"|,|}|\\|]|\[/gi, '');

        res.cookie("token", replaceAccessToken, { maxAge: 3600000, httpOnly: true });
        return res.send(body);
      }

    );

  }
});

app.get("/extensions", (req, res) => {
  request.post(
    {
      'url': `${process.env.PBX_URL}/gql`,
      headers: {
        'Authorization': `Bearer ${req.cookies.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `query {
      fetchAllExtensions {
        status
        message
        totalCount
        extension {
          extensionId
          coreDevice {
            description
          }
        }
      }
    }`
      })
    },

    (err, response, body) => {
      if (err) return res.status(500).send({ message: err });
      return res.send(body);
    }

  )
});

app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
