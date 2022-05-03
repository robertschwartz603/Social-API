//user routes

const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    addUser,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require('../../controllers/user-controller');

//api/users
router
    .route('/')
    .get(getAllUser)
    .post(addUser);

//api/users/:userId
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);

//api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)



module.exports = router;