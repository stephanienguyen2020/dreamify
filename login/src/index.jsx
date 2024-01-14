import React from "react";
import ReactDOMClient from "react-dom/client";
import { SignIn } from "./screens/SignIn";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SignIn />);
