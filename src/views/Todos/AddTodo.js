import React, { Fragment } from "react";
import { toast } from "react-toastify";
// import "./ListTodo.scss";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };

    this.props.AddNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => {
              this.handleOnchangeTitle(event);
            }}
          />
          <button
            className="add"
            onClick={(event) => {
              this.handleAddTodo(event);
            }}
          >
            add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
