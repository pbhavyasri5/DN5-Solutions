// Q3
const events = [
  { name: 'Music Show', date: '2025-01-01', seats: 0 },
  { name: 'Art Workshop', date: '2026-12-31', seats: 10 }
];
const today = new Date().toISOString().slice(0,10);
events.forEach(event => {
  if (event.date < today || event.seats === 0) {
    console.log(`${event.name} is hidden (past or full)`);
  } else {
    console.log(`${event.name} is visible`);
  }
});
function registerForEvent(event) {
  try {
    if (event.seats <= 0) throw new Error('No seats');
    event.seats--;
  } catch (err) {
    console.error('Registration error:', err.message);
  }
}