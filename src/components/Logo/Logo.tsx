import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center justify-start gap-4">
        <img
          className="h-10 w-10 xs:h-8 xs:w-8"
          src="/assets/images/movie-box-icon-logo.png"
        />
        <div className="text-2xl font-bold leading-normal text-white md:hidden">
          MovieBox
        </div>
      </div>
    </Link>
  );
};

export default Logo;
