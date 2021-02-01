export default class EventObject extends Object {
    constructor(name_, users_, day_, time_) {
        super();
        this.name = name_;
        this.users = users_;
        this.day = day_;
        this.time = time_;
        this.visual = "<div class='EventObject'>" + this.name + "</div>";
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