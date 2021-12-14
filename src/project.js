export default class {
    constructor(name) {
        this.name = name;
        this.container = {};
        this.length = 0;
        //pubsub
    }
    get(key) {
        return this.container[key];
    }
    add(obj) {
        if (!!this.container[obj.name]) {
            return false;
        }
        this.container[obj.name] = obj;
        this.length++;
        return true;
    }
    remove(obj) {
        if (!this.container[obj.name]) {
            return null;
        }
        delete this.container[obj.name];
        return --this.length;
    }
    getAll() {
        return this.container;
    }

}