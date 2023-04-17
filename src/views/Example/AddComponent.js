import React, { Fragment } from "react";

class AddComponent extends React.Component {
  state = {
    TitleJob: "",
    salary: "",
    arrJob: [
      { id: "1", jobTitle: "Developers", salary: "500" },
      { id: "2", jobTitle: "Testers", salary: "400" },
      { id: "3", jobTitle: "Project managers", salary: "1000" },
    ],
  };
  handleChangeTitleJob = (event) => {
    this.setState({ TitleJob: event.target.value });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "TitleJob: " + this.state.TitleJob + " \nSalary: " + this.state.salary
    );
    console.log(">> call state: ", this.state);
  };

  render() {
    return (
      <>
        <div>
          <form>
            <label htmlFor="fname">Job title:</label>
            <br />
            <input
              type="text"
              value={this.state.TitleJob}
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
