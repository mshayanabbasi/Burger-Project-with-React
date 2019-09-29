import reducer from './auth'
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            token: null,
            userId: null,
            error: null,
            authRedirectPath: '/'
        })
    })
    it('should store the token upon login', () => {
        expect(reducer({
            loading: false,
            token: null,
            userId: null,
            error: null,
            authRedirectPath: '/'
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id' 
        })).toEqual({
            loading: false,
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            authRedirectPath: '/'
        })
    })
})