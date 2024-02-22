const {createApp} = Vue;

const endpoint = 'http://localhost/boolean/php-todo-list-json/database/tasks.json'

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
            this.tasks.push(
                {
                    id: this.tasks.length,
                    text: this.newTask,
                    done: false
                }
            );
            console.log(this.tasks);
            // pulisco l'input
            this.newTask = '';
        }
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data
        })
    }

});

app.mount('#root')