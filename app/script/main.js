const { createApp } = Vue;

const endpoint = 'http://localhost/boolean/php-todo-list-json/API/'

const app = createApp({
    name: 'App',
    data() {
        return {
            tasks: [],
            newTask: ''
        }
    },
    methods: {
        createNewTask() {
            const data = {
                task: {
                        id: this.tasks.length +2,
                        text: this.newTask,
                        done: false
                    }
            };

            const config = {headers: {'Content-Type' : 'multipart/form-data'}}
            axios.post(endpoint, data, config).then(res => {
                this.tasks = res.data;
            })
            this.newTask = '';
        },
        toggleTaskDone(task) {
            //come faccio a salvare sul file json?
            task.done = !task.done;
            console.log(task.done)
        },
        deleteTask(task) {
            //non funziona, e non elimina dal file json
            this.tasks = this.tasks.filter((currentTask) => currentTask.id !== task.id);
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data
        })
    }

});

app.mount('#root')