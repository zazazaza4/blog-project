import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';

import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentForm';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/editableProfileCard';

import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
