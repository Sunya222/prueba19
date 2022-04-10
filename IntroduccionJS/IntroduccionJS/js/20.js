//Método de Propiedad // Si quisieramos que esto se mostrará en la web,falta el Dom y eventos en js. Lo veremos más adelante.(Juan)
const reproductor = {
   reproducir : function(id) {
       console.log(`Reproduciendo Canción con el ID: ${id}`)
},
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');