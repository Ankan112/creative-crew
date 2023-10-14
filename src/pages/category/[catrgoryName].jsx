import RootLayout from "@/components/layout/RootLayout";
import PackageCard from "@/components/shared/PackageCard";

const CategoryName = () => {
  return (
    <div className="mb-10">
      <div
        class="flex items-center bg-no-repeat bg-cover bg-center h-[50vh]"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/p4.jpg")',
        }}
      >
        <div className="main-container text-white">
          <h1 className=" mb-3">Wedding Photography</h1>
          <p>
            Capturing Moments, Crafting Memories <br /> Your Vision, Our Lens
          </p>
        </div>
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
