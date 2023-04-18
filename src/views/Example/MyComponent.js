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
    // let currentJob = this.state.arrJob;
    // currentJob.push(job);

    this.setState({
      arrJob: [...this.state.arrJob, job],
      // arrJob: currentJob,
    });
  };

  deleteOneJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    console.log("currentJob:" + currentJob.job);
    this.setState({
      arrJob: currentJob,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>> call componentDidUpdate, ",
      "prevState: ",
      prevState,
      "current State: ",
      this.state,
      "prevProps",
      prevProps
    );
  }

  componentDidMount() {
    console.log(">>> call componentDidMount()");
  }

  render() {
    console.log(">>> call render()");
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobProps={this.state.arrJob}
          deleteOneJob={this.deleteOneJob}
        />
      </>
    );
  }
}

export default MyComponent;
