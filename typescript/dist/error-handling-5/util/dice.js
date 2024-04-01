var Dice = /** @class */ (function () {
    function Dice(sides) {
        this.sides = sides;
    }
    Dice.prototype.roll = function () {
        var number = Math.floor(Math.random() * this.sides) + 1;
        return number;
    };
    return Dice;
}());
export default Dice;
