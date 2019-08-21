let money = 65600,
    income = 'Фриланс',
    addExpenses = 'Кальян, Шашлык, Рыбалка',
    deposit = true,
    mission = 100000000,
    period = 7,
    lower = addExpenses.toLowerCase(),
    budgetDay = money/30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

console.log(lower.split(', '));

console.log('Результат: ', budgetDay, 'Остаток: ', money%30);



