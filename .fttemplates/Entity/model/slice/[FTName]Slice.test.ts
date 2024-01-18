import { [FTName]Schema } from '../types/[FTName]Schema';
import { [FTName]Actions, [FTName]Reducer } from './[FTName]Slice';

describe('[FTName]Slice', () => {
  test('test', () => {
    const state: DeepPartial<[FTName]Schema> = { };
    expect([FTName]Reducer(state as [FTName]Schema, [FTName]Actions.setText('1'))).toEqual('1');
  });
});
