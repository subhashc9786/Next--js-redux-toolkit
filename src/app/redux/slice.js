const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    users: [],
    userApidata: []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});

const Slice = createSlice({
    name: 'addUserSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log("action", action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id != action.payload
            })
            state.users = data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            state.isloading = false,
                state.userApidata = action.payload
        })
    }
})

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;