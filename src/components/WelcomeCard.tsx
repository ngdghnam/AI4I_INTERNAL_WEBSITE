import { BaseProps } from "@/types/baseProps.type";
import React from "react";

const WelcomeCard: React.FC<BaseProps> = ({ className, style, children }) => {
  return (
    <div
      className={className}
      style={{
        width: `572px`,
        height: `660px`,
        borderRadius: `5px`,
        ...style,
        backgroundColor: `#353849`,
      }}
    >
      {children}
    </div>
  );
};

export default WelcomeCard;
