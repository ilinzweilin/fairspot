
let {
  connectToSpot,
  disconnectFromSpot,
  findSpots,
  startSpotting
} = require('./spot')

async function start() {
  await disconnectFromSpot()
  await findSpots()
  await connectToSpot("ETHCapeTownWifi", "ETHCPTbuidl")
  startSpotting()

}

start()

