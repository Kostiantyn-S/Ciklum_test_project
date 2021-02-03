export default class CustomComboBox extends Object {
    constructor(id, title, options_/*Array*/) {
        super();
        this.options = options_;
        this.element = document.getElementById(id);
        this.element.classList.add("CustomComboBox");
        this.element.innerHTML = `<div class="UpperBlock">
                                    <div class="UpperBlock-title">${title}</div>
                                    <div class="UpperBlock-triangle"></div>
                                  </div>`;
    }
}