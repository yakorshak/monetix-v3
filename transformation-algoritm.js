'use strcit'

// Кодируйте любые логические значения следующим образом: замените false на 0, замените true на 1.
// Пустые массивы полностью игнорируются и не включаются в набор строк, используемый для генерации подписи.
// Отсортируйте строки в алфавитном порядке и соедините их в одну строку, используя точку с запятой (;) в качестве разделителя.

const json = {
        "general": {
            "project_id": 3254,
            "payment_id": "id_38202316",
            "trst": {
                'yes': 1,
                'no': 2,
            },
           "signature": "<digital signature to generate>" 
        },
        "customer": {
            "some_parameter": [
                {
                    "element_one": {
                        "x": true,
                        "y": false,
                    },
                },
                {
                    "element_two": [],
                }
            ],
            "id": "585741",
            "email": "johndoe@mycompany.com",
            "first_name": "John",
        }
    }

function getPrevious(obj){

}

function recursion(currentStatement, transformedString, previousString, arrayOfTransformedStrings) {

        if(Object.prototype.toString.call(currentStatement) === '[object Object]'){ //проверить
            
            for (let key in currentStatement){
                transformedString += key + ':';
                recursion(currentStatement[key], transformedString, previousString, arrayOfTransformedStrings);
                transformedString;  //придумать как получить ссылку на обьект который сейчас в current statemant
            }

        } else if (Object.prototype.toString.call(currentStatement) === '[object Array]'){ // тут ошибка
            //добавлять порядковые номера к элементам массива
            for(let i = 0; i <= currentStatement.lenth; i++){
                transformedString += i + ':';
                recursion(currentStatement[i], transformedString, previousString, arrayOfTransformedStrings);
            }
        } else {
            //действия для всего остального
            transformedString += currentStatement;
            arrayOfTransformedStrings.push(transformedString);
            return;
        }
        

    }



function transformationAlgoritm(object){
    let arrayOfTransformedStrings = [];
    let transformedString = '_';
    let previousString = '+';
    
    recursion(object, transformedString, previousString, arrayOfTransformedStrings);

    return arrayOfTransformedStrings;
}

let result = transformationAlgoritm(json);

console.log(result);
