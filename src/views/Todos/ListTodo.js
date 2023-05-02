import React, { Fragment } from "react";

import { toast } from "react-toastify";
import AddTodo from "./AddTodo.js";
import "./ListTodo.scss";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Code 1" },
      { id: "todo2", title: "Fix code 2" },
      { id: "todo3", title: "Submit code 3" },
    ],
  };

  AddNewTodo = (Todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, Todo],
    });
    toast.success("Add successfully !");
  };

  handleDeleteTodo = (todo) => {
    // console.log(todo);
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => todo.id !== item.id);

    this.setState({
      listTodo: currentTodo,
    });
  };

  render() {
    let { listTodo } = this.state;
    // = let listTodo = this.state.listTodo

    return (
      <>
        <div className="list-todo-container">
          <AddTodo AddNewTodo={this.AddNewTodo} />

          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    <span>
                      {index + 1} - {item.title}
                    </span>
                    <button className="edit">Edit</button>
                    <button
                      className="delete"
                      onClick={() => {
                        this.handleDeleteTodo(item);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
