import NewEvent from "./NewEvent";
import Tools from "./Tools";

export default class Main extends Object {
    
    constructor() {
        super();
        this.tools = new Tools();
        this.newEvent = new NewEvent();
        this.init();
    }

    init(){
        this.tools.element("newEventButton").addEventListener("click", this.newEventHandler.bind(this));
        this.tools.renderEvents();
    }

    newEventHandler(e) {
        let element = this.tools.element("CreateEvent");
        if(!element.classList.contains("visible")) {
            this.tools.element("CreateEvent").classList.add("visible");
        }
    }
}