const HeaderComponent = {
    props: ['title', 'subtitle'],
    template: `
        <div class="hero">
            <h1>{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </div>
    `
}

const FooterComponent = {
    template: `
        <div style="margin-top:20px;text-align:center;">
            <hr>
            <p>
                Sistem Pemesanan Bahan Ajar SITTA
            </p>
        </div>
    `
}