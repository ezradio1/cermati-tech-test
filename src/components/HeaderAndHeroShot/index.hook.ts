import getStorage from 'helpers/getStorage';
import setStorage from 'helpers/setStorage';
import { useState } from 'react';

const useIndex = () => {
  const LS_KEY = 'cermati-tech.cookie';
  const isShow = getStorage(LS_KEY) === null;
  const [showPanel, setShowPanel] = useState(isShow);

  const hanldeSetShowPanel = () => {
    setShowPanel(false);
    setStorage(LS_KEY, false);
  };
  return { showPanel, hanldeSetShowPanel };
};

export default useIndex;
