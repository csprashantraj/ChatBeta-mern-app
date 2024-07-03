import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) {
            return req.status(400).json({error:"Passwords do not match"});
        }
        
        const user = await User.findOne({username});
        
        if(user) {
            return req.status(400).json({error:"Username not available"});
        }
        
        // HASH PASSWORD HERE
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        
        // https://avatar-placeholder.iran.liara.run/
        
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
        
        if(newUser) {
            // generate JWT token now
            generateTokenAndSetCookie(newUser.__v, res);    

            await newUser.save();
    
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }

    } catch(error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        
        const user = await User.findOne({username});
        
        if(!user) {
            return res.status(400).json({error:"Invalid Credentials"});
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({error:"Invalid Credentials"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch(error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged Out Successfully"});
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}