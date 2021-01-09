import axios from 'axios';

export const Query = (value, count) => {
  return new Promise(function(myResolve, myReject) {
    axios.defaults.baseURL = 'http://localhost';
    axios.defaults.port = 13000;
    axios.get(`http://localhost:13000/item?search=${value}`)
      .then(
      	(resp) => {
          
          let data = resp.data;
          data['count_query'] = count;

          myResolve(data)
        },
      	(error) => {
          
          myReject(error);
        }
      )
  });
}

export const Product = (id) => {
  return new Promise(function(myResolve, myReject) {
    axios.defaults.baseURL = 'http://localhost';
    axios.defaults.port = 13000;
    axios.get(`http://localhost:13000/item/${id}`)
      .then(
      	(resp) => {
          myResolve(resp.data);
        },
      	(error) => { myReject(error) }
      )
  });
}
