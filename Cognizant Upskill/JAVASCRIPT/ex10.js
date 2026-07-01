// Q10
function createEvent({ name = 'Default', date = '2026-01-01', seats = 0 } = {}) {
  console.log(`Event: ${name}, Date: ${date}, Seats: ${seats}`);
}
const eventDetails = { name: 'Jazz Night', date: '2026-09-10', seats: 20 };
createEvent(eventDetails);