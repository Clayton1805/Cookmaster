const jwt = require('jsonwebtoken');

const {
  uploadDB,
  getAll,
} = require('../models/mongoDbRequests');

const connectionRecipes = 'recipes';

const getAllRecipes = async () => {
  try {
    const recipes = await getAll(connectionRecipes);
    return recipes;
  } catch (err) {
    throw new Error(err.message);
  }
};

const registerRecipe = async (body, headers) => {
  const { authorization: token } = headers;
  try {
    const { _id: userId } = jwt.decode(token);
    const copyBodyAddUserId = { ...body, userId };

    await uploadDB(connectionRecipes, copyBodyAddUserId);
    const recipe = copyBodyAddUserId;
    return { recipe };
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  registerRecipe,
  getAllRecipes,
};
