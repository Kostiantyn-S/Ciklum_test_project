import Tools from "./Tools";
import EventObject from "./EventObject";

export default class NewEvent extends Object {
    constructor() {
        super();
        this.tools = new Tools();
        this.tools.element("CreateEventCancel").addEventListener("click", this.cancelHandler.bind(this));
        this.tools.element("CreateEventCreate").addEventListener("click", this.createHandler.bind(this));
    }

    cancelHandler(e) {
        this.tools.element("CreateEvent").classList.remove("visible");
    }

    createHandler(e) {
        let name = this.tools.element("CreateEventName").value;
        let users = [this.tools.element("CreateEventUsers").value];
        let day = this.tools.element("CreateEventDay").value;
        let time = this.tools.element("CreateEventTime").value;
        let event = new EventObject(name, users, day, time);
        if(this.validateEvent(event)) {
            this.tools.localBase.push(event);
            this.tools.saveBase();
            this.tools.element("CreateEvent").classList.remove("visible");
            this.tools.renderEvents();
        }
    }

    validateEvent(event) {
        if(event.name.length < 1) {
            this.showAlert("Enter event name please.");
            return false;
        }

        for(let i = 0; i < this.tools.localBase.length; i++) {
            let savedEvent = this.tools.localBase[i];
            if(event.day == savedEvent.day && event.time == savedEvent.time) {
                this.showAlert("Failed to create an event. Time slot is already booked.");
                return false;
            }
        }

        return true;
    }

    showAlert(body) {
        let tooltip = this.tools.element("Alert");
        tooltip.innerHTML = body;
        tooltip.classList.add("visible");
        setTimeout(() => tooltip.classList.remove("visible"), 2500);
    }
}