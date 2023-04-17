import React, { Fragment } from "react";

/**
 * <> </> Fragement kiểu mới
 */

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "First name: " +
        this.state.firstName +
        " \nLast name: " +
        this.state.lastName
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
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
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
      </>
    );
  }
}

export default MyComponent;
