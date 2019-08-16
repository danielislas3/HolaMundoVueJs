// const app = new Vue({
//   el: '#app',
//   data:{
//     titulo:"Hola mundo con vue",
//     frutas:[
//       {nombre:'Pera', cantidad:10},
//       {nombre:'Manzana', cantidad:1},
//       {nombre:'Uva', cantidad:0},

//     ],
//     nuevaFruta:'',
//     cantidad:0,
//     total:0
//   },
//   methods:{
//     agregarFruta(){
//      this.frutas.push({
//        nombre:this.nuevaFruta, cantidad: this.cantidad
//      })
//      this.nuevaFruta='',
//      this.cantidad=0
      
//     }
//   },
//   computed:{
//     sumarFrutas(){
//       this.total=0
//       for(fruta of this.frutas){
//         this.total=this.total+fruta.cantidad
//       }
//       return this.total
//     }

//   }
// })

/**************CRUD CON LOCAL STORAGE */
// const app = new Vue({
//   el:'#app',
//   data:{
//     titulo:'Titulo de Vue',
//     tareas:[],
//     nuevaTarea:'',
//   },
//   methods:{
//     agregarTarea(){
//       this.tareas.push({
//         nombre:this.nuevaTarea,
//         estado:false
//       })
//       this.nuevaTarea=''
//       this.guardarLocal()
//     },
//     cambiarEstado(index){
//       this.tareas[index].estado=true
//       this.guardarLocal()
//     },
//     eliminarTarea(index){
//       this.tareas.splice(index,1 )
//      this.guardarLocal()
//     },
//     guardarLocal(){
//       localStorage.setItem('datosLocal',JSON.stringify(this.tareas))
//     }
//   },
//   created: function(){
//     const datosDB = JSON.parse(localStorage.getItem('datosLocal'))
     
//     datosDB===null?this.tareas=[]:this.tareas=datosDB
//   }
// })

/************UNIDADES COMPUTADAS*************** */

const app = new Vue({
  el:'#app',
  data:{
    mensaje:"mensaje desde vue",
    contador:0
  },

  computed:{
    invertido(){
     return this.mensaje.split('').reverse().join('')
    },
    color(){
      return  {
        
        'bg-success':this.contador<=10,
        'bg-warning':this.contador>10 && this.contador<20,
        'bg-danger':this.contador>=20,
      }
    },
    botonMenos(){
      if(this.contador===0){
        return true
      }else return false
    },
    botonMas(){
      if(this.contador===100){
        return true
      }else return false
    }

  }
})