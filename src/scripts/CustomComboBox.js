import Tools from "./Tools";

export default class CustomComboBox extends Object {
    constructor(id, title, options/*Array*//*, listX, listY*/) {
        super();
        this.tools = new Tools();
        this.options = options;/* this.listX = listX; this.listY = listY;*/ this.id = id;
        this.element = document.getElementById(id);
        this.element.classList.add("CustomComboBox");
        this.element.innerHTML = `<div><div class="CustomComboBox-title">${title}</div>
                                    <div class="CustomComboBox-triangle"></div></div>`;
        this.element.innerHTML += this.renderOptions(this.options, this.listX, this.listY);
        this.element.children[0].addEventListener("click", this.comboBoxHandler.bind(this));
        this.value = [];
        this.addListeners();
    }

    comboBoxHandler(e) {
        this.tools.element(`CustomComboBox_${this.id}`).classList.toggle("visible");
    }

    addListeners() {
        let parent = this.tools.element(`CustomComboBox_${this.id}`);
        for(let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[0].addEventListener("change", this.changeCheckboxHandler.bind(this, parent.children[i].children[1].innerHTML));
        }
    }

    changeCheckboxHandler(value, e) {
        if(e.currentTarget.checked == true) {
            this.value.push(value);
        } else {
            this.value.splice(this.value.indexOf(value), 1);
        }
        console.log(this.value);
    }

    renderOptions(options/*Array*/, listX, listY) {
        let list = ``;

        for(let i = 0; i < options.length; i++) {
            let option = `<div class="CustomComboBox-list-item">
                            <input type="checkbox" id="CustomComboBox_${this.id}_item_${i}" checked="true">
                            <label for="CustomComboBox_${this.id}_item_${i}">${options[i]}</label>
                        </div>`;
            list += option;
        }

        return `<div class="CustomComboBox-list invisible" id="CustomComboBox_${this.id}">
                    ${list}
                </div>`;
    }
}