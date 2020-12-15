import { gql } from '@apollo/client';


export const GET_ALL_PEOPLE = gql`
    query people($cursor: String){
    allPeople(first:5, after: $cursor){
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
        pageInfo {
            endCursor
            hasNextPage
        }
      }
    }
`;

export const GET_BY_CODE = gql`
    {
        person(id:"cGVvcGxlOjE=") {
          id,
          name,
          hairColor,
          skinColor,
          eyeColor,
          birthYear,
          vehicleConnection
          {
            vehicles {
              name
            }
          }
        }        
    }
`;