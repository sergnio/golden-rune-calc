import SimpleCalculator from "./components/pages/SimpleCalculator";
import { h } from "preact";
import Router from "preact-router";
import ErrorPage from "./components/pages/ErrorPage";
import { Routes } from "./components/infrastructure/routes";
import HeldRunesInput from "./components/pages/HeldRunesInput";
import Header from "./components/atoms/Header";

export default () => {
  return (
    <>
      <Header />
      {/* @ts-ignore - preact + ts = ?? */}
      <Router>
        {/* @ts-ignore - preact + ts = ?? */}
        <SimpleCalculator path={Routes.home} />
        {/* @ts-ignore - preact + ts = ?? */}
        <HeldRunesInput path={Routes.advancedRouteHeldRunesEntry} />
        {/* @ts-ignore - preact + ts = ?? */}
        <ErrorPage default />
      </Router>
    </>
  );
};
