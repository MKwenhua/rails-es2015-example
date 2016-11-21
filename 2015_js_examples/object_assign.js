let p1 = {name: 'Ryu', country: '日本', hp: 100, moves: ['kick', 'punch', 'spin thing']}

let mutated = Object.assign(p1, {country: 'Japan'})

console.log('mutated', mutated, 'p1', p1);

let p1again = {name: 'Ryu', country: '日本', hp: 100, moves: ['kick', 'punch', 'spin thing']}

let newone = Object.assign({}, p1again,{country: 'Japan'});

console.log('newone', newone, 'p1again', p1again)