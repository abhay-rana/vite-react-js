import { createSlice } from '@reduxjs/toolkit';
import { FetchCounter } from '~/redux/actions/counter-actions';
import { ResetLocalState } from '~/redux/slices/container-slice';

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            state.counter += 1;
        },
        DeleteTodo: (state, action) => {
            state.counter -= 1;
        },
        IncreaseOne: (state) => {
            // setTimeout(() => {
            // }, 10000);
            state.counter += 1;
        },
        IncreaseTwo: (state) => {
            state.counter += 2;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(ResetLocalState.type, (state, action) => {});
        builder.addCase(FetchCounter.fulfilled, (state, { payload }) => {
            return;
        });
        // //fetch
        // builder;
        // .addCase(fetchAttachments.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(fetchAttachments.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = '';
        //     state.attachments = action.payload;
        // })
        // .addCase(fetchAttachments.rejected, (state, action) => {
        //     state.loading = false;
        //     state.attachments = [];
        //     state.error = action.error.message || '';
        // })
        // // create the attachments
        // .addCase(createAttachment.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(createAttachment.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = '';
        //     state.attachments.push(action.payload);
        // })
        // .addCase(createAttachment.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message || '';
        // })
        // // update
        // .addCase(updateAttachment.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(updateAttachment.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = '';
        //     state.attachments = state.attachments.map((attachment) =>
        //         attachment?._id === action.payload._id
        //             ? action.payload
        //             : attachment
        //     );
        // })
        // .addCase(updateAttachment.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message || '';
        // })
        //  // delete the attachments
        // .addCase(deleteAttachment.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(deleteAttachment.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.error = '';
        //     state.attachments = state.attachments.filter(
        //         (attachment) => attachment?._id !== action.payload._id
        //     );
        // })
        // .addCase(deleteAttachment.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message || '';
        // });
    },
});

export const { AddTodo, DeleteTodo, IncreaseOne, IncreaseTwo } =
    counterSlice.actions;
export default counterSlice.reducer;
