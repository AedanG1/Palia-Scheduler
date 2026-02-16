import { X } from "lucide-react"

type CursorBadgeProps = {
  cursorPosition: { x: number, y: number};
}

export default function CursorBadge({cursorPosition}: CursorBadgeProps) {
  return (
      <div 
        className="fixed pointer-events-none z-50 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5"
        style={{
          left: `${cursorPosition.x + 12}px`,
          top: `${cursorPosition.y - 24}px`,
          transform: "translate(0, 0)"
        }}
      >
        <X size={14} />
        Remove
      </div>
  )
}