import React from 'react';
import { ContainerProps } from './index.types';
import clsx from 'clsx';

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('flex justify-center', className)}>
      <div className='max-w-[1336px] w-full'>{children}</div>
    </div>
  );
};

export default Container;
