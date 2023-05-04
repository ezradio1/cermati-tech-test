import React from 'react';
import Button from '../Button';
import useIndex from './index.hook';
import clsx from 'clsx';

const NotificationPanel = () => {
  const { showPanel, setShowPanel } = useIndex();

  return (
    <div className=''>
      <div
        className={clsx(
          'bg-smoke-grey flex flex-col gap-4 md:flex-row md:items-center items-start justify-center transition-all overflow-hidden ease-in-out duration-500 w-full  p-4',
          {
            'h-auto ': showPanel,
            'h-0': !showPanel,
          }
        )}>
        <p className='md:max-w-[500px] text-[14px]'>
          By accessing and using this website, you acknowledge that you have
          read and understand our{' '}
          <a href='https://google.com' target='_blank' rel='noreferrer'>
            Cookie Policy, Privacy Policy,
          </a>{' '}
          and our{' '}
          <a href='https://google.com' target='_blank' rel='noreferrer'>
            Terms of Service
          </a>
        </p>

        <Button onClick={() => setShowPanel(!showPanel)}>Got it</Button>
      </div>
    </div>
  );
};

export default NotificationPanel;
