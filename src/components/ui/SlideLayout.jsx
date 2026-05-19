// Base layout wrapper used by every slide
export default function SlideLayout({ children, className = '' }) {
  return (
    <div
      className={`
        w-full h-full flex flex-col
        bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700
        text-white select-none overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  )
}
