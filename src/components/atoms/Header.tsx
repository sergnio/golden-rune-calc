import { Routes } from "../infrastructure/routes";
import { h } from "preact";
import "./header.css";
import { Link } from "preact-router/match";

export default () => (
  <header>
    <ul>
      <Link activeClassName="active" href={Routes.home}>
        simple calculator
      </Link>
      <Link activeClassName="active" href={Routes.advancedRouteHeldRunesEntry}>
        advanced calculator
      </Link>
    </ul>
  </header>
);
