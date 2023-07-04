import { useRouter } from 'next/router'
import React from 'react'

function ClientsProject() {
    const router=useRouter()
console.log(router.query);
  return (
    <div>{router.query.clientId} is the client and the project id is {router.query.id}</div>
  )
}

export default ClientsProject