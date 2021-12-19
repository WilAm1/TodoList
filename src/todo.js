import pubsub from "./pubsub";

export default class {
    constructor({ title, description, priority, date }) {
        console.log(description, date)
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

}