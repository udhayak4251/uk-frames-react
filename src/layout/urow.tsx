import React from "react";
import classNames from "classnames";

const URow = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'row')} >
      {children}
    </div>
  );
};

export default URow;
