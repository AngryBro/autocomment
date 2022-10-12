const CommentButton = ({comment,deleteComment,setComment}) => (
    <div>
        <button className="autoCommentSet" value={comment} onClick={setComment}>{comment}</button>
        <button className="autoCommentDelete" value={comment} onClick={deleteComment}>&#10006;</button>
    </div>
)

export default CommentButton;