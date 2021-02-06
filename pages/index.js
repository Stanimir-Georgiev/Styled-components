import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const StyledBox1 = dynamic(() => import("../components/styledBox1"));

const StyledBox2 = dynamic(() => import("../components/styledBox2"));

export default function Home() {
  const [loadSecond, setLoadSecond] = useState(false);

  const handleScroll = (e) => {
    console.log("scrolled");
    setLoadSecond(true);
  };

  console.log(loadSecond);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <StyledBox1 />
      {loadSecond && <StyledBox2 />}
    </div>
  );
}
