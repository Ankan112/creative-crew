import DashboardLayout from "@/components/layout/DashboardLayout";
import UserInformation from "@/pages/user-information";

const AllUser = () => {
  return (
    <div>
      <UserInformation />
    </div>
  );
};

export default AllUser;

AllUser.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
