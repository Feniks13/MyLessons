'use strict';
let money = +prompt('Ваш месячный доход?', 40000),  /* Спрашиваем “Ваш месячный доход?”*/
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    period = 7,
    deposit = confirm('Есть ли у вас депозит в банке?'), /* Спрашиваем “Есть ли ...” и сохранить (булевое true/false) */
    mission = 100000;

let expenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Квартплата Сади Еда"),
    cost = +prompt('Во сколько это обойдется?', 7000),
    expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Ипотека Кредит"),
    cost2 = +prompt('Во сколько это обойдется?', 18000),
    budgetDay = Math.floor(getAccumulatedMonth() / 30); /* Округляем в меньшую сторону. Вычисляем бюджет на день */

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

function getExpensesMonth() {    /* Функция возвращает сумму всех расходов за месяц */
  return cost + cost2;
}

function getAccumulatedMonth() {    /* Функция возвращает Накопления за месяц */
  let accumulatedMonth = money - getExpensesMonth();
  return accumulatedMonth;
}

function getTargetMonth() {   /* Функция подсчитывает за какой период будет достигнута цель */
  return Math.floor(mission / getAccumulatedMonth());
}

function getSavings() {   /* Накопления за период */
  return period * getAccumulatedMonth();
}


console.log('getStatusIncome(): ', getStatusIncome());
console.log('Сумма всех расходов за месяц: ', getExpensesMonth());
console.log('Накопления за месяц: ', getAccumulatedMonth());
console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');
console.log('Накопления за период: ', getSavings());

