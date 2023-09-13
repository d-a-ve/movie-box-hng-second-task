import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-md border border-transparent bg-secondary-500 px-4 py-2 text-white outline-none transition duration-200 hover:border-secondary-500 hover:bg-transparent hover:text-black"
      onClick={() => navigate(-1)}
    >
      Go back
    </button>
  );
};

export default BackButton;
