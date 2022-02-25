import { combineReducers } from "redux";

import courses from './courses'
import auth from './auth'
import comment from './comments'

export default combineReducers({courses, auth, comment})