import User from "../models/user.js";


var users = []; 

  //Créer un compte pour l’utilisateur

export function addUser(req, res) {
 const user = new User(req.body.username,req.body.password,req.body.wallet)
  users.push(user);
  const userwithoutid = { ...user};
  delete userwithoutid.id;
  res.status(201).json(userwithoutid);
};

  //Modification de profil

export function updateUser(req, res) {
    const userId = req.params.id;
    const { username, password, wallet } = req.body;
    const userIndex = users.findIndex((u) => u.id == userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], username, password, wallet };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export function getAllUsers(req, res) {
  
    res.json(users);
  }

  //S’authentifier

export function login(req, res) {
    const { username, password } = req.body;
  
    const user = users.find((u) => u.username === username);
  
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
  
    if (user.password !== password) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }
  
   
    // const token = generateJWT(user);
  
    res.json({ message: 'Authentication successful' });
  }

  export default users ;

   
