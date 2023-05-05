import clsx from 'clsx';
import Button from '../../../Button';
import { NotificationPanelProps } from './index.types';

const NotificationPanel = (props: NotificationPanelProps) => {
  const { showPanel, hanldeSetShowPanel } = props;

  return (
    <div className='relative'>
      <div
        className={clsx(
          'bg-smoke-grey flex fixed gap-4 items-center justify-center transition-all overflow-hidden ease-in-out duration-500 w-full sm:h-[80px] h-[180px] p-4',
          {
            'top-0 ': showPanel,
            'md:top-[-80px] top-[-180px]': !showPanel,
          }
        )}>
        <div className='flex sm:flex-row flex-col md:items-center max-w-[720px] justify-center items-start gap-5'>
          <p className='text-[15px]'>
            By accessing and using this website, you acknowledge that you have
            read and understand our{' '}
            <a
              href='https://google.com'
              target='_blank'
              rel='noreferrer'
              className='text-blue'>
              Cookie Policy, Privacy Policy,
            </a>{' '}
            and our{' '}
            <a
              href='https://google.com'
              target='_blank'
              rel='noreferrer'
              className='text-blue'>
              Terms of Service
            </a>
          </p>

          <Button onClick={() => hanldeSetShowPanel(!showPanel)}>Got it</Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
