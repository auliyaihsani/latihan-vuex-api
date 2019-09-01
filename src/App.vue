<template>
  <div id="app">
    <div class="container">
      <Addtodo />
      <filter-todos/>
      <Todos /> 
    </div>
  </div> 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Todos from "./components/Todos.vue";
import Addtodo from "./components/Addtodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "app",
  components: {
    Todos,
    Addtodo,
    FilterTodos 
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}


.container {
 max-width: 1100;
 margin: auto;
 overflow: auto;
 padding: 0 2 rem;
}
</style>
