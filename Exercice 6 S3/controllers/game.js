import Game from "../models/game.js";

  // initialisation

var games = [
    new Game("God of War", "Action-adventure game", 500, 5),
    new Game("The Legend of Zelda: Breath of the Wild", "Action RPG", 600, 8),
    new Game("Red Dead Redemption 2", "Open-world adventure", 700, 4),
    new Game("Minecraft", "Sandbox game", 300, 10),
    new Game("Cyberpunk 2077", "Role-playing game", 450, 3)
  ];
  
  //Afficher la liste des jeux

export function getAllGames(req, res) {
    const gamesWithoutSomeAtt = { ...games};
    delete gamesWithoutSomeAtt.description;
    delete gamesWithoutSomeAtt.quantity;
    res.json(gamesWithoutSomeAtt);
  }

  // Ajouter un nouveau jeu

export function addGame(req, res) {
  const game = new Game(req.body.title,req.body.description,req.body.price,req.body.quantity)
  games.push(game);
  const gamesWithoutId = { ...game};
  delete gamesWithoutId.id;
  res.status(201).json(gamesWithoutId);
};

// Afficher les détails du jeu

export function getGamesById(req, res) {
    const gameId = req.params.id;
    const gameIndex = games.findIndex((g) => g.id == gameId);
    res.json(games[gameIndex]);
  }

  // Modifier un jeu 

export function updateGame(req, res) {
    const gameId = req.params.id;
    const { title, description, price, quantity } = req.body;
    const gameIndex = games.findIndex((g) => g.id == gameId);
  if (gameIndex !== -1) {
    games[gameIndex] = { ...games[gameIndex], title, description, price,quantity };
    res.json(games[gameIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


export default games;
