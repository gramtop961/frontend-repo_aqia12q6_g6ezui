import SiteFrame from '../components/SiteFrame'

export default function About() {
  return (
    <SiteFrame>
      <section className="pt-28" id="about">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Logic Peak</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            We are a product-driven studio crafting future-proof digital experiences. Our team blends strategy, design, and engineering to deliver measurable outcomes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
              <h2 className="text-xl font-semibold">Our mission</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Empower ambitious teams with tools and experiences that move the needle.</p>
            </div>
            <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
              <h2 className="text-xl font-semibold">Our values</h2>
              <ul className="mt-2 list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Outcomes over output</li>
                <li>Clarity and candor</li>
                <li>Craft and curiosity</li>
                <li>Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  )
}
