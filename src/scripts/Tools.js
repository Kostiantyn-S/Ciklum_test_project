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
        let table = this.element("Table");
        for(let i = 0; i < this.localBase.length; i++) {
            let event = this.localBase[i];
            let day = event.day;
            let time = event.time;
            let slot = this.element(time).children[event.dayIndex];
            slot.innerHTML = event.visual;
        }

    }
}