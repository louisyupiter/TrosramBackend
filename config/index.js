const { Storage } = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'peak-emitter-188810',
})

// storage.getBuckets().then(x => console.log(x));

module.exports = storage
