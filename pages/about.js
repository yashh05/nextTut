import { useRouter } from 'next/router'
import React from 'react'

function About() {
const router=useRouter()

    function handleportfolioButton(){
        // return router.push("/portfolio/1");
        return router.push({              //another way of doing this
            pathname:"/portfolio/[id]",
            query:{id:2}
        })
    }
  return (
    <div>About page is here woohoo.
        <button onClick={handleportfolioButton}>Go to Portfolio </button>
    </div>
  )
}

export default About