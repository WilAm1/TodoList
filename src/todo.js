import pubsub from "./pubsub";

export default class {
    constructor({ title, description, priority, date }) {
        //date may be undefined
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

}