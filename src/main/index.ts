import { app } from 'electron';
import log from 'electron-log';
import minimist from 'minimist';
import { isDev } from '@utils/env';

import './lcu-toolkit';

// === Uncomment the following lines for auto updating: ===

// import { checkForUpdates } from './auto-update';

log.transports.file.level = 'debug';
log.transports.console.level = isDev
  ? 'silly'
  : minimist(process.argv.slice(2)).loglevel || false;

app.setAppUserModelId('com.jinx.binding');

if (!app.requestSingleInstanceLock()) {
  app.quit();
}

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  require('./binding-manager');

  // === Uncomment the following lines for auto updating: ===

//   const { getMainWindow } = require('./main-window');
// Uncomment the following line to check for updates:
//   checkForUpdates(getMainWindow());
});
