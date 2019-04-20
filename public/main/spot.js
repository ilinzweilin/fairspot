let WiFiControl = require('wifi-control')
let pcap = require('pcap')
let { promisify } = require('util')
let {
  openPaymentChannel,
  closePaymentChannel,
  addPaymentInformation,
  submitPayment
} = require('../../src/helpers/payment')

// --> charge for 100KB
const chunkSize = 100000,
  chunkPrize = 1

let amountPaidTotal = 0,
  bytesConsumedTotal = 0,
  bytesCurrentChunk = 0,
  tcp_tracker = new pcap.TCPTracker(),
  pcap_session = pcap.createSession('en0', "ip proto \\tcp")

WiFiControl.scanForWiFi = promisify(WiFiControl.scanForWiFi)
WiFiControl.connectToAP = promisify(WiFiControl.connectToAP)
WiFiControl.resetWiFi = promisify(WiFiControl.resetWiFi)

WiFiControl.init({
  debug: true
})

async function connectToSpot(ssid, password) {
  await WiFiControl.connectToAP({
    ssid, password
  })
  resetValues()
}

async function disconnectFromSpot() {
  await WiFiControl.resetWiFi()
}

async function findSpots() {
  const data = await WiFiControl.scanForWiFi()
  // HACK: turn Wifi access points into spots
  addPaymentInformation(data.networks)
  console.log("networks", data.networks)
  return networks
}


function startSpotting() {
  pcap_session.on('packet', async function (raw_packet) {
    var packet = pcap.decode.packet(raw_packet)
    tcp_tracker.track_packet(packet)
    const packetSize = packet.payload.payload.length
    bytesConsumedTotal += packetSize
    bytesCurrentChunk += packetSize
    if (bytesCurrentChunk >= chunkSize) {
      console.log(`bytes in current chunk before payment ${bytesCurrentChunk}`)
      submitPayment()
      bytesCurrentChunk -= chunkSize
      console.log(`bytes in current chunk after payment ${bytesCurrentChunk}`)
      console.log("total consumption", bytesConsumedTotal)
    }
  })
}

function resetValues() {
  amountPaidTotal = 0
  bytesConsumedTotal = 0
  bytesCurrentChunk = 0
}

module.exports = {
  connectToSpot,
  disconnectFromSpot,
  findSpots,
  startSpotting
}
