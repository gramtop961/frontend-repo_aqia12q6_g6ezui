import SiteFrame from '../components/SiteFrame'

export default function Terms() {
  return (
    <SiteFrame>
      <section className="pt-28" id="terms">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">These terms govern your use of our website and services. Replace with your legal terms.</p>
          <ol className="mt-6 list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Use of service</li>
            <li>Payments and refunds</li>
            <li>Confidentiality</li>
            <li>Liability</li>
          </ol>
        </div>
      </section>
    </SiteFrame>
  )
}
