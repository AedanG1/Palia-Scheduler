import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-12 items-center py-10">
      <Link href={"/"} className="w-140 flex flex-row items-center gap-2">
        <ArrowLeft size={16}/>
        <u>Home</u>
      </Link>
      <h1 className="text-2xl">Not getting notifications?</h1>
      <div className="flex flex-col gap-4 w-140">
        <p>Navigate to Notification settings in System settings</p>
        <p>Make sure Notifications are on and Do Not Disturb is off. Also make sure notifications are on for the web browser you use.</p>
        <Image src={"/NotificationSettings1.png"} width={871} height={742} alt="Windows 11 notification settings" />
      </div>
      <div className="flex flex-col gap-4 w-140">
        <p>Under the <b>Turn on do not disturb automatically</b> tab, <em>uncheck</em></p> 
        <ul>
          <li>- When playing a game</li> 
          <li>- When using an app in full-screen mode...</li>
        </ul>
        <Image src={"/NotificationSettings2.png"} width={867} height={863} alt="Windows 11 notification settings with 'do not disturb automatically' tab open" />
      </div>
    </div>
  )
}