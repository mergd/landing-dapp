import { Address } from 'wagmi'

export interface Token {
  name: string
  image: string
  contractAddress: Address
  symbol: string
  cgID?: string
}

export interface Term {
  name: string
  termNumber: number
  liquidationBonus: number
  auctionLength: number
}

export const TOKENS: Token[] = [
  {
    name: 'Wrapped Staked Ether',
    image: 'https://assets.coingecko.com/coins/images/18834/large/wstETH.png?1633565443',
    contractAddress: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
    symbol: 'WSTETH',
    cgID: 'wrapped-steth',
  },
  {
    name: 'Wrapped Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744',
    contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    symbol: 'WBTC',
    cgID: 'wrapped-bitcoin',
  },
  {
    name: 'DAI',
    image: 'https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png?1687143508',
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    symbol: 'DAI',
    cgID: 'dai',
  },
  {
    name: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    symbol: 'USDC',
    cgID: 'usd-coin',
  },
]

export const TERMS: Term[] = [
  {
    name: '🔵 Blue Chip',
    termNumber: 1,
    liquidationBonus: 0.05,
    auctionLength: 4000,
  },
  {
    name: '🟠 Long Tail',
    termNumber: 2,
    liquidationBonus: 0.1,
    auctionLength: 96000,
  },
  {
    name: '🟣 Like Kind',
    termNumber: 3,
    liquidationBonus: 0.01,
    auctionLength: 4000,
  },
  {
    name: '🤝 P2P',
    termNumber: 1,
    liquidationBonus: 0,
    auctionLength: 44000,
  },
  {
    name: '🔵 Blue Chip',
    termNumber: 1,
    liquidationBonus: 10,
    auctionLength: 0.05,
  },
]
