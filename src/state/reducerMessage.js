export default function reducerMessage(state = 'Server says hello', action) {
    switch (action.type) {
      case 'SET_MESSAGE':
        return {
          ...state,
          message: action.message,
      }
      default:
        return state;
      }
  }