export default class {
    name = this.name;
    constructor(name) {
        this.name = name;
        this.container = {};
        this.length = 0;

    }
    get(key) {
        return this.container[key];
    }
    replace(obj) {
        if (!!this.container[obj.title]) {
            return false;
        }
        this.container[obj.title] = obj;
        return true;
    }
    add(obj) {
        if (!!this.container[obj.title]) {
            return false;
        }
        this.container[obj.title] = obj;
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