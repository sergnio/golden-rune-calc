import { Routes } from "../infrastructure/routes";

export default () => {
  return (
    <>
      <h1>Error!!</h1>
      <p>Not sure how you got here :)</p>
      <p>
        Consider going back <a href={Routes.home}>home</a>
      </p>
    </>
  );
};
