import React from "react";
import classNames from "classnames";

const UCardFooter = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'card-footer')} >
      <hr className='card-divider'/>
      {children}
    </div>
  );
};

export default UCardFooter;
