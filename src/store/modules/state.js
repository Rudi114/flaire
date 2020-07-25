const state = {
    signUp: false,
};

const mutations = {
    setSignUp(state, signUp) {
        state.signUp = signUp;
    }
};

const actions = {
};

const getters = {
    getSignUp(state) {
        return state.signUp;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}