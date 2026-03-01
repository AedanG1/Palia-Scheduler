import Link from "next/link"

export default function Footer() {
  return (
    <div className="mt-24 flex flex-col items-center gap-4">
      <Link className="underline" href="https://forms.gle/xUJwiyjJfENvN1QC9" target="_blank">Feedback Form</Link>
      <p className="text-sm dark:text-slate-400 text-center">Please feel free to provide any feedback about the website<br></br>through the Google Form link above.</p>
      <Link href="/terms-of-use">Terms of use</Link>
    </div>
  )
}