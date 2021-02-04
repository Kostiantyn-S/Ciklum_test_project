import CustomComboBox from "./CustomComboBox";
import NewEvent from "./NewEvent";
import Tools from "./Tools";

export default class Main extends Object {
    
    constructor() {
        super();
        this.tools = new Tools();
        this.newEvent = new NewEvent();
        this.init();
        this.filter = new CustomComboBox("FilterUsers", "Filter", ["Vasia", "Vania", "Petya"]/*, 481, 90*/);
    }

    init(){
        this.tools.element("newEventButton").addEventListener("click", this.newEventHandler.bind(this));
        this.tools.renderEvents();
       //this.tools.element("Filter").addEventListener("change" , this.onChangeFilter.bind(this));
    }

    onChangeFilter(e) {
        this.tools.filterEvents([e.target.value]);
    }

    newEventHandler(e) {
        let element = this.tools.element("CreateEvent");
        if(!element.classList.contains("visible")) {
            this.tools.element("CreateEvent").classList.add("visible");
        }
    }
}