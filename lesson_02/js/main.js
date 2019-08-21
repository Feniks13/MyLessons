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

let num = '266219',
    multip;
    num = num.split('');
    multip = num[0];
    
for (let i=1; i<num.length; i++){
  multip *= num[i];
}

console.log(multip);

multip = multip**3;
console.log(multip);






