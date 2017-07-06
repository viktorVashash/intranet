import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '/reducers'

const store = compose(applyMiddleware(thunk)(createStore)(reducer))

export default store
