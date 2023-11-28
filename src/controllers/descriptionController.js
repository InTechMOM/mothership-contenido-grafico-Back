const storyTelling = require('../services/descriptionService')

/**
 * @openapi
 * /api/v1/description:
 *   get:
 *     summary: Obtener storytelling
 *     tags: [StoryTelling]
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
 *                   description:
 *                     type: string
 *                     example: "aqui se muestra la historia generada como storytelling"
 *       '404':
 *         description: Description not found
 */


async function getDescription(req, res){
    try{
        const description = await storyTelling.getDescription();
        res.json(description);
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
};

module.exports = {
    getDescription
 }; 