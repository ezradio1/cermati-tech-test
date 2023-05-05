import Logo from 'assets/y-logo-white.png';
import Button from 'components/Button';
import NotificationPanel from './components/NotificationPanel';
import useIndex from './index.hook';
import clsx from 'clsx';

const HeaderAndHeroShot = () => {
  const { showPanel, hanldeSetShowPanel } = useIndex();
  return (
    <div>
      <NotificationPanel
        showPanel={showPanel}
        hanldeSetShowPanel={hanldeSetShowPanel}
      />
      <div
        className={clsx('transition-all duration-500', {
          'sm:pt-[70px] pt-[180px]': showPanel,
        })}>
        <div className='relative'>
          <img
            src={Logo}
            alt='y-logo-white.png'
            className='absolute w-[50px] top-6 left-9'
          />
        </div>
        <div className='w-full bg-header-and-hero-shot text-white bg-no-repeat bg-blue h-[100vh] md:h-[80vh] bg-cover'>
          <div className='bg-dark-blue bg-opacity-80 p-4 gap-1 justify-center h-full text-center flex flex-col items-center'>
            <h1 className='text-3xl'>Hello! I'm Ezra Audivano</h1>
            <h2 className='text-2xl font-bold max-w-[240px] md:max-w-none'>
              Consult, Design, and Develop Websites
            </h2>

            <p className='text-xl md:text-sm max-w-[280px] md:max-w-none mt-2'>
              Have something great in mind? Feel free to contact me.
            </p>
            <p className='text-xl md:text-sm'>
              I'll help you to make it happen.
            </p>

            <div className='mt-8'>
              <Button variant='transparent'>LET'S MAKE CONTACT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndHeroShot;
