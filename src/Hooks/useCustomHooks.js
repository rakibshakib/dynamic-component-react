import { useState } from "react";

const useCustomHooks = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActiveState = () => {
    setIsActive(!isActive);
  };
  return [ isActive, handleActiveState ];
};
export default useCustomHooks;
