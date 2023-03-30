import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

export default class extends Controller {
  connect() {
    console.log("connected to react controller!");

    // const e = React.createElement;
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(e(App), root);

    const app = document.getElementById("root");
    createRoot(app).render(<App />);
  }
}
