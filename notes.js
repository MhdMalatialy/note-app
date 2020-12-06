const fs=require('fs')
const c =require('chalk');
const { title } = require('process');
const addnote=function(title,body){
const notes=loadnotes();
const taken=notes.find(function (note) {
    return note.title===title;
})   

if(!taken){
notes.push({
    title:title,
    body:body
})
savenotes(notes);
}
else{
    console.log(c.red('this title has been taken')) 
}
}
function savenotes(notes){
    const datajson1=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson1);    
}

function loadnotes(){
    try{
    const databuffer=fs.readFileSync('notes.json');
    const datastring=databuffer.toString();
    const datajson=JSON.parse(datastring);
    return datajson;}
    catch(e){
        return []
    }
}
const removenotes =function (title){
 
    const notes1 = loadnotes();
    const array=notes1.filter(function(note){ 
        return title!==note.title
    })
    if (notes1.length==array.length){
    console.log(c.bgRed('no note found!!'))}
    else{
    console.log(c.bgGreen('note removed'))}
    savenotes(array)
}

const list = ()=>{
    console.log(c.yellowBright.bgCyan('your notes:'))
    const not =loadnotes();
    not.forEach((not) => {
        console.log(not.title)
        
    });
}


const readnote=(title)=>{
    const notes=loadnotes();
    const found=notes.find((note)=>title===note.title)
if (found){
console.log(c.bgRedBright.inverse(found.title))
console.log(found.body)
}
else 
console.log("your notes dose't exist")
}
module.exports={
addnote:addnote,
removenotes:removenotes,
list:list,
readnote:readnote}