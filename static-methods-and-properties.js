class Governor {
    constructor () {
        this.name = 'Kathy Hochul';
        this.age = 64;
        this.party = 'Democratic';
    }
    static greeting(){
        console.log (`Hello New York!`)
    }
    static sameState = 'We are all from the same state'
    }

const governorNY = new Governor()
console.log (governorNY)

console.log (Governor.sameState)

Governor.greeting()

//_________________________________________________________________________________________________

class Person {
    constructor(name, hobby, favFood ){
        this.name = name;
        this.hobby = hobby;
        this.favFood = favFood;
    }
    sleeps(time) {
        console.log(`${this.name} sleeps for ${time}.`)
    }
    likes() {
        console.log(`${this.name} likes to ${this.hobby}.`)
    }
    eats() {
        console.log(`${this.name} eats ${this.favFood}.`)
    }
}

class PostalWorker extends Person {
    constructor(name, hobby, favFood){
        super( name,hobby,favFood)
    }
    works (time) {
        console.log(`${this.name} works for ${time}.`)
    }
    drives () {
        console.log(`${this.name} drives a lot.`)
    }
}

class Chef extends Person {
    constructor(name, hobby, favFood){
        super( name,hobby,favFood)
    }
    cooks() {
        console.log (`${this.name} likes cooking ${this.favFood}`)
    }
    isAllergic (someFood) {
        console.log (`${this.name} is allergic to ${someFood}.`) 
    }
}

const postalWorker1 = new PostalWorker ('Herman Post', 'knit', 'pizza')
const postalWorker2 = new PostalWorker ('Mr. Parcel', 'rock climb', 'Bruschetta')

const chef1 = new Chef ('Ratatouille', 'cook', 'cheese')
const chef2 = new Chef ('Spongebob', 'catch jellyfish', 'Krabby Patties')

console.log (postalWorker1)
console.log(postalWorker2)
console.log(chef1)
console.log(chef2)

postalWorker1.works('eight hours')
postalWorker1.drives()
postalWorker1.sleeps('seven hours')
postalWorker1.eats()
postalWorker1.likes()

postalWorker2.works('four hours')
postalWorker2.drives()
postalWorker2.sleeps('6 hours')
postalWorker2.eats()
postalWorker2.likes()

chef1.sleeps('nine hours')
chef1.eats()
chef1.likes()
chef1.cooks()
chef1.isAllergic('caffeine')

chef2.sleeps('eight hours')
chef2.eats()
chef2.likes()
chef2.cooks()
chef2.isAllergic('passing his driving test')

//___________________________________________________________________________________________________



