import { categories } from "@/constant";
import MainButton from "./MainButton";
import { BsCamera } from "react-icons/bs";

const PackageCard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="text-center shadow-xl border border-solid border-gray-200 p-10"
          >
            <div className="h-14 w-16 flex bg-white justify-center items-center border- border-solid border-gray-500 mx-auto ">
              <BsCamera size={40} />
            </div>
            <h1 className="font-semibold text-xl mt-3">{category.package}</h1>
            <p className="text-4xl font-medium mt-3"> {category.price}</p>
            <div className="text-lg font-medium mt-5">
              <p className="mb-2">{category.duration}</p>
              <hr className="border border-solid border-gray-300" />
              <p className="my-2">{category.services.photographer}</p>
              <hr className="border border-solid border-gray-300" />
              <p className="my-2">{category.services.consultation}</p>
              <hr className="border border-solid border-gray-300" />
              <p className="my-2">{category.services.images}</p>
              <hr className="border border-solid border-gray-300" />
              <p className="my-2">{category.services.gallery}</p>
              <hr className="border border-solid border-gray-300" />
            </div>
            <div className="mt-8">
              <MainButton
                name="Get Started"
                link="/order"
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
