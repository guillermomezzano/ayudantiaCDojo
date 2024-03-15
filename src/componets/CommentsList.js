// componentes funcionales
import React from "react";

import Button from "react-bootstrap/Button";
import commentsList from "./commentsList.module.css";

const CommentsList = ({
  comments,
  removeCommnets,
  editComment,
  setEditMode,
}) => {
  const reverseComments = [...comments].reverse();

  const handleForEdition = (index) => {
    editComment(index);
    setEditMode(true);
  };

  return (
    <div>
      <ul>
        {reverseComments.map((unComments, index) => (
          <li className={commentsList.li} key={index}>
            {unComments}
            <Button
              variant="danger"
              onClick={() => removeCommnets(comments.length - 1 - index)}
            >
              eliminar
            </Button>
            <Button
              variant="warning"
              onClick={() => handleForEdition(comments.length - 1 - index)}
            >
              editar
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;

// class components
// import React, { Component } from "react";

// class CommentsList extends Component {
//   render() {
//     const { comments } = this.props;
//     console.log("CommentsList", comments);
//     return (
//       <div>
//         <ul>
//           {comments.map((unComments, index) => (
//             <li key={index}>
//               {unComments}
//               <button onClick={() => this.props.removeCommnets(index)}>
//                 eliminar comentario
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default CommentsList;
