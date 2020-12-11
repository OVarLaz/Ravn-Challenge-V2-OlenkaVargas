import { ApolloClient, InMemoryCache } from '@apollo/client';

const BASE_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';



export const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    morePeople: {
                        merge(existing, incoming, { readField }) {
                            const people = existing ? { ...existing.people } : {};
                            incoming.people.forEach(people_ => {
                                people[readField("id", people_)] = people_;
                            });
                            return {
                                cursor: incoming.cursor,
                                people,
                            };
                        },

                        read(existing) {
                            if (existing) {
                                return {
                                    cursor: existing.cursor,
                                    people: Object.values(existing.people),
                                };
                            }
                        },
                    }
                }
            }
        }
    }),
    fetchOptions: {
        mode: 'no-cors',
    },
});