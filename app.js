const _ = require('lodash');
const notes = require('./notes.js');
const argv = require('yargs').argv

var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (typeof note !== 'undefined' && note) {
        console.log('Note added successfully:', note.title);
    }
    else {
        console.log('Note already existing!');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    console.log(note ? `Title: ${note.title} \nBody: ${note.body}` : 'Note not found');
} else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    var message = note ? 'Note deleted' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not regognized');
}
