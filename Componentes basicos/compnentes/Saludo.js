
 Vue.component('saludo',{
   template: /*html*/`
   <div>
     <h1>{{saludo}}</h1>
    </div>
   `,
   data (){
     return {
       saludo:'Hola desde vue'
     }
   }
   
 })