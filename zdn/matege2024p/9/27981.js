(function() { 'use strict'; retryWhileError(function() {
    let f0 = sl(100, 1500, 1);
    let v = sl(1, 100, 1)
    let ans = f0 * (1500 + v) / (1500 - v);
    genAssertZ1000(ans);

    let decorFreq = ['наибольшую возможную частоту', 'частоту']
    let decorEq = ['не должна превышать', 'равна']
    let randInd = sl(0, 1, 1);
	NAtask.setTask({
		text: `Локатор батискафа, равномерно погружающегося вертикально вниз, испускает ультразвуковые импульсы частотой ${f0} МГц. Скорость погружения 
        батискафа вычисляется по формуле $v = c \\frac{f - f_0}{f + f_0}$, где $c$ = 1500 м/c - скорость звука в воде, $f_0$ - частота испускаемых импульсов,
        $f$ — частота отражённого от дна сигнала, регистрируемая приёмником (в МГц). Определите ${decorFreq[randInd]} отражённого сигнала в МГц, если скорость погружения 
        батискафа ${decorEq[randInd]} ${v} м/с.`,
		answers: ans,
		authors: ['mcFrene'],
	});
	NAtask.modifiers.allDecimalsToStandard(/*true*/);
}, 2000);})();
//mcFrene
/*РешуЕГЭ: 27981: 42419, 42439, 501981, 629171, 658794, 28321, 28323, 28325, 
28327, 28329, 42383, 42385, 42387, 42389, 42391, 42393, 42395, 42397, 42399, 
42401, 42403, 42405, 42407, 42409, 42411, 42413, 42415, 42417, 42421, 42423, 
42425, 42427, 42429, 42431, 42433, 42435, 42437
*/
