import { SEO } from '@/components/SEO'

export default function Join() {
  return (
    <section className="container py-12">
      <SEO title="Join" path="/join" />
      <h1 className="text-3xl font-serif mb-6">Join Freemasonry</h1>
      <form className="grid gap-4 max-w-xl" aria-describedby="join-help">
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
        <p id="join-help" className="text-sm text-muted-foreground">This sends to our officers for follow-up.</p>
      </form>
    </section>
  )
}
