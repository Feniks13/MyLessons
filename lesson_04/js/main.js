'use strict';
let money = +prompt('Ваш месячный доход?', 40000),  /* Спрашиваем “Ваш месячный доход?”*/
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    period = 7,
    deposit = confirm('Есть ли у вас депозит в банке?'), /* Спрашиваем “Есть ли ...” и сохранить (булевое true/false) */
    obligatory = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Квартплата Сади Еда"),
    cost = +prompt('Во сколько это обойдется?', 7000),
    obligatory2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Ипотека Кредит"),
    cost2 = +prompt('Во сколько это обойдется?', 18000),
    budgetMonth = money - cost - cost2,   /* Вычисляем бюджет на месяц */
    mission = 100000,
    month = Math.ceil(mission / budgetMonth),  /* Округляем в большую стороную Вычисляем количество месяцев */
    budgetDay = Math.floor(budgetMonth / 30); /* Округляем в меньшую сторону. Вычисляем бюджет на день */

let showTypeof = function(item) {   /* Функция типа данных */
  console.log(item, typeof item);
};
showTypeof (money);
showTypeof (income);
showTypeof (deposit);

function getStatusIncome() {    /* Функция уровня дохода */
  if (budgetDay > 800) {
    return('Высокий уровень дохода');  
  } else if (800 >= budgetDay && budgetDay >= 300) {
    return('Средний уровень дохода');
  } else if (300 > budgetDay && budgetDay >= 0) {
    return('Низкий уровень дохода');
  } else {
    return('Что то пошло не так');
  }
}
console.log('Уровень дохода: ', getStatusIncome());



//console.log(typeof(money));
//console.log(typeof(income));
//console.log(typeof(deposit));
console.log(obligatory);
console.log(cost);
console.log(obligatory2);
console.log(cost2);
console.log('Цель будет достигнута за ' + month + ' месяцев');
console.log('Ежедневный расход составит ' + budgetDay + ' денег');

