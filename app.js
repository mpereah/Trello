require('dotenv').config()

if (!process.env.TOKEN && !process.env.KEY){
    throw new Error('no hay configuracion de API Key y Token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let carTitle = `Card nueva ${new Date()}`

trello.addCard(carTitle, "LaunchX Card Description", "627ec3d9c7e23b105359fba8",
    function (error, trelloCard){
        if (error){
            console.log('Could not add Card', error);
    }   
        else{
            console.log('Added card:', trelloCard);
    }
})