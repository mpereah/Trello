require('dotenv').config()

if (process.env.TOKEN && process.env.KEY){
    throw new Error('no hay configuracion de API Key y Token')
}
