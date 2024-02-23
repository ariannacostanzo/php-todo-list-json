const { createApp } = Vue;

const endpoint = 'http://localhost/boolean/php-todo-list-json/API/'

const app = createApp({
    name: 'App',
    data() {
        return {
            tasks: [],
            newTaskText: '',
            isHovering: false
        }
    },
    methods: {
        createNewTask() {
            const data = { 'task-text': this.newTaskText };
            //la parte di creare dell'oggetto deve essere fatta da backend quindi si lascia solo task: text:this.newTask
            const config = { headers: { 'Content-Type': 'multipart/form-data' } }
            axios.post(endpoint, data, config).then(res => {
                this.tasks = res.data;
            })
            this.newTaskText = '';
        },
        toggleTaskDone(id) {
            const data = {id};
            const config = {headers: {'Content-Type' : 'multipart/form-data'}}
            axios.post(`${endpoint}toggle/`, data, config).then(res => {
                this.tasks = res.data
            })
        },
        deleteTask(id) {
            const data = { id };
            const config = { headers: { 'Content-Type': 'multipart/form-data' } }
            axios.post(`${endpoint}delete/`, data, config).then(res => {
                this.tasks = res.data
            })
        },
        startAnimation() {
            this.isHovering = true;
        },
        stopAnimation() {
            this.isHovering = false;
        },
    },
    created() {
        axios.get(endpoint).then(res => {
            this.tasks = res.data
        })
    }

});

app.mount('#root')

