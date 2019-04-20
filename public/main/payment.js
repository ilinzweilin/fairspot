let axios = require('axios')

const tokenAddress = "partner"
const partnerAddress = "token"

async function openPaymentChannel(partnerAddress, tokenAddress, totalDeposit, settleTimeout) {
  const req = axios.put(
    'http://localhost:5001/api/v1/channels',
    {
      partner_address: partnerAddress,
      token_address: tokenAddress,
      total_deposit: totalDeposit,
      settle_timeout: settleTimeout
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  console.log("payment channel opened", req)
}

async function closePaymentChannel(partnerAddress, tokenAddress) {
  const req = axios.patch(
    `http://localhost:5001/api/v1/channels/${partnerAddress}/${tokenAddress}`,
    {},
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  console.log("payment channel closed", req)
}

async function submitPayment(partnerAddress, tokenAddress, amount, identifier) {
  const req = axios.post(
    `http://localhost:5001/api/v1/channels/${partnerAddress}/${tokenAddress}`,
    {
      amount,
      identifier
    },
    {
      headers: { 'Content-Type': 'application/json' },
    })
  console.log("payment sent", req)
}

function addPaymentInformation (elements) {
  elements.forEach( element => {
    element.tokenAddress = tokenAddress
    element.partnerAddress = partnerAddress  
  })
}
module.exports = {
  addPaymentInformation,
  openPaymentChannel,
  closePaymentChannel,
  submitPayment
}
