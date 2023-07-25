"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contacts = void 0;
var contacts = /** @class */ (function () {
    function contacts() {
        this.people = [];
    }
    //métodos públicos
    contacts.prototype.printCalendar = function () {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var persona = _a[_i];
            console.log("Name: ".concat(persona.name, ", Age: ").concat(persona.age, ", Address: ").concat(persona.getAddress()));
        }
    };
    return contacts;
}());
exports.contacts = contacts;
