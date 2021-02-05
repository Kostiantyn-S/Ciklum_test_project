export default class Tools extends Object {
    constructor() {
        super();
        this.localBase = JSON.parse(localStorage.getItem('Events'));
        this.init();
    }

    init() {
        let base = this.localBase;

        if(!base)base = [];
    }

    element(id) {
        return document.getElementById(id);
    }

    saveBase() {
        const base = this.localBase;

        localStorage.setItem('Events', JSON.stringify(base));
    }

    getBase() {
        let base = this.localBase;

        base = JSON.parse(localStorage.getItem('Events'));
    }

    renderEvents() {
        const base = this.localBase;

        for(let i = 0; i < base.length; i++) {
            let event = base[i];
            let slot = this.element(event.time).children[event.dayIndex];

            slot.innerHTML = event.visual;
            let delButton = this.element(event.day + "_" + event.time);
            slot.classList.add("Evented");
            delButton.addEventListener("click", this.delButtonHandler.bind(this, event));
        }

    }

    delButtonHandler(ourEvent, event) {
        this.element("DelTooltip").classList.add("visible");
        this.element("DelTooltipNo").addEventListener("click", this.deltooltipNoHandler.bind(this));
        this.element("DelTooltipYes").addEventListener("click", this.deltooltipYesHandler.bind(this, ourEvent))
    }

    deltooltipYesHandler(ourEvent, event) {
        let base = this.localBase;

        for(let i = 0; i < base.length; i++) {
            if(base[i].name == ourEvent.name) {
                base.splice(i, 1); 
            }
        }
        this.saveBase(base);
        this.clearTable();
        this.renderEvents();
        this.deltooltipNoHandler.call(this);
    }

    deltooltipNoHandler(event) {
        this.element("DelTooltip").classList.remove("visible");
    }

    clearTable() {
        const length = this.element("Table").children[0].children.length;

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

    filterEvents(needed) {
        const base = this.localBase;

        this.clearTable();
        this.getBase();

        for(let i = 0; i < base.length; i++) {
            let event = base[i];

            if(this.findCommonValues(event.users, needed)) {
                let slot = this.element(event.time).children[event.dayIndex];
                slot.innerHTML = event.visual;
                slot.classList.add("Evented");
                let delButton = this.element(event.day + "_" + event.time);
                delButton.addEventListener("click", this.delButtonHandler.bind(this, event));
            }
        }
    }

    findCommonValues(arr1, arr2) {
        for (let item of arr1) {
            if(arr2.includes(item)) return true;
        }
        return false;
    }
}