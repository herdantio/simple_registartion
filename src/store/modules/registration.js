const store = {
    namespaced: true,
    state: {
        name: '',
        nik: '',
        address: '',
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setNIK(state, nik) {
            state.nik = nik;
        },
        setAddress(state, address) {
            state.address = address;
        }
    },
    actions: {
    },
    getters: {
    }
}

export default store;