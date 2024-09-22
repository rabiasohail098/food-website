import Link from "next/link"
export default function Navbar () {
  return (
    <nav>
    <div className="logo">
        <h1>RSK Food</h1>
        </div>
    <div className="anchors">
        <ul className="text-center mt-4">
          <Link href="/" className="link">Home</Link>
      <Link href="/about" className="link" >About</Link>
      <Link href="/manu" className="link">Manu</Link>
      <Link href="/deserts" className="link">Deserts</Link>
      <Link href="/contact" className="link"> Contact</Link>
      </ul>
    </div>
    <button>Log in</button>
        <button>sign up</button>

       
</nav>

  )
}

