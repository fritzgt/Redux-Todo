import React from "react";

//connecting react redux
import { connect } from "react-redux";

//import action toggleComplete
import { toggleComplete, deleteItem, editItem, updateTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newValue: ""
  };

  //handleling changes
  changeHandler = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  //Submit changes
  // submitHandler = e => {
  //   e.preventDefault();
  //   // console.log("Update value:", this.state.newValue);
  //   this.props.updateTodo(this.state.newValue);
  // };

  //function returns the input
  returnEditView = (item, index) => {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          // console.log("Update value:", this.state.newValue);
          this.props.updateTodo(this.state.newValue, index);
        }}
      >
        <input
          name="newValue"
          type="text"
          defaultValue={item.value}
          onChange={this.changeHandler}
          required
        />
      </form>
    );
  };

  returnDefaultView = item => {
    return (
      <h2 /* toggle class */
        className={`${item.completed ? " completed" : ""}`}
      >
        {item.value}
      </h2>
    );
  };

  render() {
    return (
      <div className="container">
        {this.props.todos.map((item, index) => (
          <div key={index} className="todo-list">
            <div className="todo-list">
              <i
                className={` far ${
                  item.completed ? " fa-check-circle" : " fa-circle"
                }`}
                onClick={e => {
                  e.preventDefault();
                  console.log("Completed item:", index);
                  //passing the index to the action to toggle item
                  this.props.toggleComplete(index);
                }}
              />
              {/* this will display the todo or an input to edit the todo base on the conditions  */}
              {item.edit
                ? this.returnEditView(item, index)
                : this.returnDefaultView(item)}
            </div>
            {item.edit ? (
              <span>
                <i
                  className="fas fa-edit"
                  onClick={() => {
                    this.props.editItem(index);
                    this.props.updateTodo(this.state.newValue, index);
                  }}
                />
              </span>
            ) : (
              <span>
                <i
                  className="fas fa-edit"
                  onClick={() => {
                    this.props.editItem(index);
                  }}
                />
              </span>
            )}
            <span>
              <i
                className="fas fa-trash-alt"
                onClick={e => {
                  e.preventDefault();
                  console.log("Deleted item :", index);
                  //passing the index to the action to DELETE item
                  this.props.deleteItem(index);
                }}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

//bringing the state in the const todos
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete, deleteItem, editItem, updateTodo }
)(TodoList);
