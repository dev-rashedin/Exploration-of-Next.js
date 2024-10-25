export default function DashboardLayout({ children }) {
  return <section>
    <div className="flex-shrink-0">
      <div className="w-20 bg-green-600"></div>
      <div className="w-full bg-yellow-600"></div>
    </div>
    {children}
  </section>;
}
