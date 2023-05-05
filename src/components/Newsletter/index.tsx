import XClose from 'assets/SVGComponents/XClose';
import Button from 'components/Button';
import useIndex from './index.hook';
import clsx from 'clsx';

const Newsletter = () => {
  const { show, handleClose } = useIndex();

  return (
    <div className='relative bg-blue'>
      <div
        className={clsx(
          'fixed bottom-0 left-0 bg-blue bg-opacity-90 px-6 py-4 max-w-[640px] text-white transition-all duration-700',
          {
            'bottom-0': show,
            'bottom-[-400px]': !show,
          }
        )}>
        <div
          className='flex justify-end cursor-pointer pl-2 pb-2'
          onClick={handleClose}>
          <XClose />
        </div>
        <p className='text-2xl font-semibold'>
          Get latest updates in web technologies
        </p>
        <p className='mt-4'>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>

        <div className='flex flex-col md:flex-row mt-6 gap-3'>
          <input
            placeholder='Email address'
            className='px-3 py-1 w-full text-dark-blue'
          />
          <Button className='md:w-[140px] w-full' variant='secondary'>Count me in!</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
