import { useState } from 'react';

const useIndex = () => {
  const [showPanel, setShowPanel] = useState(true);
  return { showPanel, setShowPanel };
};

export default useIndex;
