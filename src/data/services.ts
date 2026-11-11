import type { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "s-control-nino-sano",
    slug: "control-del-nino-sano",
    name: "Control del Niño Sano",
    description:
      "Seguimiento periódico del crecimiento, desarrollo y vacunación del niño, aunque no presente ningún síntoma, para detectar a tiempo cualquier desviación de lo esperado para su edad.",
    longDescription:
      "El control del niño sano es la consulta programada que acompaña al niño desde el nacimiento hasta la adolescencia, sin necesidad de que exista una enfermedad o síntoma. En cada cita se revisa peso, talla, perímetro cefálico, desarrollo psicomotor, alimentación y esquema de vacunación, comparando el avance del niño contra las curvas de crecimiento esperadas para su edad. Es la base de la medicina preventiva en pediatría: permite detectar a tiempo cualquier desviación del desarrollo normal y resolver dudas de los padres en cada etapa.",
    type: "consultorio",
    duration: "30 a 40 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Detección temprana de desviaciones en el crecimiento o desarrollo",
      "Esquema de vacunación siempre al día",
      "Orientación a los padres en cada etapa del desarrollo infantil",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 40 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cada cuánto debo llevar a mi hijo a control del niño sano?",
        answer:
          "La frecuencia varía según la edad: es más seguida en el primer año de vida y se espacía conforme el niño crece; la pediatra indica el calendario exacto de controles según la edad de cada niño.",
      },
      {
        question: "¿El control del niño sano incluye las vacunas?",
        answer:
          "Sí, revisar y aplicar el esquema de vacunación correspondiente a la edad es parte central de cada consulta de control del niño sano.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-09",
    image: "/images/services/control-del-nino-sano.jpg",
    seo: {
      title: "Control del Niño Sano en Tuxtla Gutiérrez | Pediatra",
      description:
        "Seguimiento del crecimiento y desarrollo de tu hijo con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "control del niño sano Tuxtla Gutiérrez",
        "pediatra para revisión de crecimiento Chiapas",
        "consulta de control pediátrico",
      ],
    },
  },
  {
    id: "s-atencion-gastrointestinal",
    slug: "atencion-de-enfermedades-gastrointestinales",
    name: "Atención de Enfermedades Gastrointestinales",
    description:
      "Valoración y manejo de padecimientos digestivos frecuentes en la infancia, como la enfermedad diarreica aguda y las infecciones intestinales parasitarias.",
    longDescription:
      "La atención de enfermedades gastrointestinales en pediatría abarca desde cuadros agudos, como la enfermedad diarreica aguda, hasta infecciones intestinales por parásitos como la giardiasis. Incluye valoración clínica completa, indicación de estudios de laboratorio cuando son necesarios, plan de hidratación y tratamiento específico según el caso, así como orientación a los padres sobre signos de alarma a vigilar en casa durante la recuperación.",
    type: "consultorio",
    duration: "30 a 40 minutos",
    recoveryTime: "Variable según el padecimiento",
    isPainful: false,
    benefits: [
      "Identificación oportuna de la causa del malestar digestivo",
      "Plan de hidratación personalizado para evitar deshidratación",
      "Seguimiento hasta la resolución completa del cuadro",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 40 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cuándo debo llevar a mi hijo por diarrea o vómito?",
        answer:
          "Debes buscar valoración pediátrica si la diarrea o el vómito persisten más de 24 a 48 horas, si hay sangre en las evacuaciones, fiebre persistente, o signos de deshidratación como boca seca y poca orina.",
      },
      {
        question: "¿Se necesitan estudios de laboratorio para estos padecimientos?",
        answer:
          "No siempre; la pediatra decide si se requiere un estudio de heces o de sangre según la duración y las características del cuadro, especialmente cuando se sospecha una infección parasitaria como la giardiasis.",
      },
    ],
    relatedConditions: ["d-diarrea", "d-giardiasis"],
    lastReviewed: "2026-11-09",
    image: "/images/services/atencion-de-enfermedades-gastrointestinales.jpg",
    seo: {
      title: "Enfermedades Gastrointestinales Infantiles | Tuxtla",
      description:
        "Diarrea, vómito o parásitos intestinales en tu hijo: atención pediátrica en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "enfermedades gastrointestinales infantiles Tuxtla Gutiérrez",
        "pediatra para diarrea y vómito Chiapas",
        "atención de parásitos intestinales en niños",
      ],
    },
  },
  {
    id: "s-atencion-respiratoria",
    slug: "atencion-de-enfermedades-respiratorias",
    name: "Atención de Enfermedades Respiratorias",
    description:
      "Valoración y manejo de infecciones respiratorias comunes en la infancia, desde el resfriado común hasta cuadros que requieren vigilancia más cercana, como la laringitis.",
    longDescription:
      "La atención de enfermedades respiratorias cubre el espectro de infecciones de vías respiratorias altas más frecuentes en la edad pediátrica: rinofaringitis, otitis media, faringitis, amigdalitis y laringitis. Incluye exploración física dirigida, uso de otoscopia cuando es necesario, y definición de si el cuadro requiere solo manejo sintomático o tratamiento adicional, con especial atención a identificar signos de dificultad respiratoria que requieran atención más urgente.",
    type: "consultorio",
    duration: "30 a 40 minutos",
    recoveryTime: "Variable según el padecimiento",
    isPainful: false,
    benefits: [
      "Diferenciación entre infecciones virales y bacterianas",
      "Identificación temprana de signos de dificultad respiratoria",
      "Orientación clara para el cuidado en casa",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 40 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Todas las infecciones respiratorias necesitan antibiótico?",
        answer:
          "No. La mayoría de las infecciones respiratorias en niños son de origen viral y no requieren antibiótico; la pediatra valora cada caso para definir si el manejo es solo sintomático o si se necesita tratamiento adicional.",
      },
      {
        question: "¿Cuándo una infección respiratoria ya es urgencia?",
        answer:
          "Cuando hay dificultad para respirar, hundimiento de las costillas al respirar, coloración azulada de labios, o el niño no puede hablar ni alimentarse por falta de aire, se requiere atención médica inmediata.",
      },
    ],
    relatedConditions: ["d-rinofaringitis", "d-otitis-media", "d-amigdalitis", "d-faringitis", "d-laringitis"],
    lastReviewed: "2026-11-09",
    image: "/images/services/atencion-de-enfermedades-respiratorias.jpg",
    seo: {
      title: "Enfermedades Respiratorias Infantiles | Tuxtla",
      description:
        "Resfriados, otitis, amigdalitis y más: atención de enfermedades respiratorias infantiles en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "enfermedades respiratorias infantiles Tuxtla Gutiérrez",
        "pediatra para infecciones respiratorias Chiapas",
        "atención de tos y gripa en niños",
      ],
    },
  },
  {
    id: "s-deteccion-cancer-infantil",
    slug: "deteccion-oportuna-del-cancer-infantil",
    name: "Detección Oportuna del Cáncer Infantil",
    description:
      "Valoración clínica orientada a identificar de forma temprana signos y síntomas que puedan corresponder a cáncer infantil, cuando la detección oportuna cambia el pronóstico.",
    longDescription:
      "La detección oportuna del cáncer infantil es parte de la valoración pediátrica integral: implica estar atenta a signos de alarma como palidez persistente, moretones sin causa aparente, ganglios inflamados que no desaparecen, pérdida de peso inexplicable o dolor óseo persistente, y referir oportunamente a valoración especializada cuando se identifican. El cáncer infantil tiene mejor pronóstico mientras antes se detecta, por lo que la vigilancia en cada consulta de rutina, aunque el motivo sea otro, forma parte del acompañamiento pediátrico integral.",
    type: "consultorio",
    duration: "30 a 40 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Identificación temprana de signos de alarma",
      "Referencia oportuna a valoración especializada cuando se requiere",
      "Acompañamiento a la familia durante el proceso de valoración",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 40 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Qué signos de alarma debo vigilar en mi hijo?",
        answer:
          "Palidez que no mejora, moretones frecuentes sin golpe aparente, ganglios inflamados persistentes, pérdida de peso sin causa clara, fiebre prolongada sin foco identificado o dolor óseo que no cede son señales que ameritan valoración pediátrica.",
      },
      {
        question: "¿Estos signos siempre significan cáncer infantil?",
        answer:
          "No, la mayoría de las veces tienen otras causas más frecuentes y benignas; sin embargo, es importante que la pediatra los valore para descartar con certeza una causa que requiera atención especializada.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-09",
    image: "/images/services/deteccion-oportuna-del-cancer-infantil.jpg",
    seo: {
      title: "Detección de Cáncer Infantil | Pediatra Tuxtla",
      description:
        "Signos de alarma y detección temprana de cáncer infantil con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "detección de cáncer infantil Tuxtla Gutiérrez",
        "signos de alarma cáncer en niños Chiapas",
        "pediatra para valoración oncológica infantil",
      ],
    },
  },
  {
    id: "s-vacunacion",
    slug: "administracion-de-vacunas",
    name: "Administración de Vacunas",
    description:
      "Aplicación y seguimiento del esquema de vacunación infantil, de acuerdo con la cartilla nacional y las necesidades específicas de cada niño.",
    longDescription:
      "La administración de vacunas es una de las medidas preventivas más importantes en pediatría. En cada consulta se revisa la cartilla de vacunación del niño, se identifican las dosis que corresponden según su edad y se aplican bajo condiciones seguras, resolviendo cualquier duda de los padres sobre el biológico, los posibles efectos esperados y el calendario de dosis siguientes. Mantener el esquema al día protege al niño y a su comunidad de enfermedades prevenibles.",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "No aplica",
    isPainful: true,
    benefits: [
      "Protección contra enfermedades prevenibles por vacunación",
      "Esquema siempre actualizado según la edad",
      "Orientación clara sobre reacciones esperadas y cuidados posteriores",
    ],
    postOpRecommendations: [
      "Vigilar el sitio de aplicación por enrojecimiento o inflamación leve, esperable en las primeras 24 a 48 horas",
      "Controlar fiebre leve posterior a la vacuna según indicación de la pediatra",
      "Acudir a consulta si hay fiebre alta persistente o reacción fuera de lo esperado",
    ],
    priceRange: "Consultar costo según el biológico requerido",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "15 a 20 minutos",
      Doloroso: "Sí, molestia leve y breve en el sitio de aplicación",
    },
    faqs: [
      {
        question: "¿Qué debo llevar para la cita de vacunación?",
        answer:
          "Conviene llevar la cartilla nacional de vacunación del niño para registrar cada dosis aplicada y llevar un control preciso del esquema.",
      },
      {
        question: "¿Es normal que mi hijo tenga fiebre después de una vacuna?",
        answer:
          "Una fiebre leve en las primeras 24 a 48 horas después de ciertas vacunas puede ser esperable; la pediatra indica qué medidas tomar en casa y cuándo esa fiebre amerita valoración adicional.",
      },
    ],
    relatedConditions: ["d-virales-exantematicas"],
    lastReviewed: "2026-11-09",
    image: "/images/services/administracion-de-vacunas.jpg",
    seo: {
      title: "Vacunación Infantil | Pediatra en Tuxtla Gutiérrez",
      description:
        "Esquema de vacunación infantil al día con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "vacunación infantil Tuxtla Gutiérrez",
        "esquema de vacunas para niños Chiapas",
        "pediatra para vacunas",
      ],
    },
  },
  {
    id: "s-atencion-adolescente",
    slug: "atencion-al-adolescente",
    name: "Atención al Adolescente",
    description:
      "Consulta pediátrica orientada a las necesidades propias de la adolescencia: desarrollo puberal, salud emocional y hábitos de vida.",
    longDescription:
      "La atención al adolescente reconoce que esta etapa tiene necesidades distintas a las de la primera infancia: se revisa el desarrollo puberal, el crecimiento, hábitos de alimentación y sueño, salud emocional, y se abre un espacio de confianza para que el propio adolescente pueda expresar dudas sobre su cuerpo y su salud, siempre con el acompañamiento de los padres o tutores según la edad y las necesidades de cada familia.",
    type: "consultorio",
    duration: "30 a 40 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Seguimiento del desarrollo puberal y el crecimiento",
      "Espacio de confianza para resolver dudas propias de la edad",
      "Orientación en hábitos de alimentación, sueño y salud emocional",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 40 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Hasta qué edad atiende la pediatra a un adolescente?",
        answer:
          "La atención pediátrica suele acompañar al paciente durante toda la adolescencia; la pediatra puede orientar sobre el momento adecuado para la transición a la atención médica de adultos según cada caso.",
      },
      {
        question: "¿La consulta de adolescentes es solo física?",
        answer:
          "No, además de la valoración física del crecimiento y desarrollo, la consulta de adolescentes incluye un espacio para hablar de hábitos, salud emocional y cualquier duda propia de esta etapa.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-09",
    image: "/images/services/atencion-al-adolescente.jpg",
    seo: {
      title: "Atención al Adolescente | Pediatra en Tuxtla Gutiérrez",
      description:
        "Consulta pediátrica para adolescentes en Tuxtla Gutiérrez, Chiapas: desarrollo, hábitos y salud emocional.",
      keywords: [
        "atención al adolescente Tuxtla Gutiérrez",
        "pediatra para adolescentes Chiapas",
        "consulta médica para jóvenes",
      ],
    },
  },
  {
    id: "s-valoracion-recien-nacido",
    slug: "valoracion-del-recien-nacido",
    name: "Valoración del Recién Nacido",
    description:
      "Exploración física completa del recién nacido para confirmar su adaptación saludable a la vida fuera del útero y detectar condiciones que requieran seguimiento.",
    longDescription:
      "La valoración del recién nacido incluye una exploración física completa: peso, talla, perímetro cefálico, reflejos, coloración de la piel, auscultación cardiopulmonar y revisión general para confirmar una adaptación saludable tras el nacimiento. En esta etapa se identifican condiciones como la ictericia neonatal, el eritema tóxico del neonato, o signos de dificultad respiratoria que requieran manejo específico, y se orienta a los padres sobre los cuidados del recién nacido en casa.",
    type: "hospitalario",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Confirmación temprana de una adaptación saludable del recién nacido",
      "Detección oportuna de condiciones que requieren seguimiento",
      "Orientación a los padres sobre cuidados del recién nacido",
    ],
    postOpRecommendations: [],
    priceRange: "Consultar costo según el contexto de atención",
    technicalSpecs: {
      Tipo: "Hospitalario / Consultorio",
      Duración: "20 a 30 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cuándo se realiza la primera valoración del recién nacido?",
        answer:
          "La primera valoración ocurre en las horas posteriores al nacimiento, y se complementa con revisiones durante los primeros días de vida para vigilar peso, coloración de la piel y adaptación general.",
      },
      {
        question: "¿Qué se revisa específicamente en esta valoración?",
        answer:
          "Se revisan peso, talla, perímetro cefálico, reflejos propios del recién nacido, coloración de la piel para descartar ictericia, auscultación cardiopulmonar y la succión durante la alimentación.",
      },
    ],
    relatedConditions: ["d-ictericia", "d-apnea-prematuridad", "d-eritema-toxico", "d-sdr-neonatal"],
    lastReviewed: "2026-11-09",
    image: "/images/services/valoracion-del-recien-nacido.jpg",
    seo: {
      title: "Valoración del Recién Nacido | Pediatra en Tuxtla Gutiérrez",
      description:
        "Exploración completa de tu bebé recién nacido con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "valoración del recién nacido Tuxtla Gutiérrez",
        "pediatra para bebé recién nacido Chiapas",
        "revisión médica del recién nacido",
      ],
    },
  },
  {
    id: "s-tamiz-neonatal",
    slug: "pruebas-de-tamiz-neonatal",
    name: "Pruebas de Tamiz Neonatal",
    description:
      "Estudios de detección temprana que se realizan al recién nacido para identificar condiciones metabólicas, auditivas o cardíacas que no son evidentes al nacer.",
    longDescription:
      "Las pruebas de tamiz neonatal son estudios de detección temprana realizados en los primeros días de vida, orientados a identificar condiciones metabólicas, auditivas o cardíacas que no se manifiestan con signos visibles al nacer, pero que tienen mejor pronóstico mientras antes se detectan y tratan. La pediatra orienta a los padres sobre qué tamices se recomiendan, cuándo realizarlos y cómo interpretar los resultados.",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "No aplica",
    isPainful: true,
    benefits: [
      "Detección temprana de condiciones no evidentes al nacer",
      "Mejor pronóstico con tratamiento oportuno cuando se requiere",
      "Tranquilidad para los padres al confirmar resultados normales",
    ],
    postOpRecommendations: [],
    priceRange: "Consultar costo según el tamiz solicitado",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "15 a 20 minutos",
      Doloroso: "Molestia leve y breve, según el tamiz",
    },
    faqs: [
      {
        question: "¿Cuándo se realizan las pruebas de tamiz neonatal?",
        answer:
          "La mayoría de los tamices neonatales se recomiendan entre el tercer y quinto día de vida del bebé, aunque el momento exacto puede variar según el tipo de prueba.",
      },
      {
        question: "¿Qué pasa si un resultado del tamiz sale alterado?",
        answer:
          "Un resultado alterado no siempre significa un diagnóstico definitivo; la pediatra orienta sobre los estudios confirmatorios necesarios y, de requerirse, la referencia a valoración especializada oportuna.",
      },
    ],
    relatedConditions: ["d-ictericia", "d-sdr-neonatal"],
    lastReviewed: "2026-11-09",
    image: "/images/services/pruebas-de-tamiz-neonatal.jpg",
    seo: {
      title: "Pruebas de Tamiz Neonatal | Pediatra en Tuxtla Gutiérrez",
      description:
        "Detección temprana en tu recién nacido con las pruebas de tamiz neonatal en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "tamiz neonatal Tuxtla Gutiérrez",
        "pruebas de detección en recién nacidos Chiapas",
        "pediatra para tamiz metabólico",
      ],
    },
  },
  {
    id: "s-consulta-lactancia",
    slug: "consulta-de-lactancia-materna",
    name: "Consulta de Lactancia Materna",
    description:
      "Orientación y apoyo a madres y bebés para lograr una lactancia materna exitosa, incluyendo el manejo de molestias comunes como el cólico o el reflujo del lactante.",
    longDescription:
      "La consulta de lactancia materna ofrece orientación práctica a las madres sobre técnica de agarre, posiciones de amamantamiento y frecuencia de tomas, además de resolver dudas sobre molestias comunes en esta etapa, como el cólico del lactante o el reflujo gastroesofágico del bebé. El objetivo es apoyar una lactancia exitosa y cómoda tanto para la madre como para el bebé, identificando a tiempo cualquier dificultad que pueda afectar la ganancia de peso del recién nacido.",
    type: "consultorio",
    duration: "30 a 45 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Mejora de la técnica de lactancia y reducción de molestias",
      "Manejo orientado del cólico y el reflujo del lactante",
      "Seguimiento del peso del bebé durante la lactancia",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 45 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Cuándo conviene pedir una consulta de lactancia?",
        answer:
          "Es útil acudir si hay dolor al amamantar, dudas sobre si el bebé se alimenta lo suficiente, llanto excesivo relacionado con las tomas, o si el bebé no está ganando el peso esperado.",
      },
      {
        question: "¿Esta consulta puede ayudar con el cólico o el reflujo del bebé?",
        answer:
          "Sí, revisar la técnica de alimentación es una de las primeras medidas para ayudar a disminuir tanto el cólico del lactante como el reflujo gastroesofágico del bebé.",
      },
    ],
    relatedConditions: ["d-colico-lactante", "d-reflujo"],
    lastReviewed: "2026-11-09",
    image: "/images/services/consulta-de-lactancia-materna.jpg",
    seo: {
      title: "Consulta de Lactancia Materna | Pediatra en Tuxtla Gutiérrez",
      description:
        "Apoyo y orientación en lactancia materna con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "consulta de lactancia materna Tuxtla Gutiérrez",
        "ayuda para amamantar Chiapas",
        "pediatra para cólico del lactante",
      ],
    },
  },
  {
    id: "s-curva-crecimiento",
    slug: "curva-de-crecimiento-y-desarrollo",
    name: "Curva de Crecimiento y Desarrollo",
    description:
      "Seguimiento especializado del peso, talla y desarrollo psicomotor del niño a lo largo del tiempo, graficado contra los estándares esperados para su edad.",
    longDescription:
      "La curva de crecimiento y desarrollo es el registro continuo del peso, la talla y otros indicadores del niño a lo largo de las consultas, graficado contra los estándares de referencia para su edad y sexo. Permite identificar con claridad si el crecimiento sigue una trayectoria esperada o si se necesita una valoración más detallada, y es una herramienta central para detectar tanto retraso como exceso de peso de forma temprana.",
    type: "consultorio",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Visión clara de la tendencia de crecimiento del niño en el tiempo",
      "Detección temprana de retraso o exceso de peso",
      "Base objetiva para orientar la alimentación y el seguimiento",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "20 a 30 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Qué tan seguido se actualiza la curva de crecimiento?",
        answer:
          "Se actualiza en cada consulta de control del niño sano; la frecuencia de estas consultas depende de la edad del niño, siendo más cercana en el primer año de vida.",
      },
      {
        question: "¿Qué significa que mi hijo esté 'fuera de la curva'?",
        answer:
          "No es necesariamente motivo de alarma inmediata; la pediatra evalúa la tendencia en el tiempo, no solo un punto aislado, y determina si se requiere una valoración adicional según el contexto completo del niño.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-09",
    image: "/images/services/curva-de-crecimiento-y-desarrollo.jpg",
    seo: {
      title: "Curva de Crecimiento Infantil | Pediatra Tuxtla",
      description:
        "Seguimiento del crecimiento de tu hijo con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "curva de crecimiento infantil Tuxtla Gutiérrez",
        "seguimiento de peso y talla en niños Chiapas",
        "pediatra para desarrollo infantil",
      ],
    },
  },
  {
    id: "s-desparasitacion",
    slug: "desparasitacion-infantil",
    name: "Desparasitación Infantil",
    description:
      "Diagnóstico y tratamiento de parasitosis intestinales comunes en la infancia, como la giardiasis, además de orientación en medidas de prevención.",
    longDescription:
      "La desparasitación infantil incluye la valoración clínica de síntomas digestivos sugestivos de una infección parasitaria, la confirmación diagnóstica mediante estudio de heces cuando es necesario, y el tratamiento específico según el parásito identificado, como en el caso de la giardiasis. Se complementa con orientación a la familia sobre medidas de higiene y manejo de agua y alimentos para prevenir una reinfección.",
    type: "consultorio",
    duration: "20 a 30 minutos",
    recoveryTime: "Variable según el tratamiento indicado",
    isPainful: false,
    benefits: [
      "Confirmación diagnóstica antes de iniciar tratamiento",
      "Tratamiento dirigido según el parásito identificado",
      "Orientación en medidas de prevención para toda la familia",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "20 a 30 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Se debe desparasitar a todos los niños aunque no tengan síntomas?",
        answer:
          "La desparasitación dirigida, con confirmación diagnóstica previa, es el enfoque recomendado en consulta; la pediatra orienta sobre cuándo conviene un estudio de heces según los síntomas y el contexto de cada niño.",
      },
      {
        question: "¿Cómo se previene una nueva infección por parásitos?",
        answer:
          "El lavado de manos frecuente, el consumo de agua potable segura y el lavado adecuado de frutas y verduras son las medidas más importantes para prevenir una reinfección después del tratamiento.",
      },
    ],
    relatedConditions: ["d-giardiasis"],
    lastReviewed: "2026-11-09",
    image: "/images/services/desparasitacion-infantil.jpg",
    seo: {
      title: "Desparasitación Infantil | Pediatra en Tuxtla Gutiérrez",
      description:
        "Diagnóstico y tratamiento de parásitos intestinales en niños con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "desparasitación infantil Tuxtla Gutiérrez",
        "tratamiento de parásitos en niños Chiapas",
        "pediatra para giardiasis",
      ],
    },
  },
  {
    id: "s-revision-salud-escolar",
    slug: "revision-de-salud-escolar",
    name: "Revisión de Salud Escolar",
    description:
      "Valoración médica general requerida por las instituciones educativas, que confirma que el niño está en condiciones de salud adecuadas para asistir a la escuela.",
    longDescription:
      "La revisión de salud escolar es una valoración médica general, frecuentemente solicitada por escuelas y actividades deportivas, que incluye exploración física, revisión del esquema de vacunación y confirmación de que no existe ninguna condición que limite la participación del niño en las actividades escolares habituales. Es también una oportunidad para resolver dudas de los padres sobre el desempeño físico y de aprendizaje del niño en el entorno escolar.",
    type: "consultorio",
    duration: "20 a 30 minutos",
    recoveryTime: "No aplica",
    isPainful: false,
    benefits: [
      "Cumplimiento del requisito médico solicitado por la escuela",
      "Revisión general del esquema de vacunación",
      "Detección de cualquier condición que amerite seguimiento antes del ciclo escolar",
    ],
    postOpRecommendations: [],
    priceRange: "Desde $700 MXN, sujeto a valoración",
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "20 a 30 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Qué debo llevar a la revisión de salud escolar?",
        answer:
          "Conviene llevar la cartilla de vacunación del niño y, si la escuela proporciona un formato específico, llevarlo para que la pediatra lo complete durante la valoración.",
      },
      {
        question: "¿Esta revisión incluye estudios de laboratorio?",
        answer:
          "No de forma rutinaria; consiste principalmente en exploración física y revisión de antecedentes, salvo que la pediatra identifique algo que amerite un estudio adicional.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-11-09",
    image: "/images/services/revision-de-salud-escolar.jpg",
    seo: {
      title: "Revisión de Salud Escolar | Pediatra en Tuxtla Gutiérrez",
      description:
        "Valoración médica para la escuela de tu hijo con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "revisión de salud escolar Tuxtla Gutiérrez",
        "certificado médico escolar Chiapas",
        "pediatra para revisión escolar",
      ],
    },
  },
];
