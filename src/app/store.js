import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import appReducer from '../features/appSlice'
import chatReducer from '../features/chatSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
        chat: chatReducer,
    }
}
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)