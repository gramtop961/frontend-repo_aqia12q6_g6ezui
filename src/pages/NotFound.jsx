import SiteFrame from '../components/SiteFrame'

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="pt-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="inline-flex mt-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold">Go home</a>
        </div>
      </section>
    </SiteFrame>
  )
}
