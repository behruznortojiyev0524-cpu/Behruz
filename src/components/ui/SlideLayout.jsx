export default function SlideLayout({ children, className = '' }) {
  return (
    <div className={`w-full h-full flex flex-col bg-white text-slate-800 select-none overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
