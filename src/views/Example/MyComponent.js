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

  render() {
    // console.log(">> call state: ", this.state);

    return (
      <>
        <AddComponent />

        <ChildComponent arrJobProps={this.state.arrJob} />
      </>
    );
  }
}

export default MyComponent;
