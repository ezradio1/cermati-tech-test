import clsx from 'clsx';
import { ButtonVariant } from './index.types';

export const getButtonStyleByVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return clsx('bg-blue text-white');
    }
    case 'secondary': {
      return clsx('bg-orange text-[12px] w-[120px] !p-2 font-bold h-[32px] px-6 text-white hover:bg-white hover:text-dark-blue transition-all');
    }
    case 'transparent': {
      return clsx('bg-transparent border-2 font-bold h-[54px] px-6 text-white hover:bg-white hover:text-dark-blue transition-all');
    }
  }
  return '';
};