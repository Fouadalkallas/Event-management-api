const mongoose = require('mongoose');

const RSVPSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['yes', 'no', 'maybe'],
        default: 'maybe',
    },
});

module.exports = mongoose.model('RSVP', RSVPSchema);
