// controllers/profileController.js
const userModel = require('../models/user');

exports.addProfilePicture = (req, res) => {
  const userId = req.userData.userId; // Mendapatkan ID pengguna dari token
  const { imageUrl } = req.body;

  userModel.updateUser(userId, { profilePicture: imageUrl }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: true, message: 'Internal Server Error' });
    }

    res.json({ error: false, message: 'Profile picture added successfully' });
  });
};

exports.updateProfile = (req, res) => {
  const userId = req.userData.userId; 

  console.log(userId)
  const { name, email, gender, birthdate } = req.body;

  const updatedProfile = {
    name,
    email,
    gender,
    birthdate,
  };

  userModel.updateUser(userId, updatedProfile, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: true, message: 'Internal Server Error' });
    }

    res.json({ error: false, message: 'Profile updated successfully' });
  });
};
