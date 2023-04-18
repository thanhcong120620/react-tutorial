import React, { Fragment } from "react";
/**
 * <> </> Fragement kiểu mới
 */

const deleteStyle = {
  cursor: "pointer",
  color: "red",
};
class ChildComponentClass extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({ showJob: !this.state.showJob });
  };

  handleDeleteClick = (job) => {
    // alert("Delete job");
    console.log(">>> handle delete: ", job);
    this.props.deleteOneJob({
      id: job.id,
      jobTitle: job.jobTitle,
      salary: job.salary,
    });
  };

  render() {
    let { arrJobProps } = this.props;
    let { showJob } = this.state;

    return (
      <>
        {showJob === false ? ( //true condition (condition?true:false)
          <div>
            <button
              onClick={() => {
                this.handleShowHide();
              }}
            >
              Show
            </button>
          </div>
        ) : (
          // false condition
          <>
            <div className="job-list">
              {arrJobProps.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.jobTitle} - {item.salary}{" "}
                    <span
                      style={deleteStyle}
                      onClick={() => {
                        this.handleDeleteClick(item);
                      }}
                    >
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => {
                  this.handleShowHide();
                }}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponentClass;
