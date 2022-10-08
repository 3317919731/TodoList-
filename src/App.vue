<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"></Header>
        <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>
        <Footer :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></Footer>
      </div>
    </div>
  </div>

</template>
<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import List from "@/components/List";

export default {

  name: "App",
  data() {
    return {
      todos: [
        {id: '001', title: '吃饭', done: true},
        {id: '002', title: '睡觉', done: true},
        {id: '003', title: '开车', done: true},
      ]
    }
  },
  components: {Header, Footer, List},
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //勾选or取消一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
      })
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
    },
    //全选or全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done
      })
    },
    //清楚已经完成的
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  }


}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: green;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>