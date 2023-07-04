import { useRouter } from 'next/router'
import React from 'react'

function BlogPost() {
    const router=useRouter()
    const slug=router.query.slug
  return (
    <div>{slug.join(" ")}</div>
  )
}

export default BlogPost