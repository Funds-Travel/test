module.exports = {

  createTraveler: function(req, res, next){
    const db = req.app.get('db');
    // const {email, password} = req.body
    const email = req.body.email
    const password = req.body.password
    // create the traveler as an array
    db.createTraveler([email, password])
    .then(results => {
      console.log(results)
      // get the first index from the array
      const user = results[0]
      return user
    })
    // add catch
    .catch(err => {
      res.status(500).json(err)
    })
    .then(user => {
      // create the initil fund for the user,
      return db.createFund([user.id])
      .then(results => {
         //set fund to zero
        const fund = results[0]
        // returns the object with the user[0] and the funds for him
        return Object.assign({}, user, fund)
      })
      // add catch
      .catch(err => {
        res.status(500).json(err)
      })
      // add catch
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

  // Get user balance and goals
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

  // get packages
  getPackage: function(req, res, next){
    const db = req.app.get('db')
    //const {price, name, location, description, img, rating, travelers} = req.body;

    db.getPackage()
    .then(results => {
      // console.log(results);
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  },

    addFunds: function(req, res, next){
    const db = req.app.get('db')
    
    const user_id = req.params.user_id;
    
    console.log(req.body);
    db.insertFunds([user_id, req.body.balance, req.body.goal])
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }
}
