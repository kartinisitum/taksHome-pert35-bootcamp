// Import express router
const router = require('express').Router();

// Import controller
const {
createMataKuliah,
getAllMataKuliah,
getSingleMataKuliah,
updateMataKuliah,
deleteMataKuliah
} = require('../controllers/mataKuliahController');

// Routes
router.post('/', createMataKuliah);
router.get('/', getAllMataKuliah);
router.get('/:id', getSingleMataKuliah);
router.put('/:id', updateMataKuliah);
router.delete('/:id', deleteMataKuliah);

module.exports = router;