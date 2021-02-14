import CustomComboBox from "./CustomComboBox";
import NewEvent from "./NewEvent";
import Tools from "./Tools";

export default class Main extends Object {
    
    constructor() {
        super();
        this.tools = new Tools();
        this.newEvent = new NewEvent();
        this.filter = new CustomComboBox("FilterUsers", "Filter", ["Vasia", "Vania", "Petya"]);
        this.init();
    }

    init() {
        const tools = this.tools;
        
        tools.element("newEventButton").addEventListener("click", this.newEventHandler.bind(this));
        tools.element("FilterUsers").addEventListener("customChange" , this.onChangeFilter.bind(this));
        tools.renderEvents();
    }

    onChangeFilter(event) {
        const tools = this.tools;

        tools.getBase();
        tools.filterEvents(event.checkedUsers);
    }

    newEventHandler(event) {
        const tools = this.tools;
        const window = tools.element("CreateEvent");
        const filter = this.filter;

        filter.close();
        if(!window.classList.contains("visible")) window.classList.add("visible");
    }
}