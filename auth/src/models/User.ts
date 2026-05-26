import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    emailAddress: {
        type: String
    },
    phoneNumber: {
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
        type: String
    },
    authorization: {
        permissionLevel: {
            type: Number,
            default: 0
        },
        tokens: {
            passwordReset: {
                type: Array
            }
        }
    },
    verification: {
        isVerified: {
            type: Boolean,
            enum: [false, true],
            default: false
        },
        code: {
            value: {
                type: String
            },
            createdAt: {
                type: Date,
                default: new Date()
            },
            expiresAt: {
                type: Date,
                default: new Date(new Date().setHours(new Date().getHours() + 24)) // 24HRS
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);