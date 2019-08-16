const app = new Vue({
  el: '#app',
  data:{
    titulo:"Hola mundo con vue",
    frutas:[
      {nombre:'Pera', cantidad:10},
      {nombre:'Manzana', cantidad:1},
      {nombre:'Uva', cantidad:0},

    ],
    nuevaFruta:'',
    cantidad:0,
    total:0
  },
  methods:{
    agregarFruta(){
     this.frutas.push({
       nombre:this.nuevaFruta, cantidad: this.cantidad
     })
     this.nuevaFruta='',
     this.cantidad=0
      
    }
  },
  computed:{
    sumarFrutas(){
      this.total=0
      for(fruta of this.frutas){
        this.total=this.total+fruta.cantidad
      }
      return this.total
    }

  }
})