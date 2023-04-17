import React, { Fragment } from "react";

/**
 * <> </> Fragement kiểu mới
 */

class ChildComponentClass extends React.Component {
  render() {
    let { arrJobProps } = this.props;

    return (
      <>
        <div>
          <button>Show</button>
        </div>

        <div className="job-list">
          {arrJobProps.map((item, index) => {
            return (
              <div key={item.id}>
                {item.jobTitle} - {item.salary}
              </div>
            );
          })}
        </div>

        <div>
          <button>Hide</button>
        </div>
      </>
    );
  }
}

export default ChildComponentClass;
