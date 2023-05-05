const getStorage = <T>(key: string): T | null => {
  if (typeof localStorage !== 'undefined') {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  return null;
};

export default getStorage;
