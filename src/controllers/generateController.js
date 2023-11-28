const generateService = require('../services/generateService');



async function generateImg(req, res) {
  const { description, numberOfPics } = req.body;

  try {
    await generateService.generateImg(description, numberOfPics);
    res.status(200).json({ message: 'Images generated successfully.' });
  } catch (error) {
    console.error('Error generating images:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function showImages(req, res) {
  try {
    const imageFiles = await generateService.listImages();
    res.json(imageFiles);
  } catch (error) {
    console.error('Error listing images:', error.message);
    res.status(500).send('Error listing images');
  }
}

module.exports = { generateImg, showImages };