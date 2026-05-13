const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    judul: "PEMROGRAMAN BERBASIS WEB",
                    kode: "MSIM4309",
                    stok: 10
                },
                {
                    judul: "PANCASILA",
                    kode: "MKWN4110",
                    stok: 4
                },
                {
                    judul: "PROSES BISNIS",
                    kode: "STSI4206",
                    stok: 12
                },
                {
                    judul: "PERILAKU ORGANISASI",
                    kode: "EKMA4158",
                    stok: 2
                }
            ]
        }
    }
})
app.mount('#app')