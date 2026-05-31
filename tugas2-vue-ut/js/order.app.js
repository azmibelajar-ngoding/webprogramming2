const app = Vue.createApp({

    components: {
        'header-component': HeaderComponent,
        'footer-component': FooterComponent
    },

    data() {
        return {

            nama: '',
            bukuDipilih: '',
            jumlah: 1,
            keyword: '',
            error: '',
            showPanduan: false,

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
            ],

            pesanan: []

        }
    },

    computed: {

        totalPesanan() {
            return this.pesanan.length
        },

        filteredBooks() {

            return this.books.filter(item =>
                item.judul
                    .toLowerCase()
                    .includes(this.keyword.toLowerCase())
            )

        }

    },

    watch: {

        nama(value) {

            if (value.length > 30) {

                this.error =
                    'Nama maksimal 30 karakter'

            } else {

                this.error = ''

            }

        },

        jumlah(value) {

            if (value < 1) {

                this.jumlah = 1

            }

        }

    },

    methods: {

        formatNama(text) {

            return text
                .toLowerCase()
                .replace(
                    /\b\w/g,
                    huruf => huruf.toUpperCase()
                )

        },

        simpanPesanan() {

            if (
                this.nama === '' ||
                this.bukuDipilih === ''
            ) {

                this.error =
                    'Semua data wajib diisi'

                return

            }

            this.pesanan.push({

                nama: this.nama,
                buku: this.bukuDipilih,
                jumlah: this.jumlah,
                tanggal: new Date()
                    .toLocaleDateString()

            })

            this.nama = ''
            this.bukuDipilih = ''
            this.jumlah = 1
            this.error = ''

        }

    }

})

app.mount('#app')