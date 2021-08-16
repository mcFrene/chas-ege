//47. Задание 4 № 320198
//Вероятность того, что на тестировании по биологии учащийся О.
//верно решит больше 11 задач, равна 0,67. Вероятность того, что О.
//верно решит больше 10 задач, равна 0,74. Найдите вероятность
//того, что О. верно решит ровно 11 задач.

(function(){'use strict';
NAinfo.requireApiVersion(0, 0);
var max = sluchch(6,12);
var min = max-1;
var ver1;
var ver2;
var answers;
do{
	ver1 = (sluchch(54,79))/100;
	ver2 = (sluchch(64,89))/100;
	answers = ver2-ver1;
} while (answers < 0);

var name = ['Д','К','Л','М','С','Т','Н','В','А','Ж','Б','О','П','Г'].iz();
var men = ['школьник','ученик','учащийся','студент','абитуриент'].iz();
var exam;
if (men == 'школьник' || men == 'ученик' || men == 'учащийся'){
	exam = ['экзамене', 'проверочной работе', 'контрольной работе','тестировании','тесте'].iz();
} else if (men == 'студент'){
	exam = ['экзамене', 'коллоквиуме', 'зачете','проверочной работе','тестировании','тесте'].iz();
} else if (men == 'абитуриент') {
	exam =['экзамене','вступительном испытании','тестировании','тесте'].iz();
}

var predm = ['истории','биологии','физике','математике','химии','географии'].iz();

NAtask.setTask({
	text: 'Вероятность того, что на '+exam+' по '+predm+' '+men+' '+name+'. '+
		'верно решит больше '+max+' задач, равна '+ver1+'. Вероятность того, что '+name+'. '+
		'верно решит больше '+min+' задач, равна '+ver2+'. Найдите вероятность '+
		'того, что '+name+'. верно решит ровно '+max+' задач.',
	answers,
});
})();
