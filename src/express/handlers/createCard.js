const validateCreateCard = require("../../joi/validateCreateCard");
const operations = require("../../mongoose/cardOperations");

async function createCard(req, res) {
  const result = validateCreateCard(req.body);
  if (result.error)
    return res.status(400).json(result.error.details[0].message);

  req.body.userId = req.userID;
  const cardFromDB = await operations.createCardInMongoDB(req.body);

  if (cardFromDB == resnull) {
    return res.status(500).json("card wasnt create");
  }

  res.json(cardFromDB);
}

module.exports = createCard;
