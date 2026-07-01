// Q6
let communityEvents = ['Concert', 'Workshop', 'Music Night'];
communityEvents.push('Jazz Club');
const musicEvents = communityEvents.filter(e => e.toLowerCase().includes('music') || e === 'Concert');
const cards = communityEvents.map(e => `Event: ${e}`);
console.log(musicEvents);
console.log(cards);