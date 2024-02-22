const {createApp} = Vue;

const endpoint = 'http://localhost/boolean/php-todo-list-json/database/tasks.json'

const app = createApp({
    name: 'App',
    data() {
        return {
            tasks: [
                {
                  "id": 1,
                  "text": "HTML",
                  "done": false
                },
                {
                  "id": 2,
                  "text": "CSS",
                  "done": false
                },
                {
                  "id": 3,
                  "text": "Responsive design",
                  "done": false
                },
                {
                  "id": 4,
                  "text": "Javascript",
                  "done": false
                }
              ]
        }
    },
    // created() {
    //     axios.get(endpoint).then(res => {
    //         console.log(res.data)
    //     })
    // }

});

app.mount('#root')