const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id
                })
                .select('-__v -password');

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        addItem: async (parent, { itemData }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { items: itemData } },
                    { new: true }
                );
      
              return updatedUser;
            }
      
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteItem: async (parent, { itemId }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { items: { _id : itemId } } },
                { new: true }
                );
                if (!updatedUser) {
                    return res.status(404).json({ message: "Couldn't find user with this id!" });
                }

                return (updatedUser);
            }
            
            throw new AuthenticationError('You need to be logged in!');
        },
        updateItem: async (parent, { itemId, name, price, quantity, threshold, storage, category }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id, "items._id": itemId},
                    { $set: {
                        "items.$.name": name,
                        "items.$.price": price,
                        "items.$.quantity": quantity,
                        "items.$.threshold": threshold,
                        "items.$.storage": storage,
                        "items.$.category": category 
                    } },
                    { new: true }
                );
              return updatedUser;
            }
      
            throw new AuthenticationError('You need to be logged in!');
        },
        updateInventory: async (parent, { itemId, quantity }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id, "items._id": itemId },
                    { $set: { "items.$.quantity": quantity } },
                    { new: true }
                );
      
              return updatedUser;
            }
      
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;