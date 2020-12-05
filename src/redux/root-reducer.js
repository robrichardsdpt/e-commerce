// combines all of our states together in one large json obj
import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})