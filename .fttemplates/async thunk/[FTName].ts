import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

interface[FTName]Props {

}

export const [FTName] = createAsyncThunk<void, void, ThunkConfig<string>>(
    'something/[FTName]',
    async (_, { extra, dispatch, rejectWithValue }) => {
        try {
            const response = await extra.api.get('/');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
