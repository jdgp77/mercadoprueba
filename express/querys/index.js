var axios = require('axios');

export const Query = (value, count) => {
  return new Promise(function(myResolve, myReject) {
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
      .then(
      	(resp) => {
          let data = resp.data.results.map((product) => {
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              city_name: product.address?.city_name,
            };
          });
          data.count_query = count;
          
          myResolve(data)
        },
      	(error) => { myReject(error) }
      )
  });
}

export const Product = (id) => {
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
