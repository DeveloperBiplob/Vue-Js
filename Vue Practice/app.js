new Vue({
    el: '#app',
    data : {
        title: 'Hello World!',
        isItTrue: true,
        cars: ['Ford', 'Toyota'],
        robot: {
            name: 'Franky'
        },
        gretting: ()=> {
            return "Hello World! Function"
        }
    }
});