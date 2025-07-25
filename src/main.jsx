import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@fontsource/merriweather';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
                  <MantineProvider defaultColorScheme="black">
                    <App />
                </MantineProvider>
  </React.StrictMode>,
)
