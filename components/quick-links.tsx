export default function QuickLinks() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <a
            href="/people"
            className="p-6 bg-card rounded-lg hover:shadow-lg hover:border-accent border border-border transition text-center"
          >
            <h3 className="font-bold mb-2">People</h3>
            <p className="text-sm text-muted-foreground">Meet our team members</p>
          </a>
          <a
            href="/updates"
            className="p-6 bg-card rounded-lg hover:shadow-lg hover:border-accent border border-border transition text-center"
          >
            <h3 className="font-bold mb-2">Updates</h3>
            <p className="text-sm text-muted-foreground">Latest news & events</p>
          </a>
          <a
            href="/achievements"
            className="p-6 bg-card rounded-lg hover:shadow-lg hover:border-accent border border-border transition text-center"
          >
            <h3 className="font-bold mb-2">Achievements</h3>
            <p className="text-sm text-muted-foreground">Publications & awards</p>
          </a>
          <a
            href="/teaching"
            className="p-6 bg-card rounded-lg hover:shadow-lg hover:border-accent border border-border transition text-center"
          >
            <h3 className="font-bold mb-2">Teaching</h3>
            <p className="text-sm text-muted-foreground">Courses & seminars</p>
          </a>
        </div>
      </div>
    </section>
  )
}
