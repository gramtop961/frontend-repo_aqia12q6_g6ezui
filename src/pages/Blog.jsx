import SiteFrame from '../components/SiteFrame'

export default function Blog() {
  const posts = [
    { title: 'Designing for speed of learning', date: '2025-03-01' },
    { title: 'From MVP to Moat: product lessons', date: '2025-02-10' },
    { title: 'Why we love TypeScript', date: '2025-01-22' },
  ]

  return (
    <SiteFrame>
      <section className="pt-28" id="blog">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Insights</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">Notes from building products, systems, and teams.</p>
          <div className="mt-10 grid gap-6">
            {posts.map((p) => (
              <article key={p.title} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{new Date(p.date).toLocaleDateString()}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
