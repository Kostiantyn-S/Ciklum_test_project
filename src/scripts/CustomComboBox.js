import Tools from "./Tools";

export default class CustomComboBox extends Object {
    constructor(id, title, options) {
        super();
        this.id = id;
        this.title = title;
        this.options = options;
        this.tools = new Tools();
        this.value = [];
        this.element = document.getElementById(id);
        this.init();   
    }

    init() {
        const comboBox = this.element;
        const title = this.title;
        const options = this.options;
        
        comboBox.classList.add("CustomComboBox");
        comboBox.innerHTML = `<div><div class="CustomComboBox-title">${title}</div>
                                    <div class="CustomComboBox-triangle"></div></div>` + this.renderOptions(options);
        comboBox.children[0].addEventListener("click", this.comboBoxHandler.bind(this));
        this.addListeners();
    }

    comboBoxHandler(event) {
        const id = this.id;

        this.tools.element(`CustomComboBox_${id}`).classList.toggle("visible");
    }

    addListeners() {
        const id = this.id;
        const parent = this.tools.element(`CustomComboBox_${id}`);

        for(let i = 0; i < parent.children.length; i++) {
            parent.children[i].children[0].addEventListener("change", this.changeCheckboxHandler.bind(this, parent.children[i].children[1].innerHTML));
        }
    }

    changeCheckboxHandler(value, event) {
        const eventValue = value;
        const element = this.element;
        let comboBoxValue = this.value;
        let customEvent = new MouseEvent("customChange");

        if(event.currentTarget.checked == true) comboBoxValue.push(eventValue);
        else comboBoxValue.splice(comboBoxValue.indexOf(eventValue), 1);

        customEvent.checkedUsers = this.value;
        element.dispatchEvent(customEvent);
    }

    renderOptions(options) {
        const items = options;
        const id = this.id;
        let value = this.value;
        let list = ``;

        for(let i = 0; i < items.length; i++) {
            let item = `<div class="CustomComboBox-list-item">
                            <input type="checkbox" id="CustomComboBox_${id}_item_${i}" checked="true">
                            <label for="CustomComboBox_${id}_item_${i}">${items[i]}</label>
                        </div>`;
            list += item;
            value.push(items[i]);
        }

        return `<div class="CustomComboBox-list invisible" id="CustomComboBox_${id}">
                    ${list}
                </div>`;
    }
}