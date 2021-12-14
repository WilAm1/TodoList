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
    replace(obj) {
        if (!!this.container[obj.name]) {
            return false;
        }
        this.container[obj.name] = obj;
        return true;
    }
    add(obj) {
        if (!!this.container[obj.name]) {
            return false;
        }
        this.container[obj.name] = obj;
        this.length++;
        return true;
    }
    remove(key) {
        if (!this.container[key]) {
            return null;
        }
        delete this.container[key];
        return --this.length;
    }
    getAll() {
        return this.container;
    }

}