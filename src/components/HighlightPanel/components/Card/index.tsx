import { CardProps } from './index.types';

const Card = (props: CardProps) => {
  const { title, description, icon } = props;
  return (
    <div className='border-[1px] border-[#CCCCCC] p-6'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-medium'>{title}</p>
        {icon}
      </div>
      <p className='mt-3'>{description}</p>
    </div>
  );
};

export default Card;
