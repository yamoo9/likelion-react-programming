// 기능 구현
// 1. key 값으로 로컬(또는 세션) 스토리지에 데이터 쓰기(JSON 형식의 문자 값)
// 2. key 값으로 로컬(또는 세션) 스토리지에서 데이터 읽기(JavaScript 데이터 타입 변환된 값)
// 3. key 값으로 로컬(또는 세션) 스토리지 데이터 삭제

import { useLayoutEffect, useState } from 'react';

const {
  localStorage: storage,
  JSON: { stringify: serialize, parse: deserialize },
} = globalThis;

export const setData = (key, nextData) => {
  storage.setItem(key, serialize(nextData));
};

export const getData = (key) => {
  return deserialize(storage.getItem(key));
};

export const deleteData = (key) => {
  storage.removeItem(key);
};

function useStorage(key) {
  const [storageData, setStorageData] = useState();

  useLayoutEffect(() => {
    const data = getData(key);
    setStorageData(data);
  }, [key]);

  return {
    storageData,
  };
}

export default useStorage;
