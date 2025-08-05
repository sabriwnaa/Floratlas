/**
 * PlantSpeciesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async buscarPorNome(req, res) {
        const termo = req.query.q;
        if (!termo) return res.badRequest({ erro: 'Faltou o parâmetro de busca' });
      
        try {
          const resultados = await PlantSpecies.find({
            scientificName: { contains: termo }
          });
          return res.json(resultados);
        } catch (err) {
          return res.serverError(err);
        }
    },
    async filtrar(req, res) {
      try {
        const especies = await PlantSpecies.find({
          and: [
            { sunlight: 'pleno' },
            { soilType: 'arenoso' }
          ]
        })
        .sort('scientificName ASC')
        .limit(10);
  
        return res.json(especies);
      } catch (err) {
        return res.serverError(err);
      }
    }
      

};

