import React from "react";

const CommentsList = ({ comments, removeCommnets }) => {
  return (
    <div>
      <ul>
        {comments.map((unComments, index) => (
          <li key={index}>
            {unComments}
            <button onClick={() => removeCommnets(index)}>
              eliminar comentario
            </button>
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
