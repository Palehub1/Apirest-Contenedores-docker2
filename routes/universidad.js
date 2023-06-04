const { Router } = require('express')
const { createEtapa, getEtapas, updateEtapaByID} =
 require('../controllers/Controletapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapas)

//actualizar
router.put('/:id', updateEtapaByID)


module.exports = router;