export const dev = {
  baseUrl: '/',
  ws: 'ws://localhost:8080/sell/websocket'
}
export const test = {
  baseUrl: 'http://test.com/usdt/'
}
export const prod = {
  baseUrl: 'https://58coin.com/usdt/'
}

const ConfigInit = () => {
  let val = process.env.NODE_ENV
  if (val === 'dev') return dev
  if (val === 'test') return test
  return prod
}

export default ConfigInit