var express = require('express');
var axios = require('axios');
var parser = require('body-parser');
var cors = require('cors');

var allowlist = ['http://localhost:3000', 'http://127.0.0.1:3000']

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 
app.use(cors({ origin: "http://localhost:3000", credentials: true  }));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const Query = (value) => {
  return new Promise(function(myResolve, myReject) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
      .then(
      	(resp) => {
          let products = resp.data.results;
          let productsToReturn = [];
          let count = 0;
          for (let numProduct in products) {
            if (count === 4) { break; }
            let product = products[numProduct];

            productsToReturn.push({
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              city_name: product.address?.city_name,
            });

            count++;
          }
          
          myResolve(productsToReturn)
        },
      	(error) => { myReject(error) }
      )
  });
}

const Product = (id) => {
  return new Promise(function(myResolve, myReject) {
    axios.get(`https://api.mercadolibre.com/items/${id}`)
      .then(
      	(resp) => {
          axios.get(`https://api.mercadolibre.com/items/${id}/description`)
            .then(
              (respDescription) => {
                myResolve({
                  title: resp.data.title,
                  description: respDescription.data.plain_text,
                  price: resp.data.price,
                  thumbnail: resp.data.thumbnail,
                  warranty: resp.data.warranty,
                });
              },
              (error) => {
                myResolve(resp);
              }
            );
        },
      	(error) => { myReject(error) }
      )
  });
}


app.get('/item', async (req, res) => { 
  let value = req.query.search;

  await Query(value)
    .then(resp => {
      res.status(200).send(resp);
    }, (error) => {
      res.status(400).send(error);
    });
});
app.get('/item/:id', async (req, res) => {
  let id = req.params.id;

  await Product(id)
    .then(resp => {
      res.status(200).send(resp);
    }, (error) => {
      res.status(400).send(error);
    });
});

app.listen(13000, function () {
  console.log('Example app listening on port 13000!');
});
