import DashboardLayout from "@/components/layout/DashboardLayout";

const Services = () => {
  return (
    <div>
      <h1>services</h1>
    </div>
  );
};

export default Services;

Services.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
