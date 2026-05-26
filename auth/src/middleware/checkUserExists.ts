import User from "../models/User.ts";

export const checkUserExists = async(req:any, res:any, next:any) => {
    try {
        const {
            email,
            number,
            username
        } = req.body;

        const [takenUsername, takenEmail, takenPhone] = await Promise.all([
            User.findOne({ username }),
            User.findOne({ email }),
            User.findOne({ number })
        ]);

        if (takenUsername) return res.status(409).json({ message: "Username is already taken" });
        if (takenEmail)    return res.status(409).json({ message: "Email is already in use" });
        if (takenPhone)    return res.status(409).json({ message: "Phone number is already in use" });

        next();
    } catch (error) {
        next(error);
    };
};