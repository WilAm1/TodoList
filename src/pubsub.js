export default class {
    subscribers = {};

    static subscribe(topic, cb) {
        if (!Array.isArray(subscribers[topic])) {
            subscribers[topic] = [];
        }
        subscribers[topic].push(cb);
        const index = subscribers[topic].length - 1;
        return {
            unsubscribe() {
                subscribers[topic].splice(index, 1);
            }
        }
    }
    static publish(topic, data) {
        if (!Array.isArray(subscribers[topic])) {
            return
        }
        subscribers[topic].forEach(callback => {
            callback(data)
        });
    }
}