import getStorage from 'helpers/getStorage';
import setStorage from 'helpers/setStorage';
import { useEffect, useState } from 'react';

const useIndex = () => {
  const LS_KEY = 'cermati-tech.newsletter';
  const lastTimeShown = getStorage(LS_KEY);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const isOver10Minutes = lastTimeShown
        ? new Date().getTime() - Number(lastTimeShown) >= 600000
        : true;
      if (isOver10Minutes && window.scrollY > window.innerHeight / 3)
        setShow(true);
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [lastTimeShown]);

  const handleClose = () => {
    setShow(false);
    setStorage(LS_KEY, new Date().getTime());
  };

  return { show, handleClose };
};

export default useIndex;
