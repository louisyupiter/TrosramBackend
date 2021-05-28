const { Storage } = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const storage = new Storage({
  keyFilename: process.env.GOOGLE_CREDENTIALS || serviceKey,
  projectId: 'peak-emitter-188810',
})

storage.getBuckets().then(x => console.log(x));

module.exports = storage
