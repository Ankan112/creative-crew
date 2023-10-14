import RootLayout from "@/components/layout/RootLayout";
import PackageCard from "@/components/shared/PackageCard";

const CategoryName = () => {
  return (
    <div className="mb-10">
      <div
        class="flex items-center bg-no-repeat bg-cover h-[50vh]"
        style={{ backgroundImage: 'url("/download.jpeg")' }}
      >
        <h1 className="ml-20">Wedding Photography</h1>
      </div>
      <div className="main-container">
        <div className="text-center my-10">
          <h1>Choose Your Package</h1>
          <h1 className="w-1/2 mx-auto">
            Shoot every single detail of your life with perfection.
          </h1>
        </div>
        <PackageCard />
      </div>
    </div>
  );
};

export default CategoryName;

CategoryName.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
