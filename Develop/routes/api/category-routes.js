const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({include:[Product]})
  .then(response=>res.status(200).json(response))
  .catch(err=>res.json(err))
});
//localhost:3001/api/categories/4
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({include:[Product],
  where:{
    //req.params.id comes from the value passed into the /:id placeholder
    id:req.params.id
  }})
  .then(response=>res.status(200).json(response))
  .catch(err=>res.json(err))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(response=>res.status(200).json(response))
  .catch(err=>res.json(err))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
    where: {
      id: req.params.id
    }
  })
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
