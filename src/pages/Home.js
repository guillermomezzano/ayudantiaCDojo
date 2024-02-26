import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import CommentsList from "../componets/CommentsList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coment: "",
      comments: [],
    };
    this.removeComments = this.removeComments.bind(this);
  }

  handlerComent(event) {
    console.log(event);
    console.log(event.target.value);
    this.setState({ coment: event.target.value });
  }

  sendComments(event) {
    event.preventDefault();
    this.setState({ comments: [...this.state.comments, this.state.coment] });
    this.setState({ coment: "" });
  }

  removeComments(index) {
    const newComments = this.state.comments.filter(
      (comment, idx) => idx !== index
    );
    this.setState({ comments: newComments });
  }
  render() {
    //render se actualiza cada vez q cambio un estado
    console.log(this.state.comments);
    return (
      <div>
        <h1>soy el componente home</h1>
        <Form className="mx-5" onSubmit={(event) => this.sendComments(event)}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>deja tu comentario</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingresa tu comentario"
              value={this.state.coment}
              onChange={(event) => this.handlerComent(event)}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Enviar comentario
          </Button>
        </Form>
        <CommentsList
          comments={this.state.comments}
          removeComments={this.removeComments}
        />
      </div>
    );
  }
}

export default Home;
