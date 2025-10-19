import { SEO } from '@/components/SEO'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import officers from '@/content/officers.json'

export default function Officers() {
  return (
    <section className="container py-12">
      <SEO title="Officers" path="/officers" />
      <h1 className="text-3xl font-serif mb-6">Lodge Officers</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {officers.map((o) => (
          <Card key={o.id}>
            <CardHeader className="font-medium">{o.name}</CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{o.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
