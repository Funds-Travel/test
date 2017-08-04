module.exports = {

  createTraveler: function(req, res, next){
    const db = req.app.get('db');
    const email = req.body.email
    db.createTraveler([email])
    .then(results => {
      const user = results[0]
      return user
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
    .then(user => {
      return db.createFund([user.id])
      .then(results => {
        const fund = results[0]
        return Object.assign({}, user, fund)
      })
      .catch(err => {
        res.status(500).json(err)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    })
    .then(userObject => {
      res.status(200).send(userObject)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  getUser: function(req, res, next){
    const db = req.app.get('db')
    const email = req.params.email
    db.getUser([email])
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  },

  getPackage: function(req, res, next){
    const db = req.app.get('db')
    db.getPackage(5000)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  },

  addFunds: function(req, res, next){
  const db = req.app.get('db')
  const user_id = req.body[0];
  if (req.body[2].length === 0) {
    req.body[2] =  +req.body[3];
  }
  const theBalance = +req.body[4] + +req.body[1];
  db.insertFunds([user_id, theBalance, req.body[2]])
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}
}
