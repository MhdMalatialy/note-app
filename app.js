const v=require('validator');
const notes =require ('./notes.js');
const c =require('chalk');
const yargs=require('yargs');
const { demandOption, argv } = require('yargs');
yargs.command({
    command:'add',
    discribe:'adding a new note',
    builder:{
        title:{
            discribe:"note title",
            demandOption:true,
            type:'string'
        },
        body:{
            discribe:'the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:  function (){
        notes.addnote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    discribe:'removing a  note',
    builder:{
        title:{
            discribe:'remove',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(){
    notes.removenotes(argv.title);
    
    }
    })
    yargs.command({
        command:'list',
        discribe:'list yout notes',
        handler:function() {
            notes.list
        },

    })
    yargs.command({
        command:'read',
        discribe:'read a  note',
        builder:{
            title:{
                discribe:'read',
                demandOption:true,
                type:'string'
            }
        },
        handler: function(){
        notes.readnote(argv.title);
        
        }
        })
yargs.parse();