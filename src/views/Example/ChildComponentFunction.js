import React, { Fragment } from "react";

const ChildComponentFunction = (props) => {
  console.log(">>> Check child function props: ", props);
  let { arrJobProps } = props;

  return (
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
    </>
  );
};

export default ChildComponentFunction;
