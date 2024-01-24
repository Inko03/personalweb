import { NextResponse } from 'next/server'
const mongoose = require('mongoose')


mongoose.connect(`${process.env.DB_URI}`).then(console.log("CONNECTED")).catch((err)=>console.log("ERROR"+err))

const Schema =  new mongoose.Schema({
    type:String,
    message:String
})

const myModel = mongoose.models.message||mongoose.model("message",Schema)

export async function GET(){
    mongoose.disconnect()
    return NextResponse.json({message:"WORK"})
}

export async function POST(req){
    const dane = await req.json()
    if(dane.type&&dane.message){
        await myModel.create({type:dane.type, message:dane.message})
        return NextResponse.json({message:"SUCCESS"})
    }else{
        return NextResponse.json({message:"Samthing went wrong"})
    }
}