const users = [
	{
		id: 1,
		name: "Doe",
		age: 45,
		isActive: false,
	},
	{
		id: 2,
		name: "John Doe",
		age: 29,
		isActive: false,
	},
	{
		id: 3,
		name: "Alex",
		age: 23,
		isActive: true,
	},
	{
		id: 4,
		name: "Apple Doe",
		age: 12,
		isActive: false,
	},
	{
		id: 5,
		name: "Jash",
		age: 32,
		isActive: true,
	},
	{
		id: 6,
		name: "aosh",
		age: 24,
		isActive: false,
	},
];

const checkUsers = users.filter((user) => user.age > 30 && !user.isActive);
const olderUsers = users.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

const sumOfUserAges = users.reduce((total, user) => (total += user.age), 0);

console.log(sumOfUserAges);
console.log(users);
