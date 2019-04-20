let axios = require('axios')

const tokenAddress = "partner"
const partnerAddress = "token"

export async function openPaymentChannel(partnerAddress, tokenAddress, totalDeposit, settleTimeout) {
try {
  const req = await axios.put(
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
  )} catch(err) {
    console.log("err occurred", err)
  }
}


export async function joinTokenNetwork() {
  const res = await axios.put(
    'http://localhost:5001/api/v1/connections/0x396764f15ed1467883A9a5B7D42AcFb788CD1826',
    {
      funds: 20
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  console.log('joined nework', res)
}

export async function getExistingPartners() {
  const res = await axios.get(
    'http://localhost:5001/api/v1/channels/0x396764f15ed1467883A9a5B7D42AcFb788CD1826',
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  return res
}


export async function reopenPaymentChannel(partnerAddress, tokenAddress) {
  const req = await axios.patch(
    `http://localhost:5001/api/v1/channels/${tokenAddress}/${partnerAddress}`,
    {
      state: 'opened'
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  console.log("payment channel closed", req)
}

export async function closePaymentChannel(partnerAddress, tokenAddress) {
  const req = await axios.patch(
    `http://localhost:5001/api/v1/channels/${tokenAddress}/${partnerAddress}`,
    {
      state: 'closed'
    },
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  console.log("payment channel closed", req)
}

export async function leaveTokenNetwork(tokenAddress) {
  const req = await axios.delete(
    `http://localhost:5001/api/v1/connections/${tokenAddress}`,
    {
      headers: { 'Content-Type': 'application/json' },
    })
  console.log("network left", req)
}

export async function submitPayment(partnerAddress, tokenAddress, amount) {
  const req = await axios.post(
    `http://localhost:5001/api/v1/payments/${tokenAddress}/${partnerAddress}`,
    {
      amount
    },
    {
      headers: { 'Content-Type': 'application/json' },
    })
  console.log("payment sent", req)
}

export function addPaymentInformation (elements) {
  elements.forEach( element => {
    element.tokenAddress = tokenAddress
    element.partnerAddress = partnerAddress  
  })
}
