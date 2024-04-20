import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {
  isWindowMaximized: () => ipcRenderer.invoke("is-window-maximized"),
  onWindowStateChange: (callback) => {
    ipcRenderer.on("window-state-changed", (event, isMaximized) => {
      callback(isMaximized);
    });
  },
  offWindowStateChange: (callback) => {
    ipcRenderer.removeListener("window-state-changed", callback);
  },
  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  maximizeOrRestoreWindow: () => ipcRenderer.send("maximize-or-restore-window"),
  closeWindow: () => ipcRenderer.send("close-window")
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
