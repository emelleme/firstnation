import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TribeProfile } from "@/components/tribe-profile"
import { tribes, getTribeById } from "@/lib/tribes-data"

export async function generateStaticParams() {
  return tribes.map((tribe) => ({
    id: tribe.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tribe = getTribeById(id)

  if (!tribe) {
    return {
      title: "Tribe Not Found | First Nations Living Journal",
    }
  }

  return {
    title: `${tribe.name} | First Nations Living Journal`,
    description: tribe.description,
  }
}

export default async function TribeProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tribe = getTribeById(id)

  if (!tribe) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <TribeProfile tribe={tribe} />
      </main>
      <Footer />
    </div>
  )
}
