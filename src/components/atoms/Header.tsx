import { Routes } from "../infrastructure/routes";
import { h } from "preact";
import "./header.css";

export default () => (
  <header>
    <ul>
      <a href={Routes.home}>simple calculator</a>
      <a href={Routes.advancedRouteHeldRunesEntry}>advanced calculator</a>
    </ul>
  </header>
);
