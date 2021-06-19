import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => {
            console.log(id);
            return getById(id);
        }
    }
}

export default resolvers;