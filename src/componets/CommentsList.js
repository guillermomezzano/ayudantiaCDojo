import React from "react";

const CommentsList = ({
  comments,
  removeCommnets,
  clasificacion,
  setClasificacion,
}) => {
  const handleInputChangeclasificacion = (e) => {
    // const {value} = e.target
    setClasificacion(e.target.value);
    // console.log("handleInputChangeCalification", e.target.value);
  };

  return (
    <div>
      <ul>
        {comments.map((unComments, index) => (
          <li key={index}>
            {unComments}
            <button onClick={() => removeCommnets(index)}>
              eliminar comentario
            </button>
            <input
              value={clasificacion}
              type="number"
              placeholder="clasificacion"
              onChange={(e) => handleInputChangeclasificacion(e)}
            ></input>
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
