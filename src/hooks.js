import { useState, useCallback, useEffect } from "react";
import axios from "axios";

export const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value));
  return [value, toggler];
};

export const useStore = store => {
  useEffect(
    () => {
      axios(store).then(result => {
        console.log(result.data.result);
      });
    },
    [store]
  );
};
