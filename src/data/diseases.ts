import type { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "d-rinofaringitis",
    slug: "rinofaringitis",
    name: "Rinofaringitis",
    technicalName: "Rinofaringitis Aguda",
    colloquialNames: ["resfriado común", "catarro"],
    description:
      "La rinofaringitis, conocida popularmente como resfriado común o catarro, es una infección viral que inflama la nariz y la faringe. Es la causa más frecuente de consulta pediátrica por infección respiratoria y, en la gran mayoría de los casos, se resuelve sola en siete a diez días con medidas de cuidado en casa. Los niños pequeños pueden presentar varios episodios al año, especialmente al iniciar la guardería o la escuela, sin que esto signifique un problema del sistema inmunológico.",
    symptoms: [
      "Congestión y escurrimiento nasal",
      "Estornudos frecuentes",
      "Tos leve a moderada",
      "Febrícula o fiebre baja",
      "Irritabilidad y poco apetito en lactantes",
    ],
    causes: [
      "Infección por virus respiratorios (rinovirus, entre otros)",
      "Contacto cercano con otros niños en guardería o escuela",
      "Cambios bruscos de temperatura",
    ],
    riskFactors: [
      "Edad menor de 5 años",
      "Asistencia a guardería",
      "Exposición a humo de tabaco",
      "Temporada de lluvias o frío",
    ],
    mexicoStats:
      "Las infecciones respiratorias agudas, entre ellas la rinofaringitis, están entre los principales motivos de consulta pediátrica en México durante todo el año, con un repunte marcado en temporada de otoño e invierno.",
    complications: [
      "Otitis media como complicación secundaria",
      "Sinusitis en niños mayores",
      "Deshidratación leve en lactantes que rechazan el alimento",
    ],
    treatments: [
      "Hidratación abundante",
      "Lavados nasales con solución salina",
      "Control de la fiebre con medidas físicas y bajo indicación médica",
      "Reposo y vigilancia de signos de alarma en casa",
    ],
    faqs: [
      {
        question: "¿Cuántos resfriados al año son normales en un niño?",
        answer:
          "Es normal que un niño pequeño presente entre 6 y 8 episodios de rinofaringitis al año, especialmente si asiste a guardería o escuela, sin que esto indique un problema de defensas bajas.",
      },
      {
        question: "¿Cuándo un resfriado ya necesita valoración pediátrica?",
        answer:
          "Cuando la fiebre persiste más de tres días, cuando aparece dificultad para respirar, dolor de oído, o cuando el niño rechaza el alimento y los líquidos de forma persistente, es momento de una valoración con el pediatra.",
      },
      {
        question: "¿Los antibióticos curan la rinofaringitis?",
        answer:
          "No. La rinofaringitis es causada por virus, por lo que los antibióticos no tienen efecto sobre ella; el tratamiento se enfoca en aliviar los síntomas mientras el cuerpo resuelve la infección por sí mismo.",
      },
    ],
    relatedServices: ["s-atencion-respiratoria"],
    relatedSymptoms: ["sy-fiebre"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/rinofaringitis.jpg",
    seo: {
      title: "Rinofaringitis Infantil | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene resfriado común? Conoce causas, síntomas y cuándo consultar con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "rinofaringitis en niños Tuxtla Gutiérrez",
        "resfriado común infantil Chiapas",
        "pediatra para catarro en niños",
      ],
    },
  },
  {
    id: "d-otitis-media",
    slug: "otitis-media",
    name: "Otitis Media",
    technicalName: "Otitis Media Aguda",
    colloquialNames: ["infección de oído"],
    description:
      "La otitis media es la inflamación e infección del oído medio, muy frecuente en la infancia porque la trompa de Eustaquio de los niños es más corta y horizontal que la de un adulto, lo que facilita que las infecciones respiratorias se extiendan hacia el oído. Suele presentarse después de un resfriado y requiere valoración pediátrica para confirmar el diagnóstico con otoscopia y definir el manejo adecuado.",
    symptoms: [
      "Dolor de oído",
      "Fiebre",
      "Irritabilidad, llanto o el niño se jala la oreja",
      "Disminución temporal de la audición",
      "En lactantes, dificultad para dormir o alimentarse",
    ],
    causes: [
      "Extensión de una infección respiratoria viral hacia el oído medio",
      "Infección bacteriana secundaria",
      "Anatomía de la trompa de Eustaquio propia de la infancia",
    ],
    riskFactors: [
      "Edad entre 6 meses y 3 años",
      "Asistencia a guardería",
      "Exposición a humo de tabaco",
      "Antecedente de otitis previas",
    ],
    complications: [
      "Pérdida auditiva temporal",
      "Perforación timpánica",
      "Otitis media recurrente o con derrame persistente",
    ],
    treatments: [
      "Manejo del dolor y la fiebre bajo indicación médica",
      "Valoración con otoscopia para confirmar el diagnóstico",
      "Tratamiento antibiótico cuando el pediatra lo considera necesario",
      "Seguimiento para confirmar resolución completa",
    ],
    faqs: [
      {
        question: "¿Toda otitis media necesita antibiótico?",
        answer:
          "No siempre. El pediatra valora la edad del niño, la intensidad de los síntomas y los hallazgos en la otoscopia para decidir si el manejo inicial es con control del dolor y vigilancia, o si requiere tratamiento antibiótico.",
      },
      {
        question: "¿Por qué los niños tienen otitis con más frecuencia que los adultos?",
        answer:
          "Porque la trompa de Eustaquio, el conducto que conecta el oído medio con la parte de atrás de la nariz, es más corta y horizontal en los niños, lo que facilita que una infección respiratoria se extienda hacia el oído.",
      },
      {
        question: "¿Puede quedar sordera después de una otitis media?",
        answer:
          "La pérdida auditiva asociada a la otitis media suele ser temporal y se resuelve al tratar la infección; sin embargo, los episodios recurrentes o el derrame persistente deben vigilarse en consulta para descartar afectación auditiva de mayor duración.",
      },
    ],
    relatedServices: ["s-atencion-respiratoria"],
    relatedSymptoms: ["sy-fiebre", "sy-dolor-oido", "sy-perdida-audicion"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/otitis-media.jpg",
    seo: {
      title: "Otitis Media en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "Síntomas y tratamiento de la otitis media infantil. Consulta pediátrica en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "otitis media en niños Tuxtla Gutiérrez",
        "infección de oído infantil Chiapas",
        "pediatra para dolor de oído",
      ],
    },
  },
  {
    id: "d-ivu",
    slug: "infeccion-de-vias-urinarias",
    name: "Infección de Vías Urinarias",
    technicalName: "Infección del Tracto Urinario",
    colloquialNames: ["infección urinaria", "infección de orina"],
    description:
      "La infección de vías urinarias ocurre cuando bacterias, generalmente provenientes del propio intestino, llegan a la vejiga o a los riñones. En niños puede presentarse con síntomas poco específicos, especialmente en lactantes, por lo que la fiebre sin causa aparente en un bebé siempre debe hacer sospechar esta posibilidad y descartarla con un examen de orina.",
    symptoms: [
      "Ardor o dolor al orinar",
      "Necesidad de orinar con más frecuencia de lo habitual",
      "Dolor abdominal bajo",
      "Fiebre, a veces sin otro síntoma evidente en lactantes",
      "Orina con mal olor o aspecto turbio",
    ],
    causes: [
      "Paso de bacterias intestinales hacia la vía urinaria",
      "Higiene inadecuada en el aseo tras evacuar",
      "Retención voluntaria de la orina por periodos prolongados",
      "Anomalías anatómicas de la vía urinaria en algunos casos",
    ],
    riskFactors: [
      "Sexo femenino, por la anatomía de la uretra",
      "Entrenamiento para dejar el pañal con hábitos de retención",
      "Estreñimiento crónico",
      "Antecedente de infecciones urinarias previas",
    ],
    complications: [
      "Infección que asciende hasta los riñones (pielonefritis)",
      "Dolor de espalda o en el costado cuando la infección afecta el riñón",
      "Cicatrización renal si se repite sin tratamiento adecuado",
    ],
    treatments: [
      "Confirmación diagnóstica con examen general de orina",
      "Tratamiento antibiótico dirigido según indicación del pediatra",
      "Hidratación adecuada",
      "Revisión de hábitos de higiene y evacuación intestinal",
    ],
    faqs: [
      {
        question: "¿Por qué las niñas tienen más infecciones urinarias que los niños?",
        answer:
          "Porque la uretra femenina es más corta y está más cerca del área anal, lo que facilita que las bacterias intestinales lleguen con más facilidad a la vejiga.",
      },
      {
        question: "¿Una fiebre sin otro síntoma puede ser infección urinaria?",
        answer:
          "Sí, especialmente en lactantes y niños pequeños, la infección de vías urinarias puede presentarse solo con fiebre, sin dolor evidente al orinar, por lo que el pediatra suele solicitar un examen de orina ante fiebre sin causa clara.",
      },
      {
        question: "¿El estreñimiento tiene relación con las infecciones urinarias?",
        answer:
          "Sí, el estreñimiento crónico es un factor de riesgo reconocido para infecciones urinarias recurrentes en niños, por lo que su manejo suele formar parte del tratamiento integral.",
      },
    ],
    relatedSymptoms: ["sy-ardor-orinar", "sy-poliuria", "sy-fiebre", "sy-dolor-abdominal", "sy-dolor-espalda"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/infeccion-vias-urinarias.jpg",
    seo: {
      title: "Infección Urinaria Infantil | Pediatra en Tuxtla Gutiérrez",
      description:
        "Síntomas y tratamiento de la infección urinaria infantil. Consulta pediátrica en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "infección de vías urinarias en niños Tuxtla Gutiérrez",
        "infección urinaria infantil Chiapas",
        "pediatra para infección de orina",
      ],
    },
  },
  {
    id: "d-colico-lactante",
    slug: "colico-del-lactante",
    name: "Cólico del Lactante",
    technicalName: "Cólico Infantil",
    colloquialNames: ["cólicos del bebé"],
    description:
      "El cólico del lactante se define como episodios de llanto intenso y difícil de calmar, de al menos tres horas al día, tres días por semana, en un bebé por lo demás sano y que se alimenta bien. Suele iniciar en las primeras semanas de vida y mejorar de forma espontánea hacia los 3 a 4 meses. Aunque es angustiante para los padres, no indica una enfermedad grave ni afecta el crecimiento del bebé.",
    symptoms: [
      "Llanto intenso, difícil de consolar, sobre todo por la tarde-noche",
      "El bebé encoge las piernas hacia el abdomen",
      "Distensión o endurecimiento del abdomen",
      "Expulsión frecuente de gases",
    ],
    causes: [
      "Inmadurez del sistema digestivo del lactante",
      "Deglución de aire durante la toma",
      "Sensibilidad temporal a algún componente de la alimentación",
    ],
    riskFactors: [
      "Edad entre 2 semanas y 4 meses",
      "Técnica de alimentación con deglución excesiva de aire",
    ],
    complications: [
      "Estrés y agotamiento en los cuidadores",
      "Confusión con otras causas de llanto que sí requieren valoración médica",
    ],
    treatments: [
      "Técnicas de consuelo y contención física del bebé",
      "Revisión de la técnica de alimentación y del agarre",
      "Masaje abdominal suave bajo orientación pediátrica",
      "Seguimiento para confirmar que el bebé sigue ganando peso de forma adecuada",
    ],
    faqs: [
      {
        question: "¿Hasta cuándo dura el cólico del lactante?",
        answer:
          "El cólico del lactante suele mejorar de forma espontánea entre los 3 y 4 meses de edad, conforme el sistema digestivo del bebé madura.",
      },
      {
        question: "¿El cólico significa que algo le hace daño a mi bebé?",
        answer:
          "No necesariamente. El cólico del lactante se diagnostica precisamente cuando el bebé está sano, gana peso adecuadamente y se alimenta bien, a pesar de los episodios de llanto; aun así, conviene que la pediatra lo valore para confirmarlo y descartar otras causas.",
      },
      {
        question: "¿Cuándo el llanto del bebé ya no es solo cólico?",
        answer:
          "Cuando se acompaña de fiebre, vómito en proyectil, sangre en las heces, falta de aumento de peso o el bebé se ve decaído, es momento de una valoración pediátrica para descartar otras causas distintas al cólico del lactante.",
      },
    ],
    relatedServices: ["s-consulta-lactancia"],
    relatedSymptoms: ["sy-dolor-abdominal", "sy-meteorismo"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/colico-del-lactante.jpg",
    seo: {
      title: "Cólico del Lactante | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu bebé llora mucho y no sabes por qué? Conoce el cólico del lactante con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "cólico del lactante Tuxtla Gutiérrez",
        "bebé llora mucho Chiapas",
        "pediatra para cólicos del bebé",
      ],
    },
  },
  {
    id: "d-diarrea",
    slug: "enfermedad-diarreica-aguda",
    name: "Enfermedad Diarreica Aguda",
    technicalName: "Enfermedad Diarreica Aguda",
    colloquialNames: ["diarrea infantil"],
    description:
      "La enfermedad diarreica aguda es el aumento en la frecuencia y la disminución en la consistencia de las evacuaciones, generalmente de causa viral en la infancia, con una duración menor a dos semanas. El riesgo principal en niños pequeños es la deshidratación, por lo que el seguimiento del estado de hidratación es la parte más importante del manejo, más que la diarrea en sí misma.",
    symptoms: [
      "Evacuaciones líquidas o semilíquidas frecuentes",
      "Dolor abdominal tipo cólico",
      "Náuseas y vómito ocasional",
      "Fiebre en algunos casos",
      "Signos de deshidratación: boca seca, poca orina, decaimiento",
    ],
    causes: [
      "Infección viral (la causa más común en niños)",
      "Infección bacteriana o parasitaria",
      "Intolerancia alimentaria transitoria tras un cuadro infeccioso",
    ],
    riskFactors: [
      "Edad menor de 5 años",
      "Asistencia a guardería",
      "Acceso limitado a agua potable",
      "Lavado de manos inadecuado",
    ],
    complications: [
      "Deshidratación leve a grave",
      "Desequilibrio de electrolitos",
      "Intolerancia transitoria a la lactosa tras el cuadro agudo",
    ],
    treatments: [
      "Plan de hidratación oral según el grado de deshidratación",
      "Continuar la alimentación habitual, incluyendo lactancia",
      "Vigilancia de signos de alarma en casa",
      "Valoración médica si hay sangre en las evacuaciones o fiebre persistente",
    ],
    faqs: [
      {
        question: "¿Debo suspender la leche si mi hijo tiene diarrea?",
        answer:
          "No, lo recomendado es continuar la lactancia materna o la alimentación habitual del niño durante la diarrea, salvo indicación específica de la pediatra; suspender la alimentación no acelera la recuperación.",
      },
      {
        question: "¿Cómo sé si mi hijo se está deshidratando?",
        answer:
          "Señales de deshidratación incluyen boca seca, llanto sin lágrimas, orina escasa u oscura, decaimiento marcado o los ojos hundidos; ante cualquiera de estos signos se debe buscar valoración médica de inmediato.",
      },
      {
        question: "¿Cuándo la diarrea ya requiere ver a la pediatra?",
        answer:
          "Cuando hay sangre o moco en las evacuaciones, fiebre que no cede, vómito que impide la hidratación oral, o signos de deshidratación, el niño debe ser valorado por la pediatra sin esperar a que mejore solo.",
      },
    ],
    relatedServices: ["s-atencion-gastrointestinal"],
    relatedSymptoms: ["sy-vomitos", "sy-nauseas", "sy-dolor-abdominal", "sy-fiebre"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/enfermedad-diarreica-aguda.jpg",
    seo: {
      title: "Diarrea Infantil Aguda | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene diarrea? Conoce causas, cuidados e hidratación con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "diarrea infantil Tuxtla Gutiérrez",
        "enfermedad diarreica aguda en niños Chiapas",
        "pediatra para diarrea",
      ],
    },
  },
  {
    id: "d-virales-exantematicas",
    slug: "enfermedades-viricas-exantematicas",
    name: "Enfermedades Víricas Exantemáticas",
    technicalName: "Enfermedades Exantemáticas de la Infancia",
    colloquialNames: ["enfermedades con ronchas", "virus con sarpullido"],
    description:
      "Las enfermedades víricas exantemáticas son infecciones causadas por virus que, además de fiebre y malestar general, producen un sarpullido o exantema característico en la piel. Son muy frecuentes en la infancia y, en su mayoría, siguen un curso benigno y autolimitado; identificar el patrón del exantema ayuda a la pediatra a orientar el diagnóstico y a definir si se requiere alguna medida adicional de cuidado o aislamiento.",
    symptoms: [
      "Erupción o ronchas en la piel",
      "Fiebre, generalmente antes o al inicio del exantema",
      "Malestar general y dolor muscular",
      "En algunos casos, ganglios inflamados",
    ],
    causes: [
      "Infección por distintos virus propios de la infancia",
      "Contacto cercano con otros niños contagiados",
    ],
    riskFactors: [
      "Falta de esquema de vacunación completo",
      "Asistencia a guardería o escuela",
      "Contacto cercano con un caso activo",
    ],
    complications: [
      "Sobreinfección bacteriana de las lesiones de piel si se rascan",
      "Complicaciones específicas según el virus, poco frecuentes con buen seguimiento",
    ],
    treatments: [
      "Manejo de la fiebre y el malestar general",
      "Cuidado de la piel para evitar sobreinfección",
      "Vigilancia del patrón del exantema en consulta",
      "Verificación y actualización del esquema de vacunación",
    ],
    faqs: [
      {
        question: "¿Todas las enfermedades con sarpullido y fiebre son iguales?",
        answer:
          "No. Existen distintos virus que producen exantemas con patrones diferentes en la piel; por eso es importante que la pediatra valore el caso en persona para identificar de cuál se trata y orientar el cuidado adecuado.",
      },
      {
        question: "¿La vacunación previene estas enfermedades?",
        answer:
          "El esquema de vacunación vigente protege contra varias de las enfermedades exantemáticas más comunes de la infancia, por lo que mantenerlo al día es una de las medidas de prevención más importantes.",
      },
      {
        question: "¿Cuándo debo llevar a mi hijo a consulta si tiene ronchas y fiebre?",
        answer:
          "Ante cualquier combinación de fiebre y sarpullido en un niño conviene una valoración pediátrica para identificar la causa, y acudir de inmediato si hay dificultad para respirar, decaimiento marcado o las lesiones de piel se ven infectadas.",
      },
    ],
    relatedServices: ["s-vacunacion"],
    relatedSymptoms: ["sy-fiebre", "sy-dolor-muscular"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/enfermedades-viricas-exantematicas.jpg",
    seo: {
      title: "Enfermedades Exantemáticas | Pediatra en Tuxtla Gutiérrez",
      description:
        "Fiebre con sarpullido en niños: causas y cuidados con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "enfermedades exantemáticas en niños Tuxtla Gutiérrez",
        "sarpullido con fiebre infantil Chiapas",
        "pediatra para ronchas con fiebre",
      ],
    },
  },
  {
    id: "d-amigdalitis",
    slug: "amigdalitis",
    name: "Amigdalitis",
    technicalName: "Amigdalitis Aguda",
    colloquialNames: ["anginas inflamadas"],
    description:
      "La amigdalitis es la inflamación de las amígdalas, las estructuras ubicadas al fondo de la garganta, generalmente causada por virus o bacterias. Es muy común entre los 5 y los 15 años y suele presentarse con dolor de garganta intenso y fiebre. Distinguir entre un origen viral o bacteriano es clave, ya que solo la segunda se beneficia de tratamiento antibiótico, por lo que la valoración pediátrica es necesaria antes de iniciar cualquier manejo.",
    symptoms: [
      "Dolor de garganta intenso",
      "Fiebre",
      "Amígdalas enrojecidas o con placas blanquecinas",
      "Dificultad o molestia al tragar",
      "Dolor de oído referido",
    ],
    causes: [
      "Infección viral (la causa más frecuente)",
      "Infección bacteriana, incluyendo estreptococo del grupo A",
    ],
    riskFactors: [
      "Edad escolar, entre 5 y 15 años",
      "Contacto cercano con otros niños contagiados",
      "Temporada de frío",
    ],
    complications: [
      "Absceso periamigdalino en casos no tratados",
      "Complicaciones renales o cardíacas asociadas a estreptococo no tratado",
      "Dificultad para respirar en casos de inflamación severa",
    ],
    treatments: [
      "Valoración para distinguir origen viral o bacteriano",
      "Manejo del dolor y la fiebre",
      "Tratamiento antibiótico cuando se confirma origen bacteriano",
      "Hidratación y alimentos de fácil deglución durante el cuadro agudo",
    ],
    faqs: [
      {
        question: "¿Toda amigdalitis necesita antibiótico?",
        answer:
          "No. La mayoría de los casos de amigdalitis en niños son de origen viral y no requieren antibiótico; solo cuando la pediatra identifica datos de infección bacteriana, como el estreptococo, se indica tratamiento antibiótico.",
      },
      {
        question: "¿Cómo se diferencia la amigdalitis viral de la bacteriana?",
        answer:
          "La pediatra se apoya en la exploración física, la edad del niño y, en algunos casos, una prueba específica para estreptococo, ya que los síntomas por sí solos no siempre son suficientes para distinguir entre ambos orígenes.",
      },
      {
        question: "¿Cuándo la amigdalitis es urgencia?",
        answer:
          "Si el niño tiene dificultad para respirar, no puede tragar ni su propia saliva, o presenta babeo excesivo junto con fiebre alta, debe recibir atención médica de urgencia de inmediato.",
      },
    ],
    relatedServices: ["s-atencion-respiratoria"],
    relatedSymptoms: ["sy-fiebre", "sy-dolor-oido", "sy-dificultad-respirar"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/amigdalitis.jpg",
    seo: {
      title: "Amigdalitis en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "Dolor de garganta y fiebre en niños: causas y tratamiento de la amigdalitis con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "amigdalitis en niños Tuxtla Gutiérrez",
        "dolor de garganta infantil Chiapas",
        "pediatra para anginas inflamadas",
      ],
    },
  },
  {
    id: "d-giardiasis",
    slug: "giardiasis",
    name: "Giardiasis",
    technicalName: "Giardiasis Intestinal",
    colloquialNames: ["parásito giardia", "lombrices"],
    description:
      "La giardiasis es una infección intestinal causada por el parásito Giardia lamblia, que se transmite por agua o alimentos contaminados. Es una de las parasitosis intestinales más comunes en la edad pediátrica en zonas donde el acceso a agua potable es limitado, y puede causar síntomas digestivos prolongados si no se identifica y trata a tiempo.",
    symptoms: [
      "Dolor abdominal tipo cólico",
      "Distensión y gases abundantes",
      "Diarrea prolongada o intermitente",
      "Náuseas",
      "Pérdida de apetito",
    ],
    causes: [
      "Consumo de agua contaminada con el parásito",
      "Alimentos mal lavados o contaminados",
      "Contacto con superficies u objetos contaminados, común en guarderías",
    ],
    riskFactors: [
      "Acceso limitado a agua potable segura",
      "Asistencia a guardería",
      "Higiene de manos inadecuada antes de comer",
    ],
    complications: [
      "Deshidratación si la diarrea es prolongada",
      "Deficiencia de nutrientes por mala absorción intestinal si no se trata",
      "Retraso temporal en la ganancia de peso",
    ],
    treatments: [
      "Confirmación diagnóstica con estudio de heces",
      "Tratamiento antiparasitario específico indicado por la pediatra",
      "Medidas de higiene para evitar reinfección",
      "Hidratación adecuada mientras persisten los síntomas",
    ],
    faqs: [
      {
        question: "¿Cómo se contagia la giardiasis en los niños?",
        answer:
          "La giardiasis se transmite principalmente por consumo de agua o alimentos contaminados con el parásito, o por contacto con manos u objetos contaminados, algo frecuente en ambientes de guardería.",
      },
      {
        question: "¿La giardiasis se cura completamente?",
        answer:
          "Sí, la giardiasis se trata de forma efectiva con el antiparasitario específico indicado por la pediatra, junto con medidas de higiene para evitar una nueva infección.",
      },
      {
        question: "¿Qué estudio confirma la giardiasis?",
        answer:
          "El diagnóstico se confirma con un estudio de heces solicitado por la pediatra, que identifica la presencia del parásito o sus quistes.",
      },
    ],
    relatedServices: ["s-desparasitacion", "s-atencion-gastrointestinal"],
    relatedSymptoms: ["sy-dolor-abdominal", "sy-meteorismo", "sy-nauseas", "sy-vomitos"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/giardiasis.jpg",
    seo: {
      title: "Giardiasis en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dolor abdominal y diarrea prolongada? Conoce la giardiasis con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "giardiasis en niños Tuxtla Gutiérrez",
        "parásitos intestinales infantiles Chiapas",
        "pediatra para desparasitación",
      ],
    },
  },
  {
    id: "d-reflujo",
    slug: "reflujo-gastroesofagico-del-lactante",
    name: "Reflujo Gastroesofágico del Lactante",
    technicalName: "Reflujo Gastroesofágico del Lactante",
    colloquialNames: ["bebé regurgitador", "reflujo del bebé"],
    description:
      "El reflujo gastroesofágico del lactante es el regreso del contenido del estómago hacia el esófago, muy común en los primeros meses de vida por la inmadurez del esfínter que separa ambas estructuras. En la mayoría de los bebés es un proceso normal del desarrollo que mejora de forma espontánea hacia el año de edad y no requiere tratamiento, salvo que interfiera con la ganancia de peso o cause molestia importante.",
    symptoms: [
      "Regurgitaciones frecuentes después de comer",
      "Llanto o irritabilidad asociada a las tomas",
      "Arqueo de la espalda durante o después de alimentarse",
      "En casos más intensos, rechazo parcial del alimento",
    ],
    causes: [
      "Inmadurez del esfínter esofágico inferior propia de la edad",
      "Volumen grande de las tomas en relación con la capacidad gástrica",
    ],
    riskFactors: [
      "Edad menor de 6 meses",
      "Prematuridad",
      "Sobrealimentación en cada toma",
    ],
    complications: [
      "Falta de ganancia de peso adecuada en casos persistentes",
      "Irritación del esófago si el reflujo es frecuente e intenso",
    ],
    treatments: [
      "Fraccionar las tomas en menor volumen y mayor frecuencia",
      "Mantener al bebé en posición semi-incorporada tras alimentarlo",
      "Técnica adecuada de eructo después de cada toma",
      "Seguimiento del peso y la talla en consulta pediátrica",
    ],
    faqs: [
      {
        question: "¿Mi bebé necesita medicamento para el reflujo?",
        answer:
          "La mayoría de los bebés con reflujo gastroesofágico no necesitan tratamiento farmacológico; las medidas de alimentación y posición suelen ser suficientes, y es la pediatra quien valora si se requiere algo adicional según cada caso.",
      },
      {
        question: "¿Hasta qué edad es normal que el bebé regurgite?",
        answer:
          "Es común que las regurgitaciones disminuyan de forma notable hacia los 6 meses y se resuelvan casi por completo alrededor del año de edad, conforme madura el esfínter esofágico.",
      },
      {
        question: "¿Cuándo el reflujo del bebé ya es motivo de preocupación?",
        answer:
          "Cuando el bebé no gana peso de forma adecuada, rechaza el alimento de forma persistente, o el vómito es en proyectil, se requiere valoración pediátrica para descartar otras causas distintas al reflujo normal del lactante.",
      },
    ],
    relatedServices: ["s-consulta-lactancia"],
    relatedSymptoms: ["sy-vomitos", "sy-dolor-abdominal"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/reflujo-gastroesofagico-del-lactante.jpg",
    seo: {
      title: "Reflujo del Lactante | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu bebé regurgita con frecuencia? Conoce el reflujo del lactante con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "reflujo del lactante Tuxtla Gutiérrez",
        "bebé regurgita mucho Chiapas",
        "pediatra para reflujo del bebé",
      ],
    },
  },
  {
    id: "d-ictericia",
    slug: "ictericia-neonatal",
    name: "Ictericia Neonatal",
    technicalName: "Ictericia del Recién Nacido",
    colloquialNames: ["bebé amarillo"],
    description:
      "La ictericia neonatal es la coloración amarillenta de la piel y los ojos del recién nacido, causada por un exceso de bilirrubina en la sangre. Es muy frecuente en la primera semana de vida, especialmente mientras el hígado del bebé aún está madurando, y en la mayoría de los casos es leve y se resuelve sola; sin embargo, requiere vigilancia pediátrica porque en algunos casos los niveles de bilirrubina pueden elevarse lo suficiente como para necesitar tratamiento.",
    symptoms: [
      "Coloración amarillenta de la piel, que inicia en la cara y puede extenderse al cuerpo",
      "Coloración amarillenta de la parte blanca de los ojos",
      "Somnolencia excesiva que dificulta la alimentación",
    ],
    causes: [
      "Inmadurez hepática fisiológica del recién nacido",
      "Incompatibilidad de grupo sanguíneo entre madre e hijo",
      "Lactancia materna insuficiente en los primeros días",
    ],
    riskFactors: [
      "Prematuridad",
      "Pérdida de peso mayor a la esperada en los primeros días",
      "Hermano previo con ictericia que requirió tratamiento",
    ],
    complications: [
      "Elevación importante de bilirrubina si no se vigila a tiempo",
      "Afectación neurológica en casos extremos no tratados, poco frecuente con seguimiento adecuado",
    ],
    treatments: [
      "Vigilancia clínica y, si es necesario, medición de bilirrubina",
      "Favorecer tomas de lactancia frecuentes y efectivas",
      "Fototerapia en los casos que lo requieran, indicada por el pediatra",
      "Control de peso y coloración en los primeros días de vida",
    ],
    faqs: [
      {
        question: "¿Toda ictericia en el recién nacido es peligrosa?",
        answer:
          "No, la mayoría de los casos de ictericia neonatal son leves, fisiológicos, y se resuelven solos en una a dos semanas; aun así, todo recién nacido con ictericia debe ser valorado por su pediatra para confirmar que los niveles son seguros.",
      },
      {
        question: "¿Qué puedo hacer en casa si mi bebé tiene ictericia leve?",
        answer:
          "Favorecer tomas de lactancia frecuentes ayuda a eliminar la bilirrubina más rápido; la exposición solar directa no se recomienda como tratamiento y cualquier manejo adicional debe ser indicado por la pediatra.",
      },
      {
        question: "¿Cuándo la ictericia del recién nacido es urgencia?",
        answer:
          "Si la coloración amarilla aparece en las primeras 24 horas de vida, se extiende a brazos y piernas, o el bebé está muy somnoliento y no se alimenta bien, se debe buscar valoración médica de inmediato.",
      },
    ],
    relatedServices: ["s-valoracion-recien-nacido", "s-tamiz-neonatal"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/ictericia-neonatal.jpg",
    seo: {
      title: "Ictericia Neonatal | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu recién nacido se ve amarillo? Conoce la ictericia neonatal con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "ictericia neonatal Tuxtla Gutiérrez",
        "bebé recién nacido amarillo Chiapas",
        "pediatra para ictericia del recién nacido",
      ],
    },
  },
  {
    id: "d-apnea-prematuridad",
    slug: "apnea-de-la-prematuridad",
    name: "Apnea de la Prematuridad",
    technicalName: "Apnea de la Prematuridad",
    colloquialNames: ["pausas respiratorias del bebé prematuro"],
    description:
      "La apnea de la prematuridad consiste en pausas respiratorias de más de 20 segundos, o pausas más breves acompañadas de disminución de la frecuencia cardíaca o del color del bebé, que ocurren en recién nacidos prematuros debido a la inmadurez del centro respiratorio cerebral. Es un hallazgo esperado según el grado de prematuridad y se vigila de cerca durante la estancia hospitalaria y, en algunos casos, durante el seguimiento posterior.",
    symptoms: [
      "Pausas en la respiración mayores a 20 segundos",
      "Disminución de la frecuencia cardíaca durante el episodio",
      "Cambio de coloración de la piel durante la pausa respiratoria",
    ],
    causes: [
      "Inmadurez del centro respiratorio cerebral propia de la prematuridad",
      "Menor grado de prematuridad, mayor frecuencia del hallazgo",
    ],
    riskFactors: [
      "Nacimiento antes de las 34 semanas de gestación",
      "Bajo peso al nacer",
    ],
    complications: [
      "Disminución de oxígeno si los episodios no se detectan a tiempo",
      "Necesidad de monitoreo prolongado según la severidad",
    ],
    treatments: [
      "Monitoreo continuo durante la hospitalización",
      "Estimulación táctil durante los episodios",
      "Manejo médico especializado según la severidad y la edad gestacional",
      "Seguimiento pediátrico tras el egreso hospitalario",
    ],
    faqs: [
      {
        question: "¿Todos los bebés prematuros tienen apnea de la prematuridad?",
        answer:
          "No todos, pero es un hallazgo frecuente y esperado mientras menor sea la edad gestacional al nacer, por lo que los bebés prematuros se monitorean de cerca durante su estancia hospitalaria precisamente para detectarla a tiempo.",
      },
      {
        question: "¿La apnea de la prematuridad se resuelve con el tiempo?",
        answer:
          "Sí, en la mayoría de los casos se resuelve conforme el sistema nervioso del bebé madura, generalmente antes de llegar a la edad que correspondería a un nacimiento a término.",
      },
      {
        question: "¿Qué debo vigilar en casa si mi bebé prematuro tuvo apnea?",
        answer:
          "La pediatra indicará, según cada caso, qué signos vigilar en casa tras el egreso hospitalario; ante cualquier pausa respiratoria o cambio de color se debe buscar atención médica inmediata.",
      },
    ],
    relatedServices: ["s-valoracion-recien-nacido"],
    relatedSymptoms: ["sy-dificultad-respirar"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/apnea-de-la-prematuridad.jpg",
    seo: {
      title: "Apnea de la Prematuridad | Pediatra en Tuxtla Gutiérrez",
      description:
        "Pausas respiratorias en bebés prematuros: qué significan. Consulta con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "apnea de la prematuridad Tuxtla Gutiérrez",
        "bebé prematuro deja de respirar Chiapas",
        "pediatra para recién nacido prematuro",
      ],
    },
  },
  {
    id: "d-eritema-toxico",
    slug: "eritema-toxico-del-neonato",
    name: "Eritema Tóxico del Neonato",
    technicalName: "Eritema Tóxico Neonatal",
    colloquialNames: ["ronchas del recién nacido"],
    description:
      "El eritema tóxico del neonato es una erupción en la piel benigna y muy común en recién nacidos sanos, que aparece típicamente entre el segundo y quinto día de vida como pequeñas manchas rojizas con un punto central blanco o amarillento. A pesar de su nombre, no está relacionado con ninguna toxina ni representa un riesgo para el bebé: desaparece sola, generalmente en una a dos semanas, sin dejar marca.",
    symptoms: [
      "Manchas rojizas en la piel con un punto central claro",
      "Lesiones que aparecen y desaparecen en distintas zonas del cuerpo",
      "Ausencia de fiebre o malestar asociado",
    ],
    causes: [
      "Respuesta inmunológica normal de adaptación de la piel del recién nacido",
    ],
    riskFactors: [
      "Recién nacidos a término, más frecuente que en prematuros",
    ],
    complications: [
      "Ninguna complicación real; el principal riesgo es confundirlo con otra condición de piel que sí requiera tratamiento",
    ],
    treatments: [
      "No requiere tratamiento",
      "Confirmación del diagnóstico por la pediatra para descartar otras causas de erupción",
      "Cuidado habitual de la piel del recién nacido",
    ],
    faqs: [
      {
        question: "¿El eritema tóxico del neonato es contagioso?",
        answer:
          "No, el eritema tóxico del neonato no es una infección ni es contagioso; es una respuesta normal y benigna de la piel del recién nacido que se resuelve sola.",
      },
      {
        question: "¿Necesito llevar a mi bebé al pediatra si tiene estas ronchitas?",
        answer:
          "Sí, aunque el eritema tóxico es benigno, conviene que la pediatra lo valore para confirmar el diagnóstico y descartar otras condiciones de piel que pueden parecerse pero sí requieren tratamiento.",
      },
      {
        question: "¿Deja marcas en la piel del bebé?",
        answer:
          "No, el eritema tóxico del neonato desaparece por completo sin dejar cicatriz ni marca en la piel, generalmente dentro de las primeras dos semanas de vida.",
      },
    ],
    relatedServices: ["s-valoracion-recien-nacido"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/eritema-toxico-del-neonato.jpg",
    seo: {
      title: "Eritema Tóxico del Neonato | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu recién nacido tiene ronchitas en la piel? Conoce el eritema tóxico neonatal con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "eritema tóxico del neonato Tuxtla Gutiérrez",
        "ronchas en recién nacido Chiapas",
        "pediatra para piel del recién nacido",
      ],
    },
  },
  {
    id: "d-sdr-neonatal",
    slug: "sindrome-de-dificultad-respiratoria-en-neonatos",
    name: "Síndrome de Dificultad Respiratoria en Neonatos",
    technicalName: "Síndrome de Dificultad Respiratoria Neonatal",
    colloquialNames: ["pulmones inmaduros del bebé"],
    description:
      "El síndrome de dificultad respiratoria en neonatos ocurre principalmente en bebés prematuros cuyos pulmones aún no producen suficiente surfactante, una sustancia necesaria para que los pulmones se mantengan expandidos al respirar. Se manifiesta en las primeras horas de vida con signos de esfuerzo respiratorio y requiere manejo hospitalario especializado, con un pronóstico que mejora de forma importante cuanto antes se identifica y se trata.",
    symptoms: [
      "Respiración rápida y con esfuerzo visible",
      "Quejido al respirar",
      "Hundimiento de las costillas con cada respiración",
      "Coloración azulada de piel o labios en casos más severos",
    ],
    causes: [
      "Producción insuficiente de surfactante pulmonar por inmadurez",
      "Nacimiento prematuro, principal factor causal",
    ],
    riskFactors: [
      "Prematuridad, especialmente antes de las 34 semanas",
      "Diabetes materna durante el embarazo",
      "Cesárea sin trabajo de parto previo",
    ],
    complications: [
      "Necesidad de apoyo respiratorio especializado",
      "Riesgo de complicaciones pulmonares a mediano plazo si no se maneja a tiempo",
    ],
    treatments: [
      "Manejo hospitalario especializado en unidad neonatal",
      "Apoyo respiratorio según la severidad del caso",
      "Administración de surfactante cuando está indicado",
      "Seguimiento pediátrico estrecho tras el egreso",
    ],
    faqs: [
      {
        question: "¿Todos los bebés prematuros tienen síndrome de dificultad respiratoria?",
        answer:
          "No todos, pero el riesgo aumenta mientras menor sea la edad gestacional al nacer, por lo que todo bebé prematuro es vigilado de cerca en las primeras horas de vida para detectar signos de dificultad respiratoria a tiempo.",
      },
      {
        question: "¿Se puede prevenir este síndrome?",
        answer:
          "En embarazos con riesgo conocido de parto prematuro, existen medidas médicas que ayudan a acelerar la maduración pulmonar del bebé antes del nacimiento; tu médico obstetra es quien valora esta posibilidad según cada caso.",
      },
      {
        question: "¿Qué seguimiento necesita el bebé después de un síndrome de dificultad respiratoria?",
        answer:
          "Requiere seguimiento pediátrico cercano tras el egreso hospitalario para vigilar el desarrollo pulmonar y general del bebé, con la frecuencia que indique el equipo médico según la severidad del caso.",
      },
    ],
    relatedServices: ["s-valoracion-recien-nacido", "s-tamiz-neonatal"],
    relatedSymptoms: ["sy-dificultad-respirar"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/sindrome-de-dificultad-respiratoria-en-neonatos.jpg",
    seo: {
      title: "Dificultad Respiratoria Neonatal | Pediatra Tuxtla",
      description:
        "Dificultad para respirar en el recién nacido: qué es y cómo se maneja. Pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dificultad respiratoria en recién nacidos Tuxtla Gutiérrez",
        "bebé prematuro pulmones Chiapas",
        "pediatra para recién nacido con dificultad para respirar",
      ],
    },
  },
  {
    id: "d-faringitis",
    slug: "faringitis",
    name: "Faringitis",
    technicalName: "Faringitis Aguda",
    colloquialNames: ["garganta irritada"],
    description:
      "La faringitis es la inflamación de la faringe, la parte posterior de la garganta, generalmente causada por virus y, con menor frecuencia, por bacterias. Es una de las causas más comunes de dolor de garganta en la infancia y suele acompañarse de otros síntomas de vías respiratorias altas, resolviéndose en la mayoría de los casos en pocos días con medidas de cuidado general.",
    symptoms: [
      "Dolor o molestia al tragar",
      "Garganta enrojecida",
      "Fiebre",
      "Tos seca ocasional",
      "Dolor de oído referido en algunos casos",
    ],
    causes: [
      "Infección viral de vías respiratorias altas",
      "Infección bacteriana con menor frecuencia",
      "Irritación por aire seco o contaminación",
    ],
    riskFactors: [
      "Contacto cercano con otros niños enfermos",
      "Temporada de frío",
      "Exposición a humo o contaminación ambiental",
    ],
    complications: [
      "Extensión de la infección hacia oído medio",
      "Dificultad para tragar e hidratarse adecuadamente en casos intensos",
    ],
    treatments: [
      "Hidratación abundante",
      "Manejo del dolor y la fiebre",
      "Alimentos de fácil deglución durante el cuadro agudo",
      "Valoración de origen bacteriano cuando el cuadro lo sugiere",
    ],
    faqs: [
      {
        question: "¿La faringitis es lo mismo que la amigdalitis?",
        answer:
          "Son condiciones relacionadas pero no idénticas: la faringitis es la inflamación de la faringe en general, mientras que la amigdalitis se refiere específicamente a la inflamación de las amígdalas; ambas pueden presentarse juntas y la pediatra distingue cada caso en la exploración.",
      },
      {
        question: "¿Cuánto dura una faringitis viral en niños?",
        answer:
          "Una faringitis de origen viral suele mejorar en 3 a 5 días con medidas de cuidado general; si el dolor de garganta persiste más tiempo o empeora, conviene una valoración pediátrica.",
      },
      {
        question: "¿Qué puedo dar a mi hijo para aliviar el dolor de garganta?",
        answer:
          "La hidratación frecuente y los alimentos suaves ayudan a aliviar la molestia; cualquier medicamento para el dolor o la fiebre debe indicarlo la pediatra según la edad y el peso del niño.",
      },
    ],
    relatedServices: ["s-atencion-respiratoria"],
    relatedSymptoms: ["sy-fiebre", "sy-dolor-oido", "sy-dificultad-respirar"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/faringitis.jpg",
    seo: {
      title: "Faringitis en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "Dolor de garganta en niños: causas y cuidados de la faringitis con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "faringitis en niños Tuxtla Gutiérrez",
        "garganta irritada infantil Chiapas",
        "pediatra para dolor de garganta",
      ],
    },
  },
  {
    id: "d-laringitis",
    slug: "laringitis",
    name: "Laringitis",
    technicalName: "Laringitis Aguda (Crup)",
    colloquialNames: ["crup", "tos de perro"],
    description:
      "La laringitis, conocida en pediatría como crup, es la inflamación de la laringe causada generalmente por un virus, que provoca una tos característica que suena como ladrido y, en algunos casos, un sonido agudo al inspirar. Es más frecuente en niños entre 6 meses y 3 años por el diámetro más estrecho de su vía aérea, y aunque suele ser leve, requiere vigilancia porque puede progresar a dificultad respiratoria importante.",
    symptoms: [
      "Tos seca y áspera, descrita como \"tos de perro\"",
      "Ronquera o cambios en la voz",
      "Sonido agudo al inspirar (estridor)",
      "Fiebre",
      "Síntomas que empeoran durante la noche",
    ],
    causes: [
      "Infección viral de la vía aérea superior",
      "Inflamación de la laringe y la tráquea",
    ],
    riskFactors: [
      "Edad entre 6 meses y 3 años",
      "Temporada de otoño e invierno",
      "Antecedente de episodios previos de crup",
    ],
    complications: [
      "Progresión a dificultad respiratoria significativa",
      "Necesidad de atención médica urgente en casos moderados a severos",
    ],
    treatments: [
      "Mantener al niño tranquilo, ya que el llanto puede empeorar el estridor",
      "Exposición a aire fresco o húmedo, que suele aliviar los síntomas",
      "Valoración médica para definir si se requiere tratamiento adicional",
      "Vigilancia estrecha durante la noche, cuando los síntomas suelen intensificarse",
    ],
    faqs: [
      {
        question: "¿Por qué la laringitis empeora en la noche?",
        answer:
          "Es un patrón característico del crup: los síntomas, especialmente la tos y el sonido al respirar, tienden a intensificarse durante la noche, por lo que muchos niños son llevados a valoración médica en ese horario.",
      },
      {
        question: "¿Qué hago en casa si mi hijo tiene tos de laringitis?",
        answer:
          "Mantener al niño calmado y exponerlo a aire fresco o al vapor húmedo del baño suele ayudar a aliviar el estridor mientras se busca valoración médica, especialmente si es la primera vez que presenta estos síntomas.",
      },
      {
        question: "¿Cuándo la laringitis es urgencia médica?",
        answer:
          "Si el niño presenta dificultad para respirar en reposo, el sonido agudo al inspirar persiste incluso tranquilo, o se observa coloración azulada en labios, se debe buscar atención médica de urgencia de inmediato.",
      },
    ],
    relatedServices: ["s-atencion-respiratoria"],
    relatedSymptoms: ["sy-dificultad-respirar", "sy-fiebre"],
    lastReviewed: "2026-11-09",
    image: "/images/diseases/laringitis.jpg",
    seo: {
      title: "Laringitis (Crup) en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "Tos de perro y ronquera en niños: conoce la laringitis o crup con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "laringitis en niños Tuxtla Gutiérrez",
        "crup infantil Chiapas",
        "pediatra para tos de perro",
      ],
    },
  },
];
