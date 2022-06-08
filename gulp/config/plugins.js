import replace from "gulp-replace"; // Search and change
import plumber from "gulp-plumber"; // Error handling
import notify from "gulp-notify"; // Message (hints)
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Check updates
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
}
