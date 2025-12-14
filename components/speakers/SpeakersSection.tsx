export const revalidate = 0;

import { getSpeakers } from "@/lib/speakers"
import { SpeakersGrid } from "./SpeakersGrid"

export default async function SpeakersSection() {
  const palestrantes = await getSpeakers()

  return <SpeakersGrid palestrantes={palestrantes} />
}
