export default function reducerDrawer(state = false, action) {
    switch (action.type) {
    case 'TOGGLE_DRAWER':
        return { ...state, 
           isDrawerOpen: action.isDrawerOpen 
      };   
    default:
        return state;
    }
  }