import { addQueryParams, getQueryParams } from './addQueryParams';

describe('shared/url/getQueryParams', () => {
  it('should return an empty string for empty params', () => {
    expect(getQueryParams({})).toBe('');
  });

  it('should return the correct query string for non-empty params', () => {
    const params = { param1: 'value1', param2: 'value2' };
    const queryString = getQueryParams(params);

    expect(queryString.includes('param1=value1&param2=value2')).toBe(true);
  });

  it('should handle undefined values by excluding them from the query string', () => {
    const params = { param1: 'value1', param2: undefined };
    const queryString = getQueryParams(params);

    expect(queryString.includes('param1=value1')).toBe(true);
    expect(queryString.includes('param2')).toBe(false);
  });
});

describe('addQueryParams', () => {
  const originalPushState = window.history.pushState;
  beforeAll(() => {
    // @ts-ignore
    window.history.pushState = jest.fn();
  });

  afterAll(() => {
    window.history.pushState = originalPushState;
  });

  it('should call pushState with the correct arguments', () => {
    const params = { param1: 'value1', param2: 'value2' };
    addQueryParams(params);

    expect(window.history.pushState).toHaveBeenCalledWith(null, '', getQueryParams(params));
  });
});
