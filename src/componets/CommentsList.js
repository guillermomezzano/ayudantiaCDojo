import React, { Component } from "react";
import commentsList from "./commentslist.module.css";

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    console.log("comments de CommentsList", comments);
    return (
      <div>
        <ul>
          {comments.reverse().map((comment, index) => (
            <li className={commentsList.ul}>
              {comment}
              <button onClick={() => this.props.removeComments(index)}>
                eliminar comentario
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CommentsList;
