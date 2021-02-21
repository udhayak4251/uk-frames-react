import React from "react";
import classNames from "classnames";

const UCardTitle = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'card-title')} >
      {children}
    </div>
  );
};

export default UCardTitle;
