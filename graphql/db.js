export const people = [
    {
        id: "1",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: "2",
        name: "Dall",
        age: 19,
        gender: "male"
    },
    {
        id: "3",
        name: "JD",
        age: 17,
        gender: "female"
    },
    {
        id: "4",
        name: "flynn",
        age: 18,
        gender: "male"
    },
    {
        id: "5",
        name: "Jeff",
        age: 20,
        gender: "male"
    },
    {
        id: "6",
        name: "bernet",
        age: 21,
        gender: "male"
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}