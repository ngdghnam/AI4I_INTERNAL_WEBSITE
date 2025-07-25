import { BaseProps } from '@/types/baseProps.type'
import React from 'react'

const RightHaftTriangle: React.FC<BaseProps> = ({
  className,
  style,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "144px",
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default RightHaftTriangle