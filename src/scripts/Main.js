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
        this.renderEvents();
    }

    renderEvents() {
        let table = this.tools.element("Table");
        if(this.tools.localBase) {
            for(let i = 0; i < this.tools.localBase.length; i++) {
                let event = this.tools.localBase[i];
                let day = event.day;
                let time = event.time;
                let slot = this.tools.element(time).childNodes[day + 1];
                slot.innerHTML = event.visual;
            }
        }
    }

    newEventHandler(e) {
        let element = this.tools.element("CreateEvent");
        if(!element.classList.contains("visible")) {
            this.tools.element("CreateEvent").classList.add("visible");
        }
    }
}