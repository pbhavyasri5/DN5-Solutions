// Q4
let categoryRegistrations = (function() {
  let total = 0;
  return function(count) { total += count; return total; };
})();
function addEvent(name, category) { return { name, category }; }
function registerUser(event, callback) { callback(event); }
function filterEventsByCategory(events, category, callback) {
  return events.filter(callback).filter(e => e.category === category);
}
const eventsList = [{ name: 'Concert', category: 'music' }];
const musicFilter = (e) => e.category === 'music';
console.log(filterEventsByCategory(eventsList, 'music', musicFilter));
categoryRegistrations(5);
console.log('Total registrations for category:', categoryRegistrations(0));