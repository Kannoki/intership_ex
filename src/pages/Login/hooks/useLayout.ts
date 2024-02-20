import { useEffect, useState } from "react";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
const useLayout = () => {
  const breakpoints = useBreakpoint();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return breakpoints;
};

export default useLayout;
