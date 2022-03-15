import SimpleCalculator from "./components/pages/SimpleCalculator";
import { h } from "preact";
import Router from "preact-router";
import ErrorPage from "./components/pages/ErrorPage";

export default () => {
  return (
    // @ts-ignore
    <Router>
      {/* @ts-ignore - ignore TS complaining */}
      <SimpleCalculator path="/" />
      {/* @ts-ignore - ignore TS complaining */}
      <ErrorPage default />
    </Router>
  );
};
