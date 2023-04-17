import React, { Fragment } from "react";

/**
 * <> </> Fragement kiểu mới
 */

class ChildComponentClass extends React.Component {
  

  render() {
    console.log(">> call props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    let{ name, age, arrJobProps } = this.props;

    return (
      <>
        <div>Child component: {name} - {age}</div>
        <div className="job-list">
            {
                arrJobProps.map((item, index) => {
                    return (
                        <div key={item.id}>
                        {item.jobTitle} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
      </>
    );
  }
}

export default ChildComponentClass;
