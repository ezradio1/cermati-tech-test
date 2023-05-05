import clsx from 'clsx';
import { ButtonVariant } from './index.types';

export const getButtonStyleByVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return clsx('bg-blue text-white hover:opacity-70 transition-all');
    }
    case 'secondary': {
      return clsx('bg-orange text-[12px] w-[120px] !p-2 font-bold h-[32px] px-6 text-white hover:bg-white hover:text-dark-orange transition-all');
    }
    case 'transparent': {
      return clsx('bg-transparent border-2 font-bold h-[54px] px-6 text-white hover:bg-white hover:text-dark-blue transition-all');
    }
  }
  return '';
};
