import axios from 'axios';

import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { addCommentForArticle } from './addCommentForArticle';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('addCommentForArticle', () => {
  test('success ', async () => {
    const data = {
      text: 'text',
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authDate: {
          id: '1',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({
      data,
    }));
    const result = await thunk.callThunk('text');

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authDate: {
          id: '1',
        },
      },
      articleDetails: {
        data: {
          id: '1',
        },
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({
      status: 403,
    }));
    const result = await thunk.callThunk('1');

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
