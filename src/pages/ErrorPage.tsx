import PrimaryBtn from "@components/Button/PrimaryBtn";
import Layout from "@components/Layout/Layout";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  return (
    <Layout>
      <div className="grid-center my-8 flex flex-col items-center gap-4">
        <p>Uh oh, something went wrong!</p>
        <p>{`Page ${error.statusText}`}</p>
        <Link to="..">
          <PrimaryBtn buttonType="button">Go back</PrimaryBtn>
        </Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
