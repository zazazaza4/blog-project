import { StateSchema } from 'app/providers/StoreProvider';

export const getAritcleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
export const getAritcleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
