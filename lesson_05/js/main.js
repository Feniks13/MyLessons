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
    cost2 = +prompt('Во сколько это обойдется?', 18000);
    

let showTypeof = function(item) {   /* Функция типа данных */
  console.log(item, typeof item);
};
showTypeof (money);
showTypeof (income);
showTypeof (deposit);
    
let expensesMonth = function() {
  let sum = 0;

  for(let i = 0; i < 2; i++) {
    sum += +prompt('Во сколько это обойдется?', 7000);
  }

  return sum;

};

let expensesAmount = expensesMonth();

let accumulatedMonth = function() {
  return money - (expensesMonth());            /* Функция возвращает сумму всех расходов за месяц */
};

let budgetPeriod = function() {
  return money * period;
};

let expensesPeroid = function() {
  return expensesMonth() * period;
};

let incomePeriod = function() {
  return budgetPeriod() - expensesPeroid();
};

let budgetDay = function() {
  return Math.floor(accumulatedMonth() / 30); /* Округляем в меньшую сторону. Вычисляем бюджет на день */
};

let targetMonth = function() {
  return Math.ceil(mission / accumulatedMonth());
};

console.log('Накопления за период: ', incomePeriod());
console.log('Цель будет достигнута за ' + targetMonth() + ' месяцев');

let getStatusIncome = function() {    /* Функция уровня дохода */
  if (budgetDay() > 800) {
    return('Высокий уровень дохода');  
  } else if (800 >= budgetDay() && budgetDay() >= 300) {
    return('Средний уровень дохода');
  } else if (300 > budgetDay() && budgetDay() >= 0) {
    return('Низкий уровень дохода');
  } else {
    return('Что то пошло не так');
  }
};

console.log(getStatusIncome());
