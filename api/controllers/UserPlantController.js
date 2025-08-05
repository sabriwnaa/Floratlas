/**
 * UserPlantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res) {
      try {
        const userPlants = await UserPlant.find()
          .populate('owner')
          .populate('species');
  
        return res.json(userPlants);
      } catch (err) {
        return res.serverError(err);
      }
    }
    ,async mudinhasDisponiveis(req, res) {
        try {
          const mudinhas = await UserPlant.find({
            isAvailableForExchange: true
          })
          .populate('owner')
          .populate('species');
          return res.json(mudinhas);
        } catch (err) {
          return res.serverError(err);
        }
      }
  };
  

