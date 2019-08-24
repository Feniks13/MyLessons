'use strict';
let v1 = "   First string  ",
    v2 = 2,
    v3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis repellat dignissimos nisi officia sapiente necessitatibus alias voluptate assumenda incidunt quasi, esse sequi architecto blanditiis porro saepe! Maiores numquam nesciunt architecto mollitia accusamus totam sint! Laudantium nemo asperiores itaque pariatur?",
    v4 = 5.4,
    v5 = String("Third string"),
    v6 = null;

function text (val) {
  let textStr = typeof val;                            /* Опредиляем тип */
  if ( textStr === 'string') {                         /* Если тип Строка */
    val = val.replace(/^\s*/,'').replace(/\s*$/,'');   /* Удаляем пробелы в начале и конце строки */
    return (val);
  } else {
    return ('Это не строка');                           /* Если тип не строка */
  }
  
}

console.log(">" + text(v1) + "<");

