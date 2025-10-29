// @ts-nocheck
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
//   console.log(error.status);

  return (
    // <h1>404 Page not Found Error</h1>
    <div>
      <h1>OOPS</h1>
      <h3>Something went wrong </h3>
      <h3>{error?.status}</h3>
      <h3>{error?.statusText}</h3>
    </div>
  );
};
export default Error;
