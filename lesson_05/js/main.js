'use strict';
let money,  /* Спрашиваем “Ваш месячный доход?”*/
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'), 
    period = 7,
    deposit = confirm('Есть ли у вас депозит в банке?'), /* Спрашиваем “Есть ли ...” и сохранить (булевое true/false) */
    mission = 100000;

let start = function() {
  /* money = prompt('Ваш месячный доход?');
  console.log(money); */
  
  /* while (isNaN(money) || money == '' || money == null) {
    money = prompt('Ваш месячный доход?');
    console.log(money);
  } */

  do {
    money = prompt('Ваш месячный доход?');
    console.log(money);    
  } while (isNaN(money) || money == '' || money == null);
};

start();


let expenses,    
    expenses2;
    

let showTypeof = function(item) {   /* Функция типа данных */
  console.log(item, typeof item);
};
showTypeof (money);
showTypeof (income);
showTypeof (deposit);
    
let expensesMonth = function() {
  let sum = 0;

  for(let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses  = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Квартплата Сади Еда");
    } else {
      expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', "Ипотека Кредит");
    }
    sum += +prompt('Во сколько это обойдется?', 7000);
  }

  return sum;

};

let expensesAmount = expensesMonth();

let accumulatedMonth = function() {
  return money - (expensesAmount);            /* Функция возвращает сумму всех расходов за месяц */
};

let budgetPeriod = function() {
  return money * period;                      /* Накопления за период */
};

let expensesPeroid = function() {
  return expensesAmount * period;
};

let incomePeriod = function() {
  return budgetPeriod() - expensesPeroid();
};

let budgetDay = function() {
  let budge = Math.floor(accumulatedMonth() / 30); /* Округляем в меньшую сторону. Вычисляем бюджет на день */

  if (budge > 0) {
    return budge;    
  } else {
    return 'Что то пошло не так';
  }
};


let targetMonth = function() {
  return Math.ceil(mission / accumulatedMonth());
};

console.log('Накопления за период: ', incomePeriod());
console.log('Цель будет достигнута за ' + targetMonth() + ' месяцев');

let getStatusIncome = function() {    /* Функция уровня дохода */
  if (budgetDay() > 800) {
    return('Высокий уровень');  
  } else if (800 >= budgetDay() && budgetDay() >= 300) {
    return('Средний уровень');
  } else if (300 > budgetDay() && budgetDay() >= 0) {
    return('Низкий уровень');
  } else {
    return('Что то пошло не так');
  }
};

console.log('Ваш уровень дохода: ', getStatusIncome());
