import Tools from "./Tools";

export default class NewEvent extends Object {
    constructor() {
        super();
        this.tools = new Tools();
        this.tools.element("CreateEventCancel").addEventListener("click" , this.cancelHandler.bind(this));
    }

    cancelHandler(e) {
        this.tools.element("CreateEvent").classList.remove("visible");
    }
}