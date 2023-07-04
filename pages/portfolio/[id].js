import { useRouter } from "next/router"

function Project() {
  const router=useRouter()
console.log(typeof router.query.id);

  return (
    <div>{router.query.id} is the project number</div>
  )
}

export default Project