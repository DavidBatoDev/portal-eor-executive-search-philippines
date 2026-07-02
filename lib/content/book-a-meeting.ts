import type { IconName } from "@/components/ui/Icon";

export const meta = {
  title: "Contact Portal | Book a Consultation for Workforce Support",
  description:
    "Get in touch with Portal for EOR, payroll, HR outsourcing, executive search, and shared services solutions. Book your meeting today.",
};

export const hero = {
  eyebrow: "Let's Connect",
  heading: "Book a Meeting with Our Team",
  lead: "Choose a convenient time and let our representative guide you through your workforce solution needs.",
  scrollLabel: "Schedule Your Call",
};

export const form = {
  heading: "Schedule Your Call",
  subtitle:
    "Pick a weekday and time that works — our team will confirm by email.",
  confirmNote: "We will contact you to confirm your meeting.",
  submitLabel: "Book a Meeting",
  submittingLabel: "Sending…",
  // Preferred-time options (PH business hours, lunch break omitted).
  timeSlots: [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "I'm flexible",
  ],
  success: {
    title: "Thanks — your meeting request is in.",
    message:
      "We'll email you within one business day to confirm your preferred day and time.",
    action: { label: "Back to home", href: "/" },
  },
};

export const whyBook = {
  eyebrow: "Why Book a Meeting",
  heading: "Why Connect with Portal",
  cards: [
    {
      icon: "shield-check" as IconName,
      title: "Expert Guidance",
      body: "Talk through EOR, Payroll, HR, and Workforce solutions with specialists who know the Philippine market.",
    },
    {
      icon: "asterisk" as IconName,
      title: "Tailored Recommendations",
      body: "Get practical advice and a clear pathway shaped around your specific hiring and workforce needs.",
    },
    {
      icon: "manpower" as IconName,
      title: "Flexible Support",
      body: "From a single critical hire to nationwide teams, we scale support to match any workforce size.",
    },
  ],
};
