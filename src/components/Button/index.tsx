import clsx from 'clsx';
import { ButtonProps } from './index.types';
import { getButtonStyleByVariant } from './index.helpers';

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', className } = props;

  return (
    <button
      {...props}
      className={clsx(
        'py-2 px-4 rounded-sm min-w-[80px]',
        getButtonStyleByVariant(variant),
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
