import PrimaryBtn from "@components/Button/PrimaryBtn";
import Layout from "@components/Layout/Layout";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="grid-center my-8 flex flex-col items-center gap-4 ">
        <p>Uh oh, something went wrong!</p>
        <Link to="..">
          <PrimaryBtn buttonType="button">Go back</PrimaryBtn>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
