import React from "react";
import classNames from "classnames";

const UFormInput = (props: any) => {
  const { children, className } = props;
  return (
    <input {...props} className={classNames(className)} >
      {children}
    </input>
  );
};

export default UFormInput;
