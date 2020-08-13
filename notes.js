const chalk = require('chalk');
const fs = require('fs');

// addNote function as a handler for add command
const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body : body
        });

        saveNote(notes);
        console.log(chalk.green.inverse('Note Added!'));

    }
    else{
        console.log(chalk.red.inverse('Note found with same title'));
    }
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('note.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(error){
        return [];
    }
}

const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json', dataJSON);

}


module.exports = {
    addNote : addNote
}