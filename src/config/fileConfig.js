const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = './public/pics';

function downloadImage(url, filename) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    if (!fs.existsSync(path.join(dir, filename))) {
      let file = fs.createWriteStream(path.join(dir, filename));

      https.get(url, function (response) {
        if (response.statusCode === 200) {
          response.pipe(file);
        }

        // Aquí, no necesitas llamar a request.abort() ya que no estamos haciendo nada en caso de error
      });
    }
  } catch (err) {
    console.error(err);
  }
}

function listImages() {
  return new Promise((resolve, reject) => {
    const imagesDirectory = path.join(__dirname, '../public/pics');
    fs.readdir(imagesDirectory, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const imageFiles = files.filter((file) => {
          const fileExtension = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension);
        });
        resolve(imageFiles);
      }
    });
  });
}

module.exports = { downloadImage, listImages };
