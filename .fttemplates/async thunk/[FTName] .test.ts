import axios from 'axios';


import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { [FTName] } from './[FTName]';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('[FTName]', () => {
  test('success ', async () => {
    const data = {
      value: 1
    };

    const thunk = new TestAsyncThunk([FTName]);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk([FTName]);
    thunk.api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
