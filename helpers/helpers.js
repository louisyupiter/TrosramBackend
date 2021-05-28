
const util = require('util')
const gc = require('../config/index')
const bucket = gc.bucket('osram') // should be your bucket name

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

 const uploadImage = (file) => new Promise((resolve, reject) => {
  const { originalname, buffer, fieldname } = file;
  let blob = '';
  if(fieldname === 'image'){
    blob = bucket.file('uploads/image/'+ Date.now() + originalname.replace(/ /g, "_"))
  } else {
    blob = bucket.file('uploads/video/'+ Date.now() + originalname.replace(/ /g, "_"))
  }
  console.log(blob);
  const blobStream = blob.createWriteStream({
    resumable: false,
    gzip: true,
  })
  blobStream.on('finish', () => {
    const publicUrl = util.format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    )
    resolve(publicUrl)
  })
  .on('error', () => {
    reject(`Unable to upload image, something went wrong`)
  })
  .end(buffer)
})

module.exports = uploadImage;