import Link from "next/link";

const MainButton = ({ link, name, style }) => {
  return (
    <div>
      <Link href={link}>
        <button
          className={`${style} border-2 border-solid bg-transparent cursor-pointer hover:bg-blue-400 hover:border-blue-400 hover:text-white duration-500`}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default MainButton;
