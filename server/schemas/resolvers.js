const { AuthenticationError } = require("apollo-server-express");
const { User, Item } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        })
          .select("-__v -password")
          .populate("items");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addItem: async (parent, itemData, context) => {
      if (context.user) {
        const item = await Item.create({ ...itemData });
        const newItem = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { items: item._id } },
          { new: true }
        );

        return newItem;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deleteItem: async (parent, { itemId }, context) => {
        if (context.user) {
          const deletedItem = await Item.deleteOne({ _id: itemId });
          if (!deletedItem) {
            return res
              .status(404)
              .json({ message: "Couldn't find item with this id!" });
          }
      
          return deletedItem;
        }
      
        throw new AuthenticationError("You need to be logged in!");
      },
    updateItem: async (
      parent,
      { itemId, name, price, quantity, threshold, category },
      context
    ) => {
      if (context.user) {
        const updatedItem = await Item.findOneAndUpdate(
          { _id: itemId },
          {
            name,
            price,
            quantity,
            threshold,
            category,
          },
          { new: true }
        );
        return updatedItem;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateInventory: async (parent, { itemId, quantity }, context) => {
      if (context.user) {
        const updatedItem = await Item.findOneAndUpdate(
          { _id: itemId },
          { quantity: quantity }
        );

        return updatedItem;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;