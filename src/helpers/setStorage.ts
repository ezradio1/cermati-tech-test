const setStorage = <T extends unknown>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default setStorage;
