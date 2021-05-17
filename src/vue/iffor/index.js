const ConditionalRendering = {
    data() {
        return {
            seen: false
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')