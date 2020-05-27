<template>
    <div>
        <header class="masthead" style="background-image:url('assets/img/about-bg.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading">
                            <h3 v-text="titulo"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
        </div>
    </div>

</template>

<script>
    export default {
        props: ['adm'],
        computed: {
            titulo() {
                let texto;
                console.log(this.adm);
                if (this.adm == 'simple') {
                    texto = 'Bienvenido a la p\u00E1gina de Administraci\u00F3n'
                }
                else if (this.adm == 'avanzado') {
                    texto = 'Esta p\u00E1gina de administraci\u00F3n est\u00E1 en construcci\u00F3n. Intente como administrador simple';
                } else {
                    texto = 'La ruta especificada no existe';
                }
                console.log("texto es- " + texto);
                return texto;
            }
        },
    }
</script>