import Link from "next/link"

const notfound =() => { 
  return (
    <>
    <div>notfound</div>
    <h1>Page not found </h1>
    <Link href="/"> Return Home</Link>
    </>
  )
}

export default notfound