
const Model = require('../models/model')

exports.getIndex = (req, res, next) => {
  res.render('index')
}

exports.postLink = (req, res, next) => {
  const link = new Model(req.body.link)

  link.getMedia((e) => {
    res.render('img', { link: e})
  })
}