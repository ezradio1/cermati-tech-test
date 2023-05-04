import { CardProps } from './index.types';

const Card = (props: CardProps) => {
  const { title, description } = props;
  return (
    <div className='border-[1px] border-[#CCCCCC] p-6'>
      <p className='text-xl font-medium'>{title}</p>
      <p className='mt-3'>{description}</p>
    </div>
  );
};

export default Card;
