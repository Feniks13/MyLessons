'use strict';
let money = +prompt('Ваш месячный доход?'),  /* Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money*/
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), /* Спрашиваем у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses, вывести в консоль в виде массива  */
    deposit = confirm('Есть ли у вас депозит в банке?'),  /* Спрашиваем у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булевое значение true/false) */
    obligatory = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost = +prompt('Во сколько это обойдется?'),
    obligatory2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost2 = +prompt('Во сколько это обойдется?'),
    budgetMonth = money - cost,   /* Вычисляем бюджет на месяц */
    mission = 10000,
    month = Math.ceil(mission / budgetMonth),  /* Округляем в большую стороную Вычисляем количество месяцев */
    budgetDay = Math.floor(budgetMonth / 30); /* Округляем в меньшую сторону. Вычисляем бюджет на день */
  
if (budgetDay > 800) {
  console.log('Высокий уровень дохода');  
} else if (800 > budgetDay && budgetDay > 300) {
  console.log('Средний уровень дохода');
} else if (300 > budgetDay && budgetDay > 0) {
  console.log('Низкий уровень дохода');
} else {
  console.log('Что то пошло не так');
}

console.log(money);
console.log(addExpenses.split(','));
console.log(deposit);
console.log(obligatory);
console.log(cost);
console.log(obligatory2);
console.log(cost2);
console.log(budgetMonth);
console.log('Цель будет достигнута за ' + month + ' месяцев');
console.log('Ежедневный расход составит ' + budgetDay + ' денег');

