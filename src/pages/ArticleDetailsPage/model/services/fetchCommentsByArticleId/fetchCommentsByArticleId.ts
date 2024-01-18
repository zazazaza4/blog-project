import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
 >(
   'articleDetails/fetchCommentsByArticleId',
   async (articleId, { extra, rejectWithValue }) => {
     if (!articleId) {
       return rejectWithValue('error');
     }

     try {
       const response = await extra.api.get<Comment[]>('/comments', {
         params: {
           articleId,
           _expend: 'user',
         },
       });

       if (!response.data) {
         throw new Error();
       }

       return response.data;
     } catch (error) {
       return rejectWithValue('error');
     }
   },
 );
