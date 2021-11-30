const store = {
    namespaced: true,
    state: {
        name: '',
        nik: '',
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setNIK(state, nik) {
            state.nik = nik;
        }
    },
    actions: {
    },
    getters: {
    }
}

export default store;