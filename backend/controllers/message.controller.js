import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId] },
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // const newMessage = await Message.create({
        //     senderId,
        //     receiverId,
        //     message,
        // });

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // this runs in series so takes more time than promising both at once
        // await conversation.save();
        // await newMessage.save();
        
        //suppose conversation.save() takes 1second and same goes for newMessage
        // so total time taken will be 2 seconds
        // so we use Promise.all() to run both in parallel
        
        await Promise.all([conversation.save(), newMessage.save()]);

        // SOCKET IO functionality
        const recieverSocketId = getReceiverSocketId(receiverId);
        if(recieverSocketId) {
            // io.to(<Socket Id>).emit() used to send events to specific client socket
            io.to(recieverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json( newMessage )

    } catch (error) {
        console.log('Error in sendMessage controller', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId] },
        }).populate('messages');
        //populate helps us getting actual messages rather than their references

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json( messages );

    } catch (error) {
        console.log('Error in getMessage Controller ', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
}