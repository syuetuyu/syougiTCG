export const createStore = (reducer, preloadedState) => {
    return {
        currentState: preloadedState,

        getState() {
            return this.currentState
        },

        dispatch(action) {
            this.currentState = reducer(this.currentState, action)
        }
    }
}