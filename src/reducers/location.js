import { REQUEST, RECEIVE } from '../constants/ActionTypes';

const locationListing = (state = { isLocating: false, location: null, regions: null }, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        clientLocating: true,
        isLocating: true
      };
    case RECEIVE: {
      const newState = {
        ...state,
        clientLocating: false,
        isLocating: false,
        location: action.payload.json.location,
        regions: action.payload.json.regions
      };
      console.log(action);
      return newState;
    }
    default:
      return state;
  }
};

export default locationListing;
