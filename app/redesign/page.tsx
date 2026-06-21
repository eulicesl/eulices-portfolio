import { permanentRedirect } from "next/navigation";

// The redesign is now the homepage. Keep /redesign working for any shared links
// by permanently redirecting it to the root (avoids duplicate-content URLs).
export default function RedesignPage() {
  permanentRedirect("/");
}
