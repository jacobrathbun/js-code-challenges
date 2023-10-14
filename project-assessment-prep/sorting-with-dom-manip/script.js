/* First create a function that will render the people array to the DOM. List each person - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
    { id: 1, name: 'Maria', age: 32 },
    { id: 2, name: 'Ryan', age: 37 },
    { id: 3, name: 'Zoe', age: 11 },
    { id: 5, name: 'Adette', age: 9 },
    { id: 6, name: 'Gio', age: 15 }
  ];

const sortButton = document.getElementById("sortButton");  

document.addEventListener('DOMContentLoaded', renderPeople());

sortButton.addEventListener('click', ()=> {
  peopleArr.sort((perA, perB) => perA.age - perB.age);
  renderPeople();
})

function renderPeople () {  
    const ul = document.getElementById('list')

    peopleArr.forEach((person) => {
    const {name, age} = person;
    const list = document.createElement('li')    
    list.textContent = `${name} is ${age} years old.`
    ul.append(list)   
  });
}

