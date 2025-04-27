let computer ={ cpu: "2gb ram"}

let lenovo ={
    cost:3000,
    ram:14,
    __proto__: computer
}


let hp ={

    cost: 3000,
    __proto__:lenovo,
    // __proto__:computer
}


// Object.setPrototypeOf(hp, computer)
console.log(hp.__proto__, lenovo.__proto__)

let dell = {
    cost: 4000
}
Object.setPrototypeOf(dell, hp)
console.log(Object.getPrototypeOf(dell))

//every class should have one proto 