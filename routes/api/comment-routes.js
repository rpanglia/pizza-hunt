const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//api/comments/:pizzaId ---use addComment() as POST callback
// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);


//api/comments/:pizzaId/:commentId -- use removeComment() as DELETE callback
// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;