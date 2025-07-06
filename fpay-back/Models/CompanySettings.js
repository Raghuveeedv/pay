const mongoose = require('mongoose');

const companySettingsSchema = new mongoose.Schema({
    defaultAddress: {
        type: String,
        enum: ['vijayawada', 'hyderabad'],
        default: 'vijayawada'
    },
    vijayawadaAddress: {
        street: {
            type: String,
            default: "Fortune Heights, 52-1 / 8-11, Plot No's-8 & 9, Road No-2, ESI Rd, beside Hotel Park N"
        },
        city: {
            type: String,
            default: "NTR Colony, Vijayawada, Andhra Pradesh 520008"
        }
    },
    hyderabadAddress: {
        street: {
            type: String,
            default: "7th Floor, Q3, A2, Cyber Towers, Madhapur"
        },
        city: {
            type: String,
            default: "Hyderabad - 500081, Telangana"
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('CompanySettings', companySettingsSchema); 