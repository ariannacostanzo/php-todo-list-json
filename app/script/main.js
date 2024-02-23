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
            this.fetchData(endpoint, data);
            this.newTaskText = '';
        },
        toggleTaskDone(id) {
            const data = {id};
            this.fetchData(`${endpoint}toggle/`, data);
        },
        deleteTask(id) {
            const data = { id };
            this.fetchData(`${endpoint}delete/`, data);
        },
        fetchData(url, content) {
            const config = { headers: { 'Content-Type': 'multipart/form-data' } }
            axios.post(url, content, config).then(res => {
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

