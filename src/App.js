import './App.css';
import React from 'react';
import CommentButton from './CommentButton';

function App() {

  var [comments, setComments] = React.useState(
    localStorage.getItem('comments')!==null?
    JSON.parse(localStorage.getItem('comments')):
    []);
  var [newComment, setNewComment] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('comments',JSON.stringify(comments));
  },[comments]);

  var pushComment = () => {
    var temp = JSON.parse(JSON.stringify(comments));
    temp.push(newComment);
    setComments(temp);
    setNewComment('');
  };

  var deleteComment = e => {
    var temp = JSON.parse(JSON.stringify(comments));
    for(var i = 0; i<comments.length; i++) {
      if(comments[i]===e.target.value) {
        temp.splice(i,1);
        setComments(temp);
        return;
      }
    }
  };

  var setComment = e => {
    var textarea = document.getElementById('answer_textarea');
    textarea.focus();
    document.execCommand('selectAll');
    document.execCommand('insertText',false,'');
    document.execCommand('insertText',false,e.target.value);
  };

  var clearComment = () => {
    var textarea = document.getElementById('answer_textarea');
    textarea.focus();
    document.execCommand('selectAll');
    document.execCommand('insertText',false,'');
    textarea.blur();
  }

  return (
    <div>
      {
        comments.map((comment,index) => 
          <CommentButton key={index} comment={comment} setComment={setComment} deleteComment={deleteComment} />
        )
      }
      <div>
      <input className='autoCommentInput' value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={pushComment} className='autoCommentAdd'>Добавить новый</button>
      <button onClick={clearComment} className='autoCommentClear'>Очистить поле</button>
      </div>
    </div>
  );
}

export default App;
