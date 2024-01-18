import { StateSchema } from 'app/providers/StoreProvider';

export const get[FTName]Text = (state: StateSchema) => state.[FTName]?.text || '';
export const get[FTName]IsLoading = (state: StateSchema) => state.[FTName]?.isLoading || false;
export const get[FTName]Error = (state: StateSchema) => state.[FTName]?.error || '';
