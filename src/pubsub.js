export default class {
    static subscribers = {};
    constructor() {

    }
    static subscribe(topic, cb) {
        if (!Array.isArray(this.subscribers[topic])) {
            this.subscribers[topic] = [];
        }
        this.subscribers[topic].push(cb);
        const index = this.subscribers[topic].length - 1;
        return {
            unsubscribe() {
                this.subscribers[topic].splice(index, 1);
            }
        }
    }
    static publish(topic, data) {
        if (!Array.isArray(this.subscribers[topic])) {
            return
        }
        this.subscribers[topic].forEach(callback => {
            callback(data)
        });
    }
}