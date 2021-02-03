export default class Tools extends Object {
    constructor() {
        super();
        this.getBase();
        if(this.localBase == null)this.localBase = [];
    }

    element(id) {
        return document.getElementById(id);
    }

    saveBase(localBase) {
        localStorage.setItem('Events', JSON.stringify(this.localBase));
    }

    getBase() {
        this.localBase = JSON.parse(localStorage.getItem('Events'));
    }

    renderEvents() {
        for(let i = 0; i < this.localBase.length; i++) {
            let event = this.localBase[i];
            let slot = this.element(event.time).children[event.dayIndex];
            slot.innerHTML = event.visual;
            slot.classList.add("Evented");
            let delButton = this.element(event.day + "_" + event.time);
            delButton.addEventListener("click", this.delButtonHandler.bind(this, event));
        }

    }

    delButtonHandler(event, e) {
        this.element("DelTooltip").classList.add("visible");
        this.element("DelTooltipNo").addEventListener("click", this.deltooltipNoHandler.bind(this));
        this.element("DelTooltipYes").addEventListener("click", this.deltooltipYesHandler.bind(this, event))
    }

    deltooltipYesHandler(event, e) {
        for(let i = 0; i < this.localBase.length; i++) {
            if(this.localBase[i].name == event.name) {
                this.localBase.splice(i, 1); 
            }
        }
        this.saveBase(this.localBase);
        this.clearTable();
        this.renderEvents();
        this.deltooltipNoHandler.call(this);
    }

    deltooltipNoHandler(e) {
        this.element("DelTooltip").classList.remove("visible");
    }

    clearTable() {
        let length = this.element("Table").children[0].children.length;
        for(let i = 1; i < length; i++) {
            let element = this.element("Table").children[0].children[i];
            element.children[1].innerHTML = "";
            element.children[1].classList.remove("Evented");
            element.children[2].innerHTML = "";
            element.children[2].classList.remove("Evented");
            element.children[3].innerHTML = "";
            element.children[3].classList.remove("Evented");
            element.children[4].innerHTML = "";
            element.children[4].classList.remove("Evented");
            element.children[5].innerHTML = "";
            element.children[5].classList.remove("Evented");
        }
    }

    filterEvents(needed/*Array*/) {
        this.clearTable();
        for(let i = 0; i < this.localBase.length; i++) {
            let event = this.localBase[i];
            if(needed.includes(event.users[0])) {
                let slot = this.element(event.time).children[event.dayIndex];
                slot.innerHTML = event.visual;
                slot.classList.add("Evented");
            }
        }
    }
}