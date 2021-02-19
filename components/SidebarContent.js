import dynamic from "next/dynamic";

const Heading = dynamic(() => import("../components/Text"));

const SidebarContent = ({ ...props }) => {
  return (
    <div>
      <Heading {...props} />
    </div>
  );
};

export default SidebarContent;
