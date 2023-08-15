const transaksi = {
    namespaced: true,
    state: {
        listTransaksi: [
            {
                id: "TRX1P1",
                donatur: "Anugrah Sand",
                bantuan: "Gempa Lombok",
                jumlah: 100000,
            },
            {
                id: "",
                donatur: "Dharma",
                bantuan: "Bajir Bandang",
                jumlah: 250000
            }, {
                id: "",
                donatur: "Asis Ramadhan",
                bantuan: "Beasiswa Pendidikan",
                jumlah: 300000,
            },
        ],
    },
    mutations: {
        ADD_DONASI: (state, payload) => {
            state.listTransaksi.push(payload);
        },
    },
    actions: {
        save_donasi({ commit, rootState }, payload) {
            rootState.isLoading = true;
            setTimeout(() => {
                commit("ADD_DONASI", payload);
                rootState.isLoading = false;
            }, 1000);
        },
    },
}

export default transaksi;