import React from "react";
import classNames from "classnames";

const UCol = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'col')} >
      {children}
    </div>
  );
};

export default UCol;
