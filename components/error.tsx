import React from "react";

const Error = ({
  errorIcon,
  errorMessage,
}: {
  errorIcon: React.ReactNode;
  errorMessage: string;
}) => {
  return (
    <span className="flex gap-1  w-full text-[#e37d80] text-center items-center  text-[12px] justify-center">
      {errorIcon} {errorMessage}
    </span>
  );
};

export default Error;
