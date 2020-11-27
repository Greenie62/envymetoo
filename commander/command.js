const program = require('commander');
const pkg = require('../package.json');


program.version(pkg.version)
       .command("add", "add a client/item")
       .command("view", "view clients/items")
       .parse(process.argv)