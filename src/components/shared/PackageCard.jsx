import { categories } from "@/constant";
import MainButton from "./MainButton";

const PackageCard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="text-center border border-solid border-black px-6 py-3"
          >
            <h1 className="font-semibold text-3xl">{category.package}</h1>
            <p className="text-4xl font-bold"> {category.price}</p>
            <div className="text-lg font-medium">
              <p>{category.duration}</p>
              <hr />
              <p>{category.services.photographer}</p>
              <hr />
              <p>{category.services.consultation}</p>
              <hr />
              <p>{category.services.images}</p>
              <hr />
              <p>{category.services.gallery}</p>
              <hr />
            </div>
            <div className="mt-8">
              <MainButton
                name="Get Started"
                link="/order-page"
                style="py-2 px-8 text-lg"
              ></MainButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
