import { framer } from "framer-plugin"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/globals.css'

framer.showUI({
  position: "top right",
  width: 320,
  height: 500,
})

// Set up Menu with logout option (required for plugins with login)
framer.setMenu([
  { id: "settings", label: "Settings" },
  { id: "logout", label: "Log Out" },
])

framer.onMenuAction(async (actionId) => {
  if (actionId === "logout") {
    // Clear stored credentials
    await framer.setPluginData("instagramToken", "")
    await framer.setPluginData("username", "")
    framer.notify("Logged out successfully", { variant: "success" })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
