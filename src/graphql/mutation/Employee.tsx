import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
mutation CreateEmployer($employee: EmployeeCreateDto!) {
    createEmployer(employee: $employee) {
      city
      designation
      firstName
      lastName
    }
  }`
  export const UPDATE_EMPLOYEE = gql`

  mutation UpdateEmp($updateEmpId: Int!, $updatedEmp: EmployeeUpdateDto!) {
    updateEmp(id: $updateEmpId, updatedEmp: $updatedEmp) {
      city
      designation
      firstName
      lastName
      id
    }
  }`
  export const DELETE_EMPLOYEE = gql`

  mutation DeleteEmp($deleteEmpId: Int!) {
    deleteEmp(id: $deleteEmpId)
  }`

  