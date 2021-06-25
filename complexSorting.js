
// https://www.youtube.com/watch?v=AmQ1OX7XBJw&list=PLQpjy32uK84v20BGyz8kj-04OSNkSSECT&index=18&t=395s

const people = [
    { id: 12, name: 'Billy', date: '1998-10-05',  city: 'BH'},
    { id: 123, name: 'Bart', date: '1993-02-15' , city: 'BH'},
    { id: 45, name: 'Belinda', date: '1996-01-31' , city: 'RJ'},
    { id: 67, name: 'Bonnie', date: '1998-04-09' , city: 'SP'},
    { id: 89, name: 'Brenda', date: '1996-07-08', city: 'BH'},
    { id: 34, name: 'Bobby', date: '1994-09-12' , city: 'SP'},
    { id: 234, name: 'Blake', date: '2000-01-01' , city: 'BA'},
];

// console.log(people)
// console.log(people.sort(byName))

// by name
function byName (a,b) {
    if(a.name > b.name){
        return 1
    } else if (a.name < b.name){
        return -1
    } else {
        return 0
    }
}

// by id
function byId (a,b) {
    return parseInt(a.id) - parseInt(b.id)
}

// by Date
function byDate (a,b) {    
    // valueOf -> javaScript calls the valueOf method to convert an object to a primitive value.    
    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
}

//by Day in a Month
function byBirthday(a, b) {
    let d1 = new Date(a.date); 
    let d2 = new Date(b.date);

    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      //same month
      return d1.getUTCDate() - d2.getUTCDate();
    }
}

// button sort REACT

// const allCategories = ['All', ...new Set(people.map(item => item.city))];
// console.log(allCategories)

// const [menuItem, setMenuItem] = useState(people);
// const [buttons, setButtons] = useState(allCategories);

// const filter = (button) =>{

//     if(button === 'All'){
//         setMenuItem(people);
//         return;
//     }

//     const data = people.filter(item => item.category ===  button);
//     setMenuItem(data)
// }

{/* <Button button={buttons} filter={filter} />
<Menu menuItem={menuItem}/> */}