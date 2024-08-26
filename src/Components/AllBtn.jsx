import React from 'react'
import { Button } from 'react-bootstrap'
function AllBtn({ text }) {
    return (
        <Button className="custom-button">
            {text}
        </Button>
    )
}

export default AllBtn