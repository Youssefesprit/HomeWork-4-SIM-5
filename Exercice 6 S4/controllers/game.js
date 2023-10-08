import Game from "../models/game.js";


//Afficher la liste des jeux
export function getAllGames(req, res) {

  Game
    .find({})
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


// Ajouter un nouveau jeu

export function addGame(req, res) {

  Game
    .create(req.body)
    .then((newGame) => {
      res.status(201).json(
        {
          title: newGame.title,
          description: newGame.description,
          quantity: newGame.quantity,
          price: newGame.price
        }
      );
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });

}

// Afficher les détails du jeu

export function getGamesById(req, res) {
  Game
    .findByIdAndUpdate(req.params.id, req.body)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

// Modifier un jeu 

export function updateGame(req, res) {
  Game
    .findByIdAndUpdate(req.params.id, req.body)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


