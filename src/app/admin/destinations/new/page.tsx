import DestinationForm from "@/components/admin/DestinationForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Add New Destination" };

export default function NewDestinationPage() {
  return <DestinationForm />;
}
