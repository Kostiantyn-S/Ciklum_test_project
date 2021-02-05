import Tools from "./Tools";
import EventObject from "./EventObject";
import CustomComboBox from "./CustomComboBox";

export default class NewEvent extends Object {
    constructor() {
        super();
        this.tools = new Tools();
        this.createCombo = new CustomComboBox("CreateUsers", "Choose", ["Vasia", "Vania", "Petya"]);
        this.init();
    }

    init() {
        const tools = this.tools;

        tools.element("CreateEventCancel").addEventListener("click", this.cancelHandler.bind(this));
        tools.element("CreateEventCreate").addEventListener("click", this.createHandler.bind(this));
    }

    cancelHandler(event) {
        const tools = this.tools;

        tools.element("CreateEvent").classList.remove("visible");
    }

    createHandler(event) {
        const tools = this.tools;
        const comboBox = this.createCombo;
        const users = comboBox.value;
        const name = tools.element("CreateEventName").value;
        const day = tools.element("CreateEventDay").value;
        const time = tools.element("CreateEventTime").value;
        const eventObj = new EventObject(name, users, day, time);

        if(this.validateEvent(eventObj)) {
            tools.localBase.push(eventObj);
            tools.saveBase();
            tools.element("CreateEvent").classList.remove("visible");
            tools.renderEvents();
        }
    }

    validateEvent(event) {
        const tools = this.tools;

        tools.getBase();

        if(event.name.length < 1) {
            this.showAlert("Enter event name please.");
            return false;
        }

        for(let i = 0; i < tools.localBase.length; i++) {
            let savedEvent = tools.localBase[i];
            if(event.day == savedEvent.day && event.time == savedEvent.time) {
                this.showAlert("Failed to create an event. Time slot is already booked.");
                return false;
            }
        }

        return true;
    }

    showAlert(body) {
        const tools = this.tools;
        let tooltip = tools.element("Alert");

        tooltip.innerHTML = body;
        tooltip.classList.add("visible");
        setTimeout(() => tooltip.classList.remove("visible"), 2500);
    }
}