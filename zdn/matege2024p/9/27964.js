(function() { 'use strict'; retryWhileError(function() {
    let t1 = sl(-100, -10);
    let t2 = sl(1, -t1-1);
    let c = sl(1, 10, 0.5);
    let S = -t1*t2*c;
    let v0 = -(t1+t2)*c;
    let a = 2*c;

    let the_vehicleRacingOnRoad = sklonlxkand(decor.vehicleRacingOnRoad.iz());
    let the_humanSettlementDestination = sklonlxkand(decor.humanSettlementDestination.iz());
    let the_orderToFind = decor.orderToFind.iz(); 
    let decorPreFormula = [
        `(в км) от ${the_vehicleRacingOnRoad.re} до города вычисляется по формуле`,
        `от ${the_vehicleRacingOnRoad.re} до города, измеряемое в километрах, определяется выражением`
    ].iz();
    let decorPostFormula = [
        `, прошедшее после выезда из города`,
        ``
    ].iz();
    let decorQuestion = [
        `время, прошедшее после выезда ${the_vehicleRacingOnRoad.re} из города, если известно, что за это время он удалился от города на ${S} км`,
        `наибольшее время, в течение которого ${the_vehicleRacingOnRoad.ie} будет находиться в зоне функционирования сотовой связи, 
        если оператор гарантирует покрытие на расстоянии не далее чем в ${S} км от города`
    ].iz();

	NAtask.setTask({
		text: `${the_vehicleRacingOnRoad.ie.toZagl()}, движущийся по ${the_humanSettlementDestination.de} со скоростью $v_0 = ${v0} \\ \\mbox{км}/\\mbox{ч}$, выезжает из него и сразу 
        после выезда начинает разгоняться с постоянным ускорением $a = ${a} \\ \\mbox{км}/\\mbox{ч}^2$. Расстояние ${decorPreFormula} 
        $S = v_0 t + \\frac{a t^2}{2} $, где $t$ – время в часах${decorPostFormula}. ${the_orderToFind.toZagl()} ${decorQuestion}. Ответ дайте в минутах.`,
		answers: t2*60,
		authors: ['mcFrene'],
	});
	NAtask.modifiers.allDecimalsToStandard(/*true*/);
}, 2000);})();
//mcFrene
/*РешуЕГЭ: 27964: 28135, 41565, 41569, 621769, 621899, 660974, 28137, 28139, 28141,
28143, 28145, 41527, 41529, 41531, 41533, 41535, 41537, 41539, 41541, 41543, 41545,
41547, 41549, 41551, 41553, 41555, 41557, 41559, 41561, 41563, 41567
*/
