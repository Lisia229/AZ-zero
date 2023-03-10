import products from '../models/products.js'

export const createProduct = async (req, res) => {
  try {
    const imagePath = []
    if (req.files.images) {
      req.files.images.forEach(item => {
        imagePath.push(item.path)
      })
    }

    const result = await products.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      colors: req.body.colors,
      image: req?.files.image[0].path || '',
      images: [...imagePath],
      sell: req.body.sell,
      category: req.body.category
    })
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ success: false, message: error.errors[Object.keys(error.errors)[0]].message })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

export const getSellProducts = async (req, res) => {
  try {
    const result = await products.find({ sell: true })
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const result = await products.find()
    res.status(200).json({ success: true, message: '', result })
  } catch (error) {
    res.status(500).json({ success: false, message: '未知錯誤' })
  }
}

export const getProduct = async (req, res) => {
  try {
    const result = await products.findById(req.params.id)
    if (!result) {
      res.status(404).json({ success: false, message: '找不到' })
    } else {
      res.status(200).json({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).json({ success: false, message: '找不到' })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}

export const editProduct = async (req, res) => {
  try {
    const mainImage = req?.files?.image ? req?.files?.image[0].path : req.body.image
    const imagePath = []
    if (req.files.images) {
      req.files.images.forEach(item => {
        imagePath.push(item.path)
      })
    }
    if (typeof req.body.images === 'string') {
      imagePath.push(req.body.images)
    }
    if (typeof req.body.images === 'object') {
      req.body.images.forEach(item => {
        if (item !== '' && item !== undefined && item !== null) {
          imagePath.push(item)
        }
      })
    }

    const result = await products.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      colors: req.body.colors,
      image: mainImage,
      images: [...imagePath],
      sell: req.body.sell,
      category: req.body.category
    }, { new: true })
    if (!result) {
      res.status(404).json({ success: false, message: '找不到' })
    } else {
      res.status(200).json({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ success: false, message: error.errors[Object.keys(error.errors)[0]].message })
    } else if (error.name === 'CastError') {
      res.status(404).json({ success: false, message: '找不到' })
    } else {
      res.status(500).json({ success: false, message: '未知錯誤' })
    }
  }
}
