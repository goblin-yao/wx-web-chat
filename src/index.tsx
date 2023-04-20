import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";

import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
