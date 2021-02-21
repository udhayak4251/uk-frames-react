import React from "react";
import classNames from "classnames";

type UCardImageProps = {
  src: string,
  className?: any
}

const UCardImage = (props: UCardImageProps) => {
  const { className } = props;
  return <img {...props} className={classNames(className, "card-image")} />;
};

export default UCardImage;
