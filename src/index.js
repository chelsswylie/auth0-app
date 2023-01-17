import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-t1ut3fyrc4wxtmkn.us.auth0.com"
    clientId="tmcdRT0naLVHLH9gNSOcYiqZUHSmI9wz"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
