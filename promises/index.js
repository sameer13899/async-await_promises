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
    const data = await readFilePromise('./dog.txt')
    console.log(`breeed: ${data}`)
    const res1 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
    const res2 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
    const res3 = superagent(`https://dog.ceo/api/breed/${data}/images/random`)
    const all = await Promise.all([res1, res2, res3])
    const images = all.map((el) => el.body.message)
    console.log(images)
    await writeFilePromise('./dog-image.txt', images.join('\n'))
    console.log('sucessfully written the contents in the file')
  } catch (err) {
    console.log(err)
    throw err
  }
  return '2. ready'
}

;(async () => {
  try {
    console.log('1. start the program')
    const x = await getDogPic()
    console.log(x)
    console.log('3. done getting the pics')
  } catch (err) {
    console.log('ERROR')
  }
})()

/*console.log('1. start the program')
getDogPic()
  .then((x) => {
    console.log(x)
    console.log('3. done getting the pics')
  })
  .catch((err) => {
    console.log('ERROR')
  })
*/

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
