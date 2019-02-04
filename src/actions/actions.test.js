import { recieveLocation, locate }from './index.js';
import * as types from '../constants/ActionTypes.js';

describe('check locate', () => {
  it('recieves location ', () => {
    // await function () {
      expect(recieveLocation({}, {
        type: types.RECEIVE,
      }).toEqual(
        {
          payload: {
            coords,
            json
          }
        }
      )
      )
    // }
  })
});