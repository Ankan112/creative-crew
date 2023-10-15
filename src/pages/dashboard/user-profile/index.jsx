import DashboardLayout from "@/components/layout/DashboardLayout";
import UserInformation from "@/pages/user-information";

const UserProfile = () => {
  return (
    <div>
      <UserInformation />
    </div>
  );
};

export default UserProfile;

UserProfile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
