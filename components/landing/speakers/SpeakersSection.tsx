export const revalidate = 0;

import { getSpeakersMap } from "@/lib/speakers"
import { SpeakersGrid } from "./SpeakersGrid"

export default async function SpeakersSection() {
const palestrantes = await getSpeakersMap();
return <SpeakersGrid palestrantes={palestrantes} />;
}
