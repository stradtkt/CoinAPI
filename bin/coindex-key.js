const program = require('commander');
const key = require('../commands/key');

program
    .command('set')
    .description('Set API Key -- Get at https://nomics.com')
    .action(() => console.log('Hello from set'));

program
    .command('show')
    .description('Show API Key')
    .action(() => console.log('Hello from show'));

program
    .command('remove')
    .description('Remove API Key')
    .action(() => console.log('Hello from remove'));

program.parse(process.argv);