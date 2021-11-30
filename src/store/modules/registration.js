const store = {
    namespaced: true,
    state: {
        name: '',
        nik: '',
        address: '',
        date: ''
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
        },
        setDate(state, date) {
            state.date = date;
        }   
    },
    actions: {
    },
    getters: {
    }
}

export default store;