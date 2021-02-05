export default class EventObject extends Object {
    constructor(name, users, day, time) {
        super();
        this.name = name;
        this.users = users;
        this.day = day;
        this.time = time;
        this.visual = `<div class="Evented-container">
                            <div class="Evented-text">${this.name}</div>
                            <div class="Evented-del" id="${this.day}_${this.time}">X</div>
                        </div>`;
        this.dayIndex = this.getDayIndex(this.day);
    }

    getDayIndex(day) {
        switch (day) {
            case "Monday": return 1;
            case "Tuesday": return 2;
            case "Wednesday": return 3;
            case "Thursday": return 4;
            case "Friday": return 5;
        }
    }
}