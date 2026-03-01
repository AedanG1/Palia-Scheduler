import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col gap-12 items-start py-8 px-4 md:mx-auto md:px-0 md:py-10 md:w-140">
      <Link href={"/"} className="flex flex-row items-center gap-2">
        <ArrowLeft size={16}/>
        <u>Home</u>
      </Link>
      <h1 className="text-2xl w-full text-center">Legal Notice</h1>
      <div className="flex flex-col gap-4">
        <p className="text-lg">© All intellectual property and assets related to Palia are reserved by Singularity 6.<br></br> This site is fan-made and not affliated with Palia or Singularity 6.</p>
      </div>
      <h2 className="text-xl w-full text-center">Credits</h2>
      <div className="flex flex-col gap-4">
        <p>
          Images and information used on this website are from <Link href={"https://palia.com/"} className="underline">Palia</Link> and <Link href={"https://palia.wiki.gg/"} className="underline">Palia wiki</Link>
        </p>
      </div>
    </div>
  )
}