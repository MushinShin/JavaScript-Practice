
// Hour
// If house is between 6am and 12pm: good morning!
// If it is between 12pm and 6pm: good afternoon!
// Otherwise: good evening!

let hour = 20;

if (hour >= 6 && hour < 12) {
    console.log('good morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('good afternoon!');
}
else
    console.log('good evening!');