const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


yargs.command({
    command : 'add',
    describe : 'Add a Note',
    builder : {
        title : {
            describe : 'Note Title',
            type : 'string',
            demandOption : true

        },

        body : {
            describe : 'Note Body',
            type : 'string',
            demandOption : true
        }
    },

    handler : function (argv){
        console.log(argv);
        notes.addNote(argv.title, argv.body);
    }
});

yargs.parse();
