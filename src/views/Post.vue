<template>
    <div>
        <!-- CONTENIDO PARA LA VISTA PRINCIPAL O PADRE DEL POST -->
        <div>
            <!-- IMPLEMENTAR EL ROUTER VIEW QUE MUSTRE EL ARTICULO-->
            <router-view :to="{name:'Articulo'}"></router-view>
        </div>
    </div>
</template>