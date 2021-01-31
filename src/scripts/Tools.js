export default class Tools extends Object {
    constructor() {
        super();
        this.localBase = JSON.parse(JSON.stringify(localStorage.getItem('Events'))); //Array
    }

    element(id) {
        return document.getElementById(id);
    }

    saveBase(localBase) {
        localStorage.setItem('Events', localBase);
    }
}