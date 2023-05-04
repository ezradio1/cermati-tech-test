import clsx from 'clsx';
import { ButtonProps } from './index.types';
import { getButtonStyleByVariant } from './index.helpers';

const Button = (props: ButtonProps) => {
  const { children, variant = 'primary' } = props;

  return (
    <button {...props} className={clsx('py-2 px-4 rounded-sm', getButtonStyleByVariant(variant))}>
      {children}
    </button>
  );
};

export default Button;
