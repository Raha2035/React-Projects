import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Header from "../components/Header";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div>
        <h1>Oops!</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist!"
            : "An unexpected error occurred"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;