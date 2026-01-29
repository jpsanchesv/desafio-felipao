let userName = getFirstName("João-das-morenas", "-")
console.log("O nome informado foi: "+userName)


function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}