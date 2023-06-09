import Container from 'components/Container';
import Card from './components/Card';
import { DATA } from './index.constants';

const HighlightPanel = () => {
  return (
    <Container className='bg-smoke-grey'>
      <div className='py-16 px-4 md:px-16 flex flex-col items-center'>
        <h2 className='text-center text-3xl'>How Can I Help You?</h2>
        <p className='text-center max-w-[600px] mt-2 font-medium'>
          Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale.
        </p>

        <div className='mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
          {DATA.map((el, key) => (
            <Card
              key={key}
              title={el.title}
              description={el.description}
              icon={el.icon}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HighlightPanel;
