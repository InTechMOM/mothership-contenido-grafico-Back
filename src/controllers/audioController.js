const audio = require('../services/audioService')

/**
 * @openapi
 * /api/v1/audio:
 *   get:
 *     summary: Obtener lista de audios
 *     tags: [Audios]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "audio1.mp4"
 *                   duration:
 *                     type: number
 *                     example: "1:05"
 *       '404':
 *         description: Audio not found
 */

async function getAllAudios(req, res){
    try{
        const audios = await audio.getAllAudios();
        res.json(audios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

async function createAudios(req, res){
    try{
        const { name, duration } = req.body; 
        const newAudio = new audio({ name, duration });
        const savedAudio = await newAudio.save();
        res.status(201).json(savedAudio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

module.exports = {
   getAllAudios,
   createAudios
}; 