const axios = require('axios')

const isOnline = (req, res) => {
  axios.get('https://kawanime.com', {
    params: {
      ref: 'app'
    }
  })
    .then(({status}) => {
      res.status(status === 200 ? 200 : 204).send()
    })
    .catch(() => res.status(204).send())
}

module.exports = isOnline
