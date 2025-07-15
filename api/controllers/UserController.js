/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   async minhasPlantas(req, res) {
    const userId = req.params.id;
    try {
      const userPlants = await UserPlant.find({ owner: userId }).populate('species');
      return res.json(userPlants);
    } catch (err) {
      return res.serverError(err);
    }
  }

};

