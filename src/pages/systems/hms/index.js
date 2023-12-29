import Favicon from "../../../app/components/favicon";
import HMSLayout from "../../../app/components/systems/hms/index";

const HMS = () => {
  const titleHome = "Hotel Management System";

  return (
    <>
      <HMSLayout pageTitle={titleHome}></HMSLayout>
      <Favicon />
    </>
  );
};

export default HMS;
