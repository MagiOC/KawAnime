/**
 * Created by Kylart on 20/04/2017.
 */

const {writeFileSync} = require('fs')
const {join} = require('path')
const {Logger, dir} = require('../utils')
const logger = new Logger('WatchList')

const wlPath = join(dir, 'lists.json')

const get = (req, res) => {
  const wlFile = require(wlPath)

  logger.info(`Gathered lists from local.`)

  res.type('application/json')
  res.status(200).send(JSON.stringify(wlFile))
}

const save = (req, res) => {
  req.on('data', (chunk) => {
    // Saving list
    writeFileSync(wlPath, chunk, 'utf-8')

    logger.info('Successfully saved lists.')

    res.status(200).send()
  })
}

module.exports = {
  get,
  save
}
