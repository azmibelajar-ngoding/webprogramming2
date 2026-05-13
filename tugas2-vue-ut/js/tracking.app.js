const app = Vue.createApp({
    data() {
        return {
            books: [
                {
                    kodeDO: "DO001",
                    judul: "PEMROGRAMAN BERBASIS WEB",
                    lokasi: "Gudang A",
                    status: "Dikirim"
                },
                {
                    kodeDO: "DO002",
                    judul: "PANCASILA",
                    lokasi: "Gudang B",
                    status: "Dalam Perjalanan"
                },
                {
                    kodeDO: "DO003",
                    judul: "PROSES BISNIS",
                    lokasi: "Gudang C",
                    status: "Diterima"
                },
                {
                    kodeDO: "DO004",
                    judul: "PERILAKU ORGANISASI",
                    lokasi: "Gudang D",
                    status: "Dikirim"
                },
                {
                    kodeDO: "DO005",
                    judul: "SISTEM INFORMASI MANAJEMEN",
                    lokasi: "Gudang E",
                    status: "Diproses"
                }
            ]
        }
    }
})
app.mount('#app')

