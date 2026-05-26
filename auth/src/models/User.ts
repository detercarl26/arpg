import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    // 1.0 add check if both emailAddress and phoneNumber is empty throw err.
    // 2.0 Email format validation?
    email: { 
        type: String,
        unique: true
    },
    // 1.1
    phone: {
        countryCallingCode: {
            type: String
        },
        nationalNumber: {
            type: String
        },
        number: {
            type: String
        }
    },
    password: {
        type: String,
        required: true
    },
    authorization: {
        permissionLevel: {
            role: {
                type: String,
                enum: ["user", "admin"]
            },
            default: "user"
        },
        tokens: {
            passwordReset: {
                token: String,
                expiresAt: Date
            }
        }
    },
    verification: {
        isVerified: {
            type: Boolean,
            default: false
        },
        code: {
            value: {
                type: String
            },
            createdAt: {
                type: Date,
                default: () => new Date()
            },
            expiresAt: {
                type: Date,
                default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) // 24HRS
            }
        }
    },
}, { timestamps: true });

export default mongoose.model("User", userSchema);