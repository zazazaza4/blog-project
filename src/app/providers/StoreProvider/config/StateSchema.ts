import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { LoginSchema } from 'features/AuthByUsername';

import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore {
    reducerManager: ReducerManager;
}
