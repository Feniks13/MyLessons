let lang = 'ru',
    lang2 = [['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], ['Monday', 'Tuesday', 'Wednes­day', 'Thursday', 'Friday', 'Saturday', 'Sunday']],
    namePerson,
    ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en = ['Monday', 'Tuesday', 'Wednes­day', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    /* Переменную lang выводим через if */
if (lang === 'ru') {
  console.log(ru);
} else if (lang === 'en') {
  console.log(en); 
} else {
  console.log('Язык не выбран');  
}

/* Переменную lang выводим через switch */
switch (lang) {
  case 'ru':
    console.log(ru);
    break;
  case 'en':
    console.log(en);
    break;
  default:
    console.log('Язык не выбран');
    break;    
}

/* Переменную lang выводим через многомерный массив без ифов и switch */
alert(lang2[0][4]);

  /* Решение с помощью нескольких тернарных операторов, без использования if или switch */
namePerson === 'Артём' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
