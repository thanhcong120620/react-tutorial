import React, { Fragment } from "react";

const ChildComponentFunction = (props) => {
  console.log(">>> Check child function props: ", props);
  let { arrJobProps } = props;

  return (
    <>
      <div className="job-list">
        {arrJobProps.map((item, index) => {
          if (item.salary >= 500) {
            return (
              <div key={item.id}>
                {item.jobTitle} - {item.salary} $
              </div>
            );
          } else {
            return <h1>No salary greater 500</h1>;
          }
        })}
      </div>
    </>
  );
};

export default ChildComponentFunction;
