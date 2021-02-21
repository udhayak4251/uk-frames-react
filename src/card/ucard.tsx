import React from "react";
import classNames from "classnames";

const UCard = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'card')} >
      {children}
    </div>
  );
};

export default UCard;
