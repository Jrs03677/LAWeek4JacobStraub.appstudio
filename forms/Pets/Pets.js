let petNames = []
petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]

let withSal = []
withSal = petNames

let sal = 'Sal'

withSal.push(sal)
console.log(withSal)

petNames.push(sal)
console.log(petNames)

console.log(`the third pet is named ${withSal[2]}`)

console.log(`the array has ${petNames.length} in it`)

petNames.pop()
