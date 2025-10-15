import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

function SearchBar({ searchTerm = '', onSearchSubmit }) {
  const [localValue, setLocalValue] = useState(searchTerm)

  useEffect(() => {
    setLocalValue(searchTerm)
  }, [searchTerm])

  const submit = (e) => {
    e?.preventDefault()
    if (onSearchSubmit) onSearchSubmit(localValue)
  }

  return (
    <Form onSubmit={submit} className="mb-4">
      <InputGroup>
        <InputGroup.Text></InputGroup.Text>
        <Form.Control
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder="Search users by name"
        />
        <Button variant="primary" type="submit">Search</Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
