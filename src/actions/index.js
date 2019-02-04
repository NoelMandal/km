import * as types from '../constants/ActionTypes';
import * as config from '../constants/config';

export const requestLocation = coords => ({
  type: types.REQUEST,
  payload: coords,
});

export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  payload: {
    coords,
    json
  },
});

export const locate = coords => async(dispatch) => {
  const response = await fetch(`//${config.API_HOST}/wm/v2/location?include%5B%5D=regions.listings&latlng=${coords.latitude}%2C${coords.longitude}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .catch(err => err);
  const payload = await response.json()
    .catch(err => err);
  dispatch(receiveLocation(coords, payload.data));
};
