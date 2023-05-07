import React, { Fragment } from "react";

// import logo from "../logo.svg";

import { toast } from "react-toastify";
import AddTodo from "./AddTodo.js";
import "./ListTodo.scss";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Code 1" },
      { id: "todo2", title: "Fix code 2" },
      { id: "todo3", title: "Submit code 3" },
    ],

    editTodo: {},
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
    toast.success("Delete successfully !");
  };

  handleEdit = (todo) => {
    let { editTodo, listTodo } = this.state;

    let isEmptyObject = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodo];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodo: listTodosCopy,
        editTodo: {},
      });
      toast.success("Update todo succeed!");
      return;
    } else {
      //edit
      this.setState({
        editTodo: todo,
      });
    }
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    // console.log(">>>Check empty Object: ", isEmptyObject);

    return (
      <>
        <p>Todo App made by Success !</p>

        <div className="list-todo-container">
          <AddTodo AddNewTodo={this.AddNewTodo} />

          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObject === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) => {
                                this.handleOnChangeEditTodo(event);
                              }}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => {
                        this.handleEdit(item);
                      }}
                    >
                      {isEmptyObject === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
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

export default Color(ListTodo);
