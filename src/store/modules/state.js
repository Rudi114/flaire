
const state = {
    signUp: false,
    newUser: {
        name: "",
        email: "",
        password: "",
        phone: ""
    }
};

const mutations = {
    setSignUp(state, signUp) {
        state.signUp = signUp;
    },
    setNewUser(state, newUser) {
        state.newUser = newUser;
    }
};

const actions = {
};

const getters = {
    getSignUp(state) {
        return state.signUp;
    }, 
    getNewUser(state) {
        return state.newUser;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}