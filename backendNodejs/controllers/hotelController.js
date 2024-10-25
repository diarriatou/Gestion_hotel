const Hotel = require('../models/Hotel');

// Obtenir tous les hôtels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels
    });
  } catch (error) {
    console.error('Erreur getHotels:', error);
    res.status(500).json({
      success: false,
      error: 'Erreur serveur'
    });
  }
};

// Obtenir un hôtel spécifique
const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hôtel non trouvé'
      });
    }
    res.status(200).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erreur serveur'
    });
  }
};

// Créer un hôtel
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Mettre à jour un hôtel
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hôtel non trouvé'
      });
    }
    res.status(200).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Supprimer un hôtel
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hôtel non trouvé'
      });
    }
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Erreur serveur'
    });
  }
};

module.exports = {
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel
};