import React, { Fragment } from "react";
// import ChildComponent from "./ChildComponentClass";
import ChildComponent from "./ChildComponentFunction";

/**
 * <> </> Fragement kiểu mới
 */

class MyComponent extends React.Component {
  state = {
    firstName: "",
    age: "",
    arrJob: [
        {id: "1", jobTitle: "Developers", salary: "500$"},
        {id: "2", jobTitle: "Testers", salary: "400$"},
        {id: "3", jobTitle: "Project managers", salary: "1000$"}
    ]
  };

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "First name: " +
        this.state.firstName +
        " \nAge: " +
        this.state.age
    );
  };

  render() {
    console.log(">> call state: ", this.state);
    // let name = "Thành Công";

    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleChangeFirstName(event);
            }}
          />
          <br />
          <label htmlFor="lname">Age:</label>
          <br />
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleChangeLastName(event);
            }}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Save"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>

    <ChildComponent 
    name={this.state.firstName} 
    age={this.state.age}
    arrJobProps={this.state.arrJob}
    />

      </>
    );
  }
}

export default MyComponent;
