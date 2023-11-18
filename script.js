let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(
        (person) => {
            if(person.profession === "developer"){
                console.log(person);
            }
        }
    )
  }
  
  // 2. Add Data
  function addData() {
    let newName = prompt("enter the name");
    let newAge = parseInt(prompt("enter your age"));
    let newProfession = prompt("enter the profession");
    data.push({
        name:newName,
        age:newAge,
        profession:newProfession
    });
    console.log(data);
}
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession != "admin");
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyarray = [
        {name:"shubham", age:23, profession:"developer"},
        {name:"sagar", age:26, profession:"student"}
    ]
    let combineArr = data.concat(dummyarray);
    console.log(combineArr);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgVal = 0;
    data.forEach((person) =>{
        avgVal += person.age;
    })
    console.log(avgVal/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let status = false;
    data.forEach(person =>{
        if(person.age>25){
            status = true;
        }
    })
    let count = data.some((person) => person.age>25);
    console.log(count? "yes,a person greater than age 25 exist": "no, a person greater than 25 age");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let proffessionsArr =[]
    data.forEach(person =>{
        if(!proffessionsArr.includes(person.profession)){
            proffessionsArr.push(person.profession);
        }
    })
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => b.age-a.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(person =>{
        if(person.name == "john"){
            person.profession = "manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devCount = data.filter(person => person.profession == "devloper");
    let adminCount = data.filter(person =>person.profession = "admin");
    console.log(`Developers: ${devCount.length}, admin:${adminCount.length}`);
  }