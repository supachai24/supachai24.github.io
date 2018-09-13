// var john = {
//     fullName: 'John Doe',
//     mass: 75,
//     height: 1.8,
//     calbmi: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     } 
// }

// var mike = {
//     fullName: 'Mike Shinoda',
//     mass: 80,
//     height: 1.75,
//     calbmi: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     } 
// }


// if (john.calbmi() > mike.calbmi()) {
//     console.log(john.fullName + 'has BMI' + john.bmi.toFixed(2) + ' ' + 'so more than mike.');
// } else if (mike.calbmi() > john.calbmi()) {
//     console.log(mike.fullName + ' ' + 'has BMI' + ' ' + mike.bmi.toFixed(2)+ ' ' + 'so more than john.');
// } else {
//     console.log('They are equal BMI');
// }

// console.log(john, mike);


var john = {
    fullName: 'John Doe',
    bills: [
        124,
        48,
        268,
        180,
        42
    ],
    calTip: function calTip() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.bills[i] + bill * percentage;
        }
    }
}

john.calTip();
console.log(john);