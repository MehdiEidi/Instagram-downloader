
const request = require('request')

module.exports = class link {
  constructor(url) {
    this.url = url
  }

  getMedia(cb) {
    const cleanUrl = this.url.split('?')[0] + '?__a=1'

    getLinkData(cleanUrl, (dataObject) => {
      const imgUrl = dataObject.graphql['shortcode_media']['display_url']
      cb(imgUrl)
    })
  }
}

const getLinkData = (link, cb) => {
  request({url: link}, (error, response) => {
    cb(JSON.parse(response.body))
  })
}