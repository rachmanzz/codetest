import React from "react";
import App from "./src/App"

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container as any); // createRoot(container!) if you use TypeScript
root.render((<App />));