const findTheOldest = function(arrPeople) {
    return(arrPeople.reduce((return_person, person) => {
        // console.log(return_person);
        let return_person_age = 0;
        let person_age = 0;

        // console.log("start, return_person: " + return_person.name);
        // console.log("start, person: " + person.name);

        if (!("yearOfDeath" in return_person)) {
            return_person_age = new Date().getFullYear() - return_person.yearOfBirth;
        }
        else {
            return_person_age = return_person.yearOfDeath - return_person.yearOfBirth;
        }

        if (!("yearOfDeath" in person)) {
            person_age = new Date().getFullYear() - person.yearOfBirth;
        }
        else {
            person_age = person.yearOfDeath - person.yearOfBirth;
        }

        // console.log(return_person.name + " age: " + return_person_age);
        // console.log(person.name + " age: " + person_age);
        

        if (person_age > return_person_age) {
            // console.log(person.name + " is older than " + return_person.name);
            return_person = person;
        } 
        // console.log("end: " + return_person.name);

        return return_person;
    }))
};

// Do not edit below this line
module.exports = findTheOldest;
