import React from "react";
import classNames from "classnames";

const UFormGroup = (props: any) => {
  const { children, className } = props;
  return (
    <div {...props} className={classNames(className, 'form-group')} >
      {children}
    </div>
  );
};

export default UFormGroup;
