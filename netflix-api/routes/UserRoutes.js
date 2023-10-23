const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLiked,
} = require("../controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("liked/:email", getLikedMovies);
router.put("/delete", removeFromLiked);
module.exports = router;
