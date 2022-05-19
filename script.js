// fetch('./student-data2.json').then(responseCallBack).then(resultCallBack).catch(menageError)

// function responseCallBack(response){
//     console.log(response);
//     return response.json();
// }

// function resultCallBack(result){
//     console.log(result);
// }
// function menageError(error){
//     console.log(error)
// }
// console.log('prima');
// fetch('./student-data.json').then((resp) =>resp.json()).then((res) => console.log('risultato \n', res))
// setTimeout(()=>console.log('dopo'), 0)
// setTimeout(()=>console.log('dopo'), 30)
// setTimeout(()=>console.log('dopo'), 60)
// setTimeout(()=>console.log('dopo'), 90)

// const ajax = new XMLHttpRequest();  //Vecchio metodo
// ajax.onreadystatechange = onreadystatechangeCallBack
// ajax.open('get','./student-data.json')
// ajax.send()
// function onreadystatechangeCallBack(){
//     if(this.readyState === 4) {
//         if(this.status === 200){
//             console.log(this.responseText);
//             const array = JSON.parse(this.responseText)
//             console.log(array)
//         } else {
//             console.log('Server non rarriungibile');
//         }
//     }
// }


fetch('https://62860d1bf0e8f0bb7c0f4284.mockapi.io/students').then(responseCallBack).then(resultCallBack).catch(menageError)

function responseCallBack(response){
    console.log(response);
    return response.json();
}

function menageError(error){
    console.log(error)
}

function resultCallBack(result) {
    console.log(result);
    const array = convertArrayToStudents(result)
    console.log('yoyo', array)
    displayStudents(array)
    for (const student of array) {
        student.getDaysToBirthDay();
    }
}

function displayStudents(arrayOfStudents){
    const arrayContainer = document.createElement('div')
    for (let i = 0; i < arrayOfStudents.length; i++) {
        const student = arrayOfStudents[i]
        const studentContainer = document.createElement('div')
        const span = document.createElement('span')
        span.innerHTML = student.name + ' ' + student.surname + ' mancano giorni al compleanno: ' + student.getDaysToBirthDay();
        const img = document.createElement('img')
        img.src = student.avatarUrl
        img.width = '100'
        studentContainer.append(span, img)

        arrayContainer.appendChild(studentContainer)
    }
    document.body.appendChild(arrayContainer)
}


function convertArrayToStudents(result){
    const arrayOfStudents = result.map(obj => Student.fromObjToStudent(obj))
    return arrayOfStudents
}


