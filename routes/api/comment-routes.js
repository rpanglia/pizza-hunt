const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

//api/comments/:pizzaId ---use addComment() as POST callback
router.route('/:pizzaId').post(addComment);


//api/comments/:pizzaId/:commentId -- use removeComment() as DELETE callback
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

//need new route for delete (for removeReply) since we need the id of the individual reply, not just its parent
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;