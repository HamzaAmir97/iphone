import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://fb18e849208f03391cfba9c0d17fa8c0@o4509357732397056.ingest.de.sentry.io/4509357790068816",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
