const { createApp } = Vue

  createApp({
    data() {
      return {
        proprietà: "testo-sbarrato",
        inputNewTodo: "",
       
        todos: [
            {
                text: "Andare a comprare il succo",
                done: true,
            },
            {
                text: "Svuotare la lavastoviglie",
                done: false,
            },
            {
                text: "Andare in palestra",
                done: false,
            },
            {
                text: "Comprare regalo per David",
                done: true,
            },
            {
                text: "Accompagnare mia sorella alla stazione",
                done: false,
            },
        ]

      }
    },
    methods: {
        removeItem(i){
            this.todos.splice(i, 1)
        },
        addedItem(){
            // Creo un oggetto che sarà il mio todo
            const newTodo = {
                text: this.inputNewTodo,
                done: false,
            };
            this.todos.push(newTodo)
            //console.log(this.todos)
            //console.log(this.inputNewTodo)
            this.inputNewTodo = '';
            //console.log("secondo " + this.inputNewTodo.text)
        },
        switchDone(todo){
            if(todo.done === true){
                todo.done = false
            } else {
                todo.done = true
            }
        }
    }
  }).mount('#app')