const mongoose = require('mongoose');

const CoachProfileSchema = new mongoose.Schema({
    fullName: String,
    nickName: String,
    gender: String,
    age: Number,
    education: String,
    email: { type: String, required: true, unique: true },
    bio: String,
    qualification: String,
    coachingStyle: String,
    availability: String,
});

const CoachProfile = mongoose.model('CoachProfile', CoachProfileSchema);

module.exports = CoachProfile;







// profile settings not worked

// const mongoose = require('mongoose');

// const CoachProfileSchema = new mongoose.Schema({
//     fullName: String,
//     nickName: String,
//     gender: String,
//     age: Number,
//     education: String,
//     email: { type: String, required: true, unique: true },
//     bio: String,
//     qualification: String,
//     coachingStyle: String,
//     availability: String,
//     profileImage: String  // New field for profile image
// });

// const CoachProfile = mongoose.model('CoachProfile', CoachProfileSchema);

// module.exports = CoachProfile;
