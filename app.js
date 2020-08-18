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

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            type : 'string',
            demandOption :true,
            describe : 'Note Title'
        }
    },

    handler : function(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command : 'list',
    describe : 'list notes',
    handler : function(argv){
        notes.listNotes();
    }
});

yargs.parse();
