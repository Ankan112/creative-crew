import Link from "next/link";

const MainButton = ({ link, name, style }) => {
  return (
    <div>
      <Link href={link}>
        <button
          className={`${style} font-main border-2 border-solid bg-transparent cursor-pointer hover:bg-[#FED6DE] hover:border-[#FED6DE] rounded hover:text-[#463333] duration-500`}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default MainButton;
