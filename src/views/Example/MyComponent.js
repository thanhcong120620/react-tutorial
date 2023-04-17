import React, { Fragment } from "react";
import ChildComponent from "./ChildComponentClass";
import AddComponent from "./AddComponent";
// import ChildComponent from "./ChildComponentFunction";

/**
 * <> </> Fragement kiểu mới
 */

class MyComponent extends React.Component {
  state = {
    arrJob: [
      { id: "1", jobTitle: "Developers", salary: "500" },
      { id: "2", jobTitle: "Testers", salary: "400" },
      { id: "3", jobTitle: "Project managers", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check add new job: ", job);
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJobProps={this.state.arrJob} />
      </>
    );
  }
}

export default MyComponent;
