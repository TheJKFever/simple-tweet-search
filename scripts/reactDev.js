/*
 * Start react app using a new thread
 */
var args = ["start"];
var opts = { stdio: "inherit", cwd: "react", shell: true };
require("child_process").spawn("npm", args, opts);
