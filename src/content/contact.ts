/**
 * CONTACT PAGE COPY (left column) + facility page copy.
 * Draft wording, final structure.
 */

export const contact = {
  eyebrow: "Start Your Journey",
  headlineLines: [
    { text: "Ready To Be", emphasis: false },
    { text: "Kingdom Built?", emphasis: true },
  ],
  body: "Whether you're booking your first lesson, registering for a camp, or inquiring about team training — we'd love to hear from you. Every great athlete starts with a first session.",
} as const;

export const facility = {
  eyebrow: "Visit Us",
  headlineLines: [
    { text: "Train Where You're", emphasis: false },
    { text: "Built.", emphasis: true },
  ],
  intro:
    "Kingdom Built Performance is a single, dedicated indoor facility in Santa Rosa Beach, Florida — right in the heart of the 30A area. Sessions are by appointment, so every athlete gets focused, intentional time.",
  image: "/placeholders/facility.svg",
  imageAlt:
    "Exterior of the Kingdom Built Performance training facility in Santa Rosa Beach, Florida",
} as const;
