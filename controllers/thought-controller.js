const { User, Thought } = require('../models');
const thoughtController = {

//GET all thoughts
getAllThought(req, res) {
    Thought.find({})
        .select('-__v')
        .sort({ createdAt: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
},

//GET one thought (by ID)
getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
},

//ADD thought
        addThought({ params, body }, res) {
            console.log(params);
            Thought.create(body)
                .then(dbThoughtData => {
                    User.findOneAndUpdate(
                        { _id: params.userId },
                        { $push: { thoughts: dbThoughtData._id } },
                        { new: true, runValidators: true }
                    ) 
                    console.log(dbThoughtData);
                    res.json(dbThoughtData);
                })
                .catch(err => res.json(err));
        },

//ADD reaction (to thought)
addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
    ) 
    
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found bud' });
            return;
        } res.json(dbThoughtData);
    })
    .catch(err => res.json(err));
},

//UPDATE thought
updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $set: body },
        { new: true, runValidators: true }
    )

    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found lad' });
            return;
        } res.json(dbThoughtData);
    })
    .catch(err => res.json(err));
},

//remove thought
removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought found skipper' });
            }
        })
        .catch(err => res.json(err));
},

//remove reply
removeReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
    )

    .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
};
module.exports = thoughtController;