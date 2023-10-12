import MainButton from "./MainButton";

const BannerTitle = () => {
  return (
    <div>
      <h3 className="text-5xl w-1/2 mx-auto">
        Experience the Difference with Our Professional Photographer.
      </h3>
      <div className="mt-10">
        <MainButton
          name="Discover More"
          link="/home"
          style="py-2 px-5 text-xl border-white text-white"
        />
      </div>
    </div>
  );
};

export default BannerTitle;
