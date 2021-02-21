import React from "react";
import classNames from "classnames";

const UCardFooterContent = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'card-footer-content')} >
      {children}
    </div>
  );
};

export default UCardFooterContent;
