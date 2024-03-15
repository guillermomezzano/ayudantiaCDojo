// componentes funcionales

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import CommentsList from "../componets/CommentsList";

const Home = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [indexForEdition, setIndexForEdition] = useState();
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    console.log(e);
    // console.log(e.target);
    setComment(e.target.value);
  };

  const sendComment = (e) => {
    e.preventDefault();
    if (editMode) {
      const editComments = [...comments];
      editComments[indexForEdition] = comment;
      setComments(editComments);
      setEditMode(false);
      setIndexForEdition();
    } else {
      setComments([...comments, comment]);
      // console.log("sendComment");
    }
    setComment("");
  };

  const removeCommnets = (index) => {
    const newComments = comments.filter((unComments, idx) => idx !== index);
    // console.log(newComments);
    setComments(newComments);
  };

  const editComment = (index) => {
    setComment(comments[index]);
    setIndexForEdition(index);
  };

  return (
    <div>
      <h1>componente Home</h1>
      <Form onSubmit={(e) => sendComment(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            value={comment}
            type="text"
            placeholder="escribe tu comentario"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Button type="submit" variant="info">
          publicar
        </Button>
      </Form>
      <CommentsList
        comments={comments}
        removeCommnets={removeCommnets}
        editComment={editComment}
        setEditMode={setEditMode}
      />
    </div>
  );
};

export default Home;

// class components

// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
// import CommentsList from "../componets/CommentsList";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comment: "",
//       comments: [],
//     };
//     this.removeCommnets = this.removeCommnets.bind(this);
//   }

//   handleInputChange = (e) => {
//     console.log(e);
//     console.log(e.target);
//     this.setState({ comment: e.target.value });
//   };

//   sendComment = (e) => {
//     e.preventDefault();
//     this.setState({ comments: [...this.state.comments, this.state.comment] });
//     console.log("sendComment");
//     this.setState({ comment: "" });
//   };
//   removeCommnets = (index) => {
//     const newComments = this.state.comments.filter(
//       (unComments, idx) => idx !== index
//     );
//     console.log(newComments);
//     this.setState({ comments: newComments });
//   };

//   render() {
//     console.log(this.state.comments);
//     return (
//       <div>
//         <h1>componente Home</h1>
//         <Form onSubmit={(e) => this.sendComment(e)}>
//           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Comentario</Form.Label>
//             <Form.Control
//               value={this.state.comment}
//               type="text"
//               placeholder="escribe tu comentario"
//               onChange={(e) => this.handleInputChange(e)}
//             />
//           </Form.Group>
//           <Button type="submit" variant="info">
//             publicar
//           </Button>
//         </Form>
//         <CommentsList
//           comments={this.state.comments}
//           removeCommnets={this.removeCommnets}
//         />
//       </div>
//     );
//   }
// }

// export default Home;
