const axios = require("axios");

const db = {};

db.getViewer = () => {
  const { id } = fromGlobalId(CURRENT_USER);
  return axios.get(`http://localhost:9009/users/${id}`)
    .then((res) => res.data);
};

db.getUser = (id) => axios.get(`http://localhost:9009/users/${id}`)
  .then((res) => res.data);

db.getRace = (id) => axios.get(`http://localhost:9009/races/${id}`)
  .then((res) => res.data);

db.getRaces = (id) => axios.get(`http://localhost:9009/users/${id}/races`)
  .then((res) => res.data);

db.getUsers = () => axios.get('http://localhost:9009/users/')
  .then((res) => res.data);

module.exports = db;