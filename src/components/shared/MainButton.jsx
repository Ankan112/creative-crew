import Link from "next/link";

const MainButton = ({ link, name, style }) => {
  return (
    <div>
      <Link href={link}>
        <button
          className={`${style} font-main border-2 border-solid bg-transparent cursor-pointer hover:bg-black hover:border-black rounded hover:text-white duration-500`}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default MainButton;
