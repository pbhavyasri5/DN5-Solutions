// Q2
const eventName = 'Summer Fest';
const eventDate = '2026-07-15';
let availableSeats = 50;
function register() {
  if (availableSeats > 0) availableSeats--;
}
console.log(`Event: ${eventName}, Date: ${eventDate}, Seats left: ${availableSeats}`);
register();
console.log(`After registration: ${availableSeats} seats left`);