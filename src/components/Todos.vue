<template>
  <div>
  <h3>haii Todos ini vue js</h3>
  <h2>procesing: {{ getProsesTodo }} </h2>
    <sani-load :active.sync="getProsesTodo"       
        :is-full-page="true"></sani-load>
  <div class="legend">
    <span>double click to mark as complite</span>
    <span>
      <span class="incomplite-box"></span> = in Complite
    </span>
    <span>
      <span class="complite-box"></span> = Complite
    </span>
  </div>


  <div class="todos">
    <div @dblclick="onDblClick(todo)" v-for="todo in allTodos" 
    :key="todo.id" class="todo" v-bind:class="{'is-complete': todo.completed }">{{ todo.title }}
       <i @click="deleteTodo(todo.id)"  class="fa fa-trash" ></i>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
 
    name: "Todos",
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
      onDblClick(todo){
        const updTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }

        this.updateTodo(updTodo);
      }
    },
    computed: mapGetters(['allTodos','getProsesTodo']), 
    created() {
      this.fetchTodos();
    }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complite-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e; 

}


.incomplite-box{
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;

}

 .is-complete {
   background: #35495e;
   color: #fff;
 }

@media (max-width: 500px){
  .todos {
    grid-template-columns: 1fr;
  } 
}

</style>>


 


