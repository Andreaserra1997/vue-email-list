const app = Vue.createApp ({
    data() {
        return {
            randomEmail: [],
        }
    },
    methods: {
        getRandomMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(serverMail => this.randomEmail.push(serverMail.data.response));
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
});

app.mount('#app');