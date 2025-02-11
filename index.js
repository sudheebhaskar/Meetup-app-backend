const express = require("express");
const app = express()

const { initializeDatabase } = require("./db/db.connect");
const fs = require('fs')
const Event = require("./models/events.models")
app.use(express.json())
initializeDatabase();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const jsonData = fs.readFileSync('events.json', 'utf8')
const eventsData = JSON.parse(jsonData)

function seedData(){

  try{
    for(const eventData of eventsData){
      const newEvent = new Event({
        title: eventData.title,
        dateAndTime: eventData.dateAndTime,
        eventImage: eventData.eventImage,
        eventType: eventData.eventType,
      speakers: eventData.speakers,
        speakerDetails: eventData.speakerDetails,
        eventVenue: eventData.eventVenue,
        paidFee: eventData.paidFee,
        hostedBy: eventData.hostedBy,
        eventDetails: eventData.eventDetails 
      })

      newEvent.save()
      //console.log('Event Data: ', newEvent.title)
    }
  } catch(error){
     console.log("Error seeding the data", error)
  }
  
}

seedData()

async function readAllEvents(){
  try{
    const allEvents = await Event.find()
    return allEvents
  } catch(error){
    console.log(error)
  }
}

app.get("/events", async(req,res) =>{
  try{
    const events = await readAllEvents()
    if(events.length != 0){
      res.json(events)
    } else {
      res.status(500).json({error: 'No events found'})
    }
  } catch(error){
    res.status(500).json({error: "Failed to fetch events"})
  }
})



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on this port: ${PORT}`)
})

