import dynamic from "next/dynamic";

const Heading = dynamic(() => import("../components/Text"));

const Sidebar = () => {
  return (
    <div>
      <Heading text="Heading1" />
    </div>
  );
};

export default Sidebar;
