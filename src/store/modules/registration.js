const store = {
    namespaced: true,
    state: {
        name: '',
        nik: '',
        address: '',
        date: '',
        photo: '',
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
        },
        setPhoto(state, photo) {
            state.photo = photo;
        }     
    },
    actions: {
    },
    getters: {
    }
}

export default store;