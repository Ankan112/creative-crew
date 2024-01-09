import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateSerivceForm from "@/components/shared/CreateServiceForm";
import TitleBorder from "@/components/shared/TitleBorder";

export default function CreateSerivce() {
  return (
    <div className="mx-auto main-container">
      <div className="my-10">
        <h1 className="font-main">Create New Service</h1>
        <TitleBorder />
      </div>
      <CreateSerivceForm />
    </div>
  );
}
CreateSerivce.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
