import {GET_STOCKS, SUCCESS} from '../../constants/Actions'

const INITIAL_STATE = [
  {
    name: 'Adyen NV',
    shortName: 'ADYEN',
    amount: 4,
    currentPrice: 656.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Apple Inc.',
    shortName: 'APPL',
    amount: 1,
    currentPrice: 45.29,
    percentageChange: 17.2,
    type: 'positive',
  },
  {
    name: 'Tesla Inc',
    shortName: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Tesla Inc 3',
    shortName: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
  {
    name: 'Tesla Inc 4',
    shortName: 'TSLA',
    amount: 2,
    currentPrice: 56.8,
    percentageChange: 2.4,
    type: 'negative',
  },
]

export default (state = INITIAL_STATE, action) => {
  if (!GET_STOCKS) {
    return state
  }

  switch (action.name) {
    case SUCCESS:
      return action.payload
    default:
      return state
  }
}
