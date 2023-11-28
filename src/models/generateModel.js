const axios = require('axios');

const apiKey = 'HvpxmlK0vQtSavzejIqPoiXo6ajnM3xZT8DEeVrKaGX0Pfh7XPFy22vub8V9';

function buildBodyInfo(description, numberOfPics) {
  return {
    key: apiKey,
    prompt: description,
    negative_prompt: "((out of frame)), ((extra fingers)), ...", // Add your negative prompts
    width: "512",
    height: "512",
    samples: numberOfPics,
    num_inference_steps: "30",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    multi_lingual: "yes",
    webhook: null,
    track_id: null,
  };
}

async function postTextToImage(bodyInfo) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.post('https://stablediffusionapi.com/api/v3/text2img', JSON.stringify(bodyInfo), options);
}

module.exports = { buildBodyInfo, postTextToImage };
