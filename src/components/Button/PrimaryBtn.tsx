import { TBtnProps } from "@customTypes/TBtnProps";

const PrimaryBtn = ({ buttonType, children }: TBtnProps) => {
  return (
    <button
      type={buttonType}
      className="flex items-center justify-center gap-2 rounded-md border border-transparent bg-secondary-500 px-4 py-2 text-white outline-none transition duration-200 hover:border-secondary-500 hover:bg-transparent hover:text-black"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
