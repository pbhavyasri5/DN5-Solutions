// Q5
class Event {
  constructor(name, date, seats) { this.name = name; this.date = date; this.seats = seats; }
}
Event.prototype.checkAvailability = function() { return this.seats > 0; };
const myEvent = new Event('Fest', '2026-08-01', 100);
console.log(Object.entries(myEvent));
console.log(myEvent.checkAvailability());