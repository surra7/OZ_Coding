import Dice from "./util/dice";
var labels = {
    button: "주사위 굴리기!",
    div: " 결과: ",
};
function main() {
    var button = document.createElement('button');
    var resultDiv = document.createElement('div');
    button.innerText = labels.button;
    document.body.append(button, resultDiv);
    var dice = new Dice(6);
    button.addEventListener('click', function () {
        resultDiv.innerText = "".concat(labels.div).concat(dice.roll());
    });
}
main();
