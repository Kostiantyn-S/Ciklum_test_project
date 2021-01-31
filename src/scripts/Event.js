class Event extends Object {
    constructor(name_, users_, day_, time_) {
        super();
        this.name = name_;
        this.users = users_;
        this.day = day_;
        this.time = time_;
        this.visual = "<div class='Event'>" + this.name + "</div>";
    }
}