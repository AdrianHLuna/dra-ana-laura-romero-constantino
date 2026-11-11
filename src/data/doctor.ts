import type { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Ana Laura Romero Constantino",
  title: "Dra.",
  specialty: "Pediatría",
  specialistTitle: "Médico Pediatra",
  cedula: "11537403",
  cedulaInstitucion: "UNACH",
  cedulaEspecialidad: "13476670",
  cedulaEspecialidadInstitucion: "UNAM",
  cofepris: undefined,
  phone: "+529616084710",
  whatsapp: "+529616084710",
  emergencyPhone: "+529616084710",
  // Email no confirmado por la doctora — placeholder solo para satisfacer el
  // schema (requerido por JSON-LD); nunca se muestra en la UI (AGENTS.md §9).
  email: "contacto@dra-analaura-romero.com",
  address:
    "Calle 5 Poniente Norte #433, Local 2, Plaza San José, Col. Terán, CP 29050, Tuxtla Gutiérrez, Chiapas",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  googleMapsUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Calle 5 Poniente Norte #433, Local 2, Plaza San José, Col. Terán, Tuxtla Gutiérrez, Chiapas"
    ),
  consultationPrice: 700,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito"],
  schedule:
    "Lunes a viernes de 9:00 a 13:00 y de 16:00 a 18:00. Sábados de 11:00 a 13:00.",
  openingHours: ["Mo-Fr 09:00-13:00", "Mo-Fr 16:00-18:00", "Sa 11:00-13:00"],
  acceptingNewPatients: true,
  photo: "/doctora-placeholder.jpg",
  bio:
    "La Dra. Ana Laura Romero Constantino es médico pediatra en Tuxtla Gutiérrez, Chiapas, con más de 2,000 pacientes atendidos a lo largo de su práctica clínica. Su consulta está enfocada en el acompañamiento integral del crecimiento y desarrollo infantil, desde el control del niño sano hasta la atención de enfermedades agudas comunes en la infancia y la adolescencia. Egresada de la Universidad Autónoma de Chiapas y especializada en Pediatría por la Universidad Nacional Autónoma de México, combina un trato cercano con los padres y una explicación clara de cada diagnóstico, para que las familias entiendan el estado de salud de sus hijos sin tecnicismos innecesarios.",
  philosophy:
    "Cada consulta pediátrica es también una oportunidad para acompañar y orientar a la familia, no solo para tratar un síntoma: la salud infantil se cuida mejor cuando los padres entienden con claridad qué está pasando y qué sigue.",
  experience: [],
  stats: [
    { label: "Pacientes atendidos", value: "+2,000" },
    { label: "Años de experiencia", value: "+4" },
    { label: "Procedimientos realizados", value: "—" },
  ],
  certifications: [
    {
      name: "Consejo Mexicano de Pediatría",
      institution: "Consejo Mexicano de Pediatría",
    },
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad Autónoma de Chiapas",
    },
    {
      degree: "Especialidad en Pediatría",
      institution: "Universidad Nacional Autónoma de México",
    },
  ],
  testimonials: [],
  sameAs: [],
  ga4Id: undefined,
};
