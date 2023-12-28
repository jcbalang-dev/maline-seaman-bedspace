import HMSLayout from "../../../app/components/systems/hms/index";

const { Button } = require("antd");

const HMS = () => {
  const titleHome = "MSD - Hotel Management System";

  return (
    <HMSLayout pageTitle={titleHome}>
      <h1>MSD - Hotel Management System</h1>
      <Button type="primary">Primary Button</Button>
    </HMSLayout>
  );
};

export default HMS;
