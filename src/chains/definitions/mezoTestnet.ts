import { defineChain } from '../../utils/chain/defineChain.js'

export const mezoTestnet = /*#__PURE__*/ defineChain({
  id: 31611,
  name: 'Mezo matsnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Testnet Bitcoin',
    symbol: 'BTC',
  },
  rpcUrls: {
    default: { http: ['https://rpc.test.mezo.org'] },
  },
  blockExplorers: {
    default: {
      name: 'Mezo matsnet Explorer',
      url: 'https://explorer.test.mezo.org',
    },
  },
  testnet: true,
})
