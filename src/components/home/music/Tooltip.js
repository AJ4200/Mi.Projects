import React, { useEffect, useState } from "react";

const Tooltip = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div className={`tooltip ${isVisible ? "show" : "hide"}`}>{message}</div>;
};

export default Tooltip;
