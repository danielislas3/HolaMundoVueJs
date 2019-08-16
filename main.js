const app = new Vue({
  el: '#app',
  data:{
    titulo:"Hola mundo con vue",
    frutas:[
      {nombre:'Pera', cantidad:10},
      {nombre:'Manzana', cantidad:1},
      {nombre:'Uva', cantidad:0},

    ],
    nuevaFruta:''
  },
  methods:{
    agregarFruta(){
     this.frutas.push({
       nombre:this.nuevaFruta, cantidad:0
     })
      
    }
  }
})