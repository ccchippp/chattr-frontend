import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import appReducer from '../features/appSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        app: appReducer
    }
}
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)