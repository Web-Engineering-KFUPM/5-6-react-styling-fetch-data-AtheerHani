import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({ users, onUserClick }) {
  if (users.length === 0) {
    return (
      <Alert variant= "info">
        No users found matching your search criteria.
      </Alert>
    )
  } 
  return (
    <Row> 
      {users.map(user => (<col md={6} lg={4} className= "mb-4" key={user.id}>  
        <UserCard user={user} onUserClick={onUserClick} />
      </col>
          ))}
    </Row>
  )
}
export default UserList
