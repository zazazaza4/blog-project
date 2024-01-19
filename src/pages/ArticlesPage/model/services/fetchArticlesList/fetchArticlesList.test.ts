import axios from 'axios';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from './fetchArticlesList';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('fetchArticlesList', () => {
  test('success ', async () => {
    const data = {
      id: '1',
      title: 'some',
    };

    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.get.mockReturnValue(Promise.resolve({
      data,
    }));
    const result = await thunk.callThunk({ page: 1 });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList);
    thunk.api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk({ page: 1 });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
