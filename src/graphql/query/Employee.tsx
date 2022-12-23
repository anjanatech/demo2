import { gql } from '@apollo/client';

export const FETCH_EMPLOYEE = gql`
query FindAll {
    findAll {
      id
      city
      designation
      firstName
      lastName
    }
  }`