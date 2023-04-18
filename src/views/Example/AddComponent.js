import React, { Fragment } from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({ title: event.target.value });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert("title: " + this.state.title + " \nSalary: " + this.state.salary);
    // console.log(">>> Check data input: ", this.state);

    if (!this.state.title || !this.state.salary) {
      alert("Missing required input");
      return;
    }

    this.props.addNewJob({
      id: Math.floor(Math.random() * 10000),
      jobTitle: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <>
        <div>
          <form>
            <label htmlFor="fname">Job's title:</label>
            <br />
            <input
              type="text"
              value={this.state.title}
              onChange={(event) => {
                this.handleChangeTitleJob(event);
              }}
            />
            <br />
            <label htmlFor="lname">Salary:</label>
            <br />
            <input
              type="text"
              value={this.state.salary}
              onChange={(event) => {
                this.handleChangeSalary(event);
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
        </div>
      </>
    );
  }
}

export default AddComponent;
