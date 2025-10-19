import { SEO } from '@/components/SEO'

export default function Contact() {
  return (
    <section className="container py-12">
      <SEO title="Contact" path="/contact" />
      <h1 className="text-3xl font-serif mb-6">Contact Us</h1>
      <form className="grid gap-4 max-w-xl" aria-describedby="contact-help">
        <label className="grid gap-1">
          <span>Name</span>
          <input className="border rounded-md px-3 py-2" name="name" required />
        </label>
        <label className="grid gap-1">
          <span>Email</span>
          <input className="border rounded-md px-3 py-2" name="email" type="email" required />
        </label>
        <label className="grid gap-1">
          <span>Message</span>
          <textarea className="border rounded-md px-3 py-2" name="message" rows={4} />
        </label>
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 w-max">Send</button>
        <p id="contact-help" className="text-sm text-muted-foreground">We will respond shortly.</p>
      </form>
    </section>
  )
}
