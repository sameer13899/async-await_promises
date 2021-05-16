const fs = require('fs')
const superagent = require('superagent')

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('Sorry I was not able to read your file')
      resolve(data)
    })
  })
}

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('sorry not able to write contet in the file')
      resolve()
    })
  })
}

// using async await
const getDogPic = async () => {
  try {
    const data = await readFilePromise('./dogg.txt')
    console.log(`breeed: ${data}`)
    const res = await superagent(
      `https://dog.ceo/api/breed/${data}/images/random`
    )
    console.log(res.body.message)
    await writeFilePromise('./dog-image.txt', res.body.message)
    console.log('sucessfully written the contents in the file')
  } catch (err) {
    console.log(err)
  }
}
getDogPic()

// using promise chaining

// readFilePromise('./dog.txt')
//   .then((res) => {
//     console.log(`breed: ${res}`)
//     //axios, fetch etc
//     return superagent.get(`https://dog.ceo/api/breed/${res}/images/random`)
//   })
//   .then((res) => {
//     console.log(res.body.message)
//     return writeFilePromise('./dog-image.txt', res.body.message)
//   })
//   .then(() => {
//     console.log('sucessfully written the content in the file')
//   })
//   .catch((err) => {
//     console.log(err)
//   })
