const express = require('express');
const { getDesigns, createDesign, deleteDesign } = require('../controllers/designController');
const { protect } = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validateMiddleware');
const { designSchema } = require('../utils/validationSchemas');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Designs
 *   description: User design routes
 */

/**
 * @swagger
 * /api/design:
 *   get:
 *     summary: Get all user designs
 *     tags: [Designs]
 *     responses:
 *       200:
 *         description: List of user designs
 */
router.get('/', protect, getDesigns);

/**
 * @swagger
 * /api/design:
 *   post:
 *     summary: Create a new design
 *     tags: [Designs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - roomType
 *               - style
 *               - measurements
 *             properties:
 *               roomType:
 *                 type: string
 *               style:
 *                 type: string
 *               measurements:
 *                 type: object
 *               notes:
 *                 type: string
 *               designFile:
 *                 type: string
 *     responses:
 *       201:
 *         description: Design created successfully
 */
router.post('/', protect, validate(designSchema), createDesign);

/**
 * @swagger
 * /api/design/{id}:
 *   delete:
 *     summary: Delete a design
 *     tags: [Designs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The design ID
 *     responses:
 *       200:
 *         description: Design deleted successfully
 *       404:
 *         description: Design not found
 */
router.delete('/:id', protect, deleteDesign);
11
module.exports = router;
