<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <!-- MENU DE NAVEGACION -->
                    <ul class="nav navbar-nav ml-auto" id="menu-v8">
                        <li class="nav-item" role="presentation">
                            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                            <router-link :to="{name:'inicio'}">portada</router-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                            <router-link :to="{name:'sobremi'}">sobre m&iacute;</router-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTÁTICA -->
                            <router-link to="/contacto">contacto</router-link>
                        </li>
                        <li class="nav-item" role="presentation">
                            <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A RUTA ESTÁTICA -->
                            <router-link to="/post/1">&Uacute;ltimo post</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
        <transition name="mi-transicion">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>export default {

}</script>

<style scoped>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #menu-v8 a {
        text-shadow: 1px 1px #000;
    }
    .mi-transicion-enter-active, .mi-transicion-leave-active {
        transition: opacity 0.1s;
    }
    .mi-transicion-enter, .mi-transicion-leave-to{
        opacity: 0;
    }
</style>
