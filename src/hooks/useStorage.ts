import { useState } from "react";

const useStorage = <T extends string>(
  key: string,
  defaultValue?: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(
    getLocalStorageValue<T>(key, defaultValue)
  );

  const updateValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, updateValue];
};

export const getLocalStorageValue = <T extends string>(
  key: string,
  defaultValue?: T
) => {
  const storageValue = localStorage.getItem(key);

  if (!storageValue && defaultValue) {
    localStorage.setItem(key, defaultValue);
    return defaultValue;
  }

  return storageValue as T;
};

export default useStorage;
