import React, { Fragment } from "react";

/**
 * <> </> Fragement kiểu mới
 */

class ChildComponentClass extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({ showJob: !this.state.showJob });
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
                    {item.jobTitle} - {item.salary}
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
