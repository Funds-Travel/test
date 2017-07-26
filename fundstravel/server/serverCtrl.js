module.exports = {

  createTraveler: function(req, res, next){
    const db = req.app.get('db');
    console.log("hello from serverCtrl", req.body)
    // const {email, password} = req.body
    const email = req.body.email
    const password = req.body.body

    db.createTraveler(req.body.email, req.body.password).then(results => {
      res.status(200).json(results)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

}
