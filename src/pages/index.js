import { HomeScreen } from "@/components/screens";

export default function Home() {
  return (
    <HomeScreen
      image="/images/homebanner.jpg"
      titleBanner="Welcome to Laundry To Go"
      descriptionBanner="Experience Exceptional Laundry Services in Manhattan"
      buttonLeft="Schedule a Pickup"
      buttonRight="Click to call"
    />
  );
}
