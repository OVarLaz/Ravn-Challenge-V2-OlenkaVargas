import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
    query people($first: Int = 5, $after: String = null){
      allPeople (first: $first, after: $after) {
        people {
          id,
          name,
          hairColor,
          skinColor,
          eyeColor,
          birthYear,
          homeworld {
            name
          },
          species {
            name
          },
          vehicleConnection
          {
            vehicles {
              name
            }
          }
        }
      }
    }
`;