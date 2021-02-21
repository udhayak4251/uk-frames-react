import React from "react";
import classNames from "classnames";

const UFormLabel = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className)} >
      {children}
    </div>
  );
};

export default UFormLabel;
