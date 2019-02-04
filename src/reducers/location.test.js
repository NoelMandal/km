import reducer from './location.js';
import * as types from '../constants/ActionTypes.js';

describe('location reducer', () => {
  it('will return init state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isLocating: false,
        location: null,
        regions: null
      }
    );
  });

  it('case RECEIVE', async () => {
    await function() {
      expect(reducer({}, {
        type: types.RECEIVE
      })
      ).toEqual(
        {
          clientLocating: false,
          isLocating: false
        }
      )
    };
  });
});