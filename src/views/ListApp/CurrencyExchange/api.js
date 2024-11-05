import axios from 'axios'

const apiKey = '1b624b9c4b-119bbddbaf-sm7hm6'

export const getCurrencyExchange = async (from, to, amount) => {
  const response = await axios.get('https://api.fastforex.io/convert', {
    params: {
      from: from,
      to: to,
      amount: amount,
      api_key: apiKey
    }
  })
  return response.data
}

export const getCurrenciesLocation = async () => {
  const response = await axios.get('https://api.fastforex.io/currencies', {
    params: {
      api_key: apiKey
    }
  })
  return response.data
}
