module.exports = {
  async minhasPlantas(req, res) {
    const userId = req.params.id;

    try {
      // Busca o usuário
      const user = await User.findOne({ id: userId });

      if (!user) {
        return res.notFound({ message: 'Usuário não encontrado' });
      }

      // Busca as plantas do usuário, populando a espécie
      const userPlants = await UserPlant.find({ owner: userId }).populate('species');

      // Retorna tudo junto
      return res.json({
        user,
        plants: userPlants
      });

    } catch (err) {
      return res.serverError(err);
    }
    
  },
  async jardimCompleto(req, res) {
    try {
      const user = await User.findOne({ id: req.params.id })
        .populate('userPlants');
  
      if (!user) return res.notFound();
  
      const plantas = await UserPlant.find({ owner: user.id }).populate('species');
  
      return res.json({
        usuario: user.name,
        local: user.location,
        plantas: plantas
      });
    } catch (err) {
      return res.serverError(err);
    }
  }
  
};
