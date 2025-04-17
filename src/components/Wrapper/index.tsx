import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  classname: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, classname }) => {
  return <div className={`max-w-screen-xl mx-auto ${classname}`}>{children}</div>;
};

export default Wrapper;
