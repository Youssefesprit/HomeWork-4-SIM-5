import User from "../models/user.js";


  //Créer un compte pour l’utilisateur

  export function addUser(req, res) {
    User
        .create(req.body)
        .then((newUser) => {
            res.status(201).json(
                {
                    username: newUser.username,
                    password: newUser.password,
                    wallet: newUser.wallet,
                }
            );
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

  //Modification de profil

  export function updateUser(req, res) {
      User
          .findByIdAndUpdate(req.params.id, req.body)
          .then((doc) => {
              res.status(200).json(doc);
          })
          .catch((err) => {
              res.status(500).json({ error: err });
          });
  }
  //S’authentifier

  export function login(req, res) {
      User
          .findOne({ "username": req.body.username, "password": req.body.password })
          .then(newUser => {
              res.status(200).json(
                  {
                      username: newUser.username,
                      password: newUser.password,
                      wallet: newUser.wallet,
                  }
              );
          })
          .catch(err => {
              res.status(500).json({ error: err });
          });
  
  
  }

   
