const typeError = 400;

const {
  objError,
  isBlank,
} = require('./usefulFuncsValidations');

const validationRecipesKeysExists = (body) => {
  const { name, ingredients, preparation } = body;

  switch (true) {
    case isBlank(name):
    case isBlank(ingredients):
    case isBlank(preparation):
      return objError('Invalid entries. Try again.', typeError);
    default: return null;
  }  
};

module.exports = {
  validationRecipesKeysExists,
};