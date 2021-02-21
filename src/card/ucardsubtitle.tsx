import React from "react";
import classNames from "classnames";

type UCardSubTitleProps = {
  children?: any,
  className?: any
}

const UCardSubTitle = (props: UCardSubTitleProps) => {
  
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'card-sub-title')} >
      {children}
    </div>
  );
};

export default UCardSubTitle;
