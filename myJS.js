const _ = require('lodash')

const print = console.log;


const user = {
    name: 'Imie',
    surname:"Nazwisko",
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}





function zad_3(user) {
    


    let row = [];
    
    for (let i = 0; i < Object.keys(user).length;i++){
        row.push(Object.values(user.allGrades)[i])
    }

   



    let avgs = []

    for (let i = 0; i < row.length;i++){
        for (let j = 0 ; j < row[i].weight; j++){
            avgs.push(_.mean(row[i].grades))
        }
       
    }


    let values = [Object.values(user)[0],Object.values(user)[1],_.mean(avgs)]

    return  values;

}
print(zad_3(user))

/*
if (Object.keys(user)[i] === 'allGrades'){
    for (let j = 0 ; j < Object.keys(user)[i].length;j++){
        console.log(Object.keys(user.)[i][0])
        
    }
    

}
*/

function zad4(user){

    let row = [];
    
    for (let i = 0; i < Object.keys(user).length;i++){
        row.push(Object.values(user.allGrades)[i])
    }
    console.log(row)

    result = _.find(row,function subjectName(row){
        if (row.weight === 1){
            return row.subjectName;
        }
    } )

    return result;


    
}
console.log(zad4(user))