const { createApp } = Vue

  createApp({
    data() {
      return {
        proprietà: "testo-sbarrato",
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
        }
    }
  }).mount('#app')