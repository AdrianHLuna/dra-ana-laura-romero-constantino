import type { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sy-nauseas",
    slug: "nauseas",
    name: "Náuseas",
    colloquialNames: ["ganas de vomitar", "asco"],
    description:
      "Las náuseas en niños son la sensación de malestar en el estómago que suele preceder al vómito. En la edad pediátrica son frecuentes durante infecciones digestivas como la enfermedad diarreica aguda o la giardiasis, y su evaluación incluye revisar si se acompañan de otros síntomas que orienten hacia la causa.",
    causes: [
      "Enfermedad diarreica aguda",
      "Giardiasis u otra infección intestinal",
      "Intoxicación alimentaria",
      "Mareo por movimiento en niños pequeños",
    ],
    alarmSigns: [
      "Náusea con vómito que impide la hidratación oral por varias horas",
      "Náusea con dolor abdominal intenso y localizado",
      "Náusea con decaimiento marcado o somnolencia excesiva",
      "Náusea acompañada de dolor de cabeza intenso y rigidez de cuello",
    ],
    whyConsult:
      "Cuando las náuseas son persistentes o se acompañan de otros síntomas digestivos, pueden ser la primera señal de una infección intestinal, como la enfermedad diarreica aguda o la giardiasis, que la pediatra debe valorar para definir el manejo adecuado.",
    faqs: [
      {
        question: "¿Cuándo las náuseas de mi hijo ya son motivo de consulta?",
        answer:
          "Cuando las náuseas se acompañan de vómito repetido, dolor abdominal intenso, fiebre o duran más de un día, conviene una valoración pediátrica para identificar la causa.",
      },
      {
        question: "¿Qué puedo dar de comer a un niño con náuseas?",
        answer:
          "Se recomiendan alimentos suaves y en pequeñas cantidades, evitando forzar la alimentación; la hidratación frecuente en sorbos pequeños suele tolerarse mejor que las comidas completas mientras persiste la náusea.",
      },
    ],
    relatedConditions: ["d-diarrea", "d-giardiasis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/nauseas.jpg",
    seo: {
      title: "Náuseas en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene náuseas frecuentes? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "náuseas en niños Tuxtla Gutiérrez",
        "asco y malestar estomacal infantil Chiapas",
        "pediatra para náuseas",
      ],
    },
  },
  {
    id: "sy-vomitos",
    slug: "vomitos",
    name: "Vómitos",
    colloquialNames: ["devolver el estómago"],
    description:
      "El vómito en niños es la expulsión forzada del contenido gástrico y es un síntoma común en infecciones digestivas, reflujo del lactante y otras condiciones. Lo más importante para la pediatra no es el vómito en sí, sino evaluar la hidratación del niño y si hay signos que orienten hacia una causa que requiera atención específica.",
    causes: [
      "Enfermedad diarreica aguda",
      "Reflujo gastroesofágico del lactante",
      "Giardiasis u otra infección intestinal",
      "Infecciones fuera del aparato digestivo que también causan vómito en niños pequeños",
    ],
    alarmSigns: [
      "Vómito en proyectil repetido, especialmente en lactantes",
      "Vómito con sangre o con aspecto de café molido",
      "Vómito que impide la hidratación oral por varias horas",
      "Vómito acompañado de decaimiento marcado o dificultad para despertar",
    ],
    whyConsult:
      "El vómito persistente o repetido puede llevar a deshidratación con rapidez en niños pequeños, y en algunos casos es señal de una condición que requiere valoración específica, como el reflujo del lactante o una infección intestinal.",
    faqs: [
      {
        question: "¿Cuándo el vómito de mi hijo es urgencia?",
        answer:
          "El vómito es urgencia cuando es en proyectil y repetido, cuando contiene sangre, o cuando el niño muestra signos de deshidratación como boca seca, poca orina o decaimiento marcado.",
      },
      {
        question: "¿Debo dar líquidos inmediatamente después de que mi hijo vomita?",
        answer:
          "Se recomienda esperar unos minutos y después ofrecer líquidos en sorbos pequeños y frecuentes, en lugar de grandes cantidades de una sola vez, para favorecer la tolerancia y evitar un nuevo vómito.",
      },
    ],
    relatedConditions: ["d-diarrea", "d-giardiasis", "d-reflujo"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/vomitos.jpg",
    seo: {
      title: "Vómitos en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo vomita con frecuencia? Conoce las causas y cuándo consultar con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "vómitos en niños Tuxtla Gutiérrez",
        "bebé vomita Chiapas",
        "pediatra para vómito infantil",
      ],
    },
  },
  {
    id: "sy-dolor-abdominal",
    slug: "dolor-abdominal",
    name: "Dolor Abdominal",
    colloquialNames: ["dolor de panza", "dolor de estómago"],
    description:
      "El dolor abdominal es uno de los motivos de consulta más frecuentes en pediatría y puede tener causas muy variadas, desde el cólico del lactante en bebés hasta infecciones intestinales o urinarias en niños mayores. La localización, duración e intensidad del dolor ayudan a la pediatra a orientar el diagnóstico.",
    causes: [
      "Cólico del lactante en bebés pequeños",
      "Enfermedad diarreica aguda",
      "Giardiasis u otra infección intestinal",
      "Infección de vías urinarias",
      "Estreñimiento",
    ],
    alarmSigns: [
      "Dolor abdominal intenso y localizado que no mejora",
      "Dolor abdominal con vómito persistente o sangre en las evacuaciones",
      "Abdomen muy distendido y duro al tacto",
      "Dolor abdominal con fiebre alta y decaimiento marcado",
    ],
    whyConsult:
      "El dolor abdominal persistente o intenso en un niño debe valorarse para distinguir entre causas frecuentes y benignas, como el cólico del lactante, y otras que requieren atención médica más específica, como una infección urinaria o intestinal.",
    faqs: [
      {
        question: "¿Cómo distingo un dolor de panza normal de uno preocupante?",
        answer:
          "Un dolor abdominal leve, que mejora con el tiempo y no impide que el niño juegue o coma, suele ser benigno; un dolor intenso, localizado, que empeora o se acompaña de fiebre y vómito requiere valoración pediátrica.",
      },
      {
        question: "¿El dolor abdominal en bebés siempre es cólico?",
        answer:
          "No siempre. Aunque el cólico del lactante es muy común, otras causas como el estreñimiento o una infección deben descartarse, especialmente si el llanto se acompaña de fiebre o cambios en las evacuaciones.",
      },
    ],
    relatedConditions: ["d-ivu", "d-colico-lactante", "d-diarrea", "d-giardiasis", "d-reflujo"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dolor-abdominal.jpg",
    seo: {
      title: "Dolor Abdominal en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dolor de panza? Conoce las causas más comunes con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dolor abdominal en niños Tuxtla Gutiérrez",
        "dolor de panza infantil Chiapas",
        "pediatra para dolor de estómago",
      ],
    },
  },
  {
    id: "sy-fiebre",
    slug: "fiebre",
    name: "Fiebre",
    colloquialNames: ["calentura"],
    description:
      "La fiebre es la elevación de la temperatura corporal por encima de 38°C y es uno de los signos más comunes de consulta pediátrica, generalmente asociada a infecciones virales o bacterianas. Más que un signo preocupante en sí mismo, la fiebre es la respuesta del cuerpo ante una infección, y su evaluación se centra en identificar la causa y vigilar el estado general del niño.",
    causes: [
      "Infecciones respiratorias como rinofaringitis, faringitis o laringitis",
      "Otitis media",
      "Amigdalitis",
      "Infección de vías urinarias",
      "Enfermedades víricas exantemáticas",
    ],
    alarmSigns: [
      "Fiebre en un bebé menor de 3 meses",
      "Fiebre mayor a 40°C que no responde a medidas habituales",
      "Fiebre con dificultad para respirar o decaimiento marcado",
      "Fiebre acompañada de rigidez de cuello o manchas en la piel que no desaparecen al presionarlas",
    ],
    whyConsult:
      "La fiebre en niños, especialmente en lactantes pequeños o cuando persiste por varios días, debe valorarse para identificar la causa, ya que puede corresponder a infecciones que requieren tratamiento específico, como la otitis media o una infección de vías urinarias.",
    faqs: [
      {
        question: "¿A partir de qué temperatura se considera fiebre en un niño?",
        answer:
          "Se considera fiebre una temperatura corporal igual o mayor a 38°C, medida de forma adecuada; por debajo de ese valor se habla de febrícula, que también debe vigilarse si persiste.",
      },
      {
        question: "¿Cuándo la fiebre en un niño es urgencia?",
        answer:
          "La fiebre en un bebé menor de 3 meses siempre debe valorarse de inmediato; en niños mayores, es urgencia cuando se acompaña de dificultad para respirar, decaimiento marcado, convulsión o manchas en la piel.",
      },
      {
        question: "¿Cuántos días puede durar la fiebre antes de preocuparse?",
        answer:
          "Una fiebre asociada a un virus común suele ceder en 2 a 3 días; si persiste más de 3 días, o reaparece después de haber mejorado, conviene una valoración pediátrica para descartar otra causa.",
      },
    ],
    relatedConditions: [
      "d-rinofaringitis",
      "d-otitis-media",
      "d-ivu",
      "d-diarrea",
      "d-virales-exantematicas",
      "d-amigdalitis",
      "d-faringitis",
      "d-laringitis",
    ],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/fiebre.jpg",
    seo: {
      title: "Fiebre en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene fiebre? Conoce las causas más comunes y cuándo consultar con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "fiebre en niños Tuxtla Gutiérrez",
        "calentura infantil Chiapas",
        "pediatra para fiebre en niños",
      ],
    },
  },
  {
    id: "sy-meteorismo",
    slug: "meteorismo-gases",
    name: "Meteorismo (Gases)",
    colloquialNames: ["gases", "inflamación por gases"],
    description:
      "El meteorismo es la acumulación de gas en el tubo digestivo, que causa distensión e incomodidad abdominal. En lactantes es frecuente como parte del cólico del lactante, mientras que en niños mayores puede asociarse a infecciones intestinales como la giardiasis.",
    causes: [
      "Cólico del lactante",
      "Giardiasis u otra infección intestinal",
      "Deglución excesiva de aire durante la alimentación",
      "Intolerancias alimentarias transitorias",
    ],
    alarmSigns: [
      "Distensión abdominal marcada y dolorosa al tacto",
      "Gases acompañados de vómito persistente",
      "Ausencia de evacuaciones por varios días junto con distensión",
    ],
    whyConsult:
      "El meteorismo persistente o intenso, especialmente cuando se acompaña de dolor abdominal o cambios en las evacuaciones, puede ser señal de una infección intestinal como la giardiasis que requiere valoración y tratamiento específico.",
    faqs: [
      {
        question: "¿El meteorismo en bebés siempre es cólico?",
        answer:
          "Es una de las causas más frecuentes, pero no la única; si los gases se acompañan de cambios en las evacuaciones, fiebre o falta de ganancia de peso, conviene que la pediatra valore otras causas.",
      },
      {
        question: "¿Qué ayuda a aliviar los gases en un bebé?",
        answer:
          "El masaje abdominal suave, la posición de \"bicicleta\" con las piernas del bebé y una técnica adecuada de eructo después de cada toma suelen ayudar; la pediatra puede orientar sobre otras medidas según cada caso.",
      },
    ],
    relatedConditions: ["d-colico-lactante", "d-giardiasis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/meteorismo-gases.jpg",
    seo: {
      title: "Meteorismo y Gases en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene gases o distensión abdominal? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "gases en bebés Tuxtla Gutiérrez",
        "meteorismo infantil Chiapas",
        "pediatra para distensión abdominal",
      ],
    },
  },
  {
    id: "sy-ardor-orinar",
    slug: "ardor-al-orinar",
    name: "Ardor al Orinar",
    colloquialNames: ["dolor al hacer pipí"],
    description:
      "El ardor al orinar es una molestia o dolor que el niño refiere al orinar, y es uno de los síntomas más característicos de una infección de vías urinarias. En niños pequeños que aún no verbalizan bien la molestia, puede manifestarse como llanto durante la micción o rechazo a orinar.",
    causes: [
      "Infección de vías urinarias",
      "Irritación local por higiene inadecuada",
    ],
    alarmSigns: [
      "Ardor al orinar acompañado de fiebre",
      "Ardor al orinar con dolor en el costado o la espalda",
      "Sangre visible en la orina",
    ],
    whyConsult:
      "El ardor al orinar es uno de los síntomas principales de la infección de vías urinarias, que requiere confirmación con examen de orina y tratamiento específico para evitar que la infección avance hacia los riñones.",
    faqs: [
      {
        question: "¿Cómo sé si mi hijo pequeño tiene ardor al orinar si no sabe explicarlo?",
        answer:
          "En niños que aún no verbalizan bien, el ardor al orinar puede notarse como llanto durante la micción, rechazo a orinar o necesidad de orinar con más frecuencia de lo habitual; estos signos ameritan valoración pediátrica.",
      },
      {
        question: "¿El ardor al orinar siempre significa infección urinaria?",
        answer:
          "Es la causa más frecuente en la infancia, por lo que ante este síntoma la pediatra suele solicitar un examen general de orina para confirmar o descartar una infección de vías urinarias.",
      },
    ],
    relatedConditions: ["d-ivu"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/ardor-al-orinar.jpg",
    seo: {
      title: "Ardor al Orinar en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene ardor al orinar? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "ardor al orinar en niños Tuxtla Gutiérrez",
        "dolor al orinar infantil Chiapas",
        "pediatra para infección urinaria",
      ],
    },
  },
  {
    id: "sy-poliuria",
    slug: "deseo-de-orinar-con-frecuencia",
    name: "Deseo de Orinar con Frecuencia",
    colloquialNames: ["ganas de orinar seguido", "urgencia urinaria"],
    description:
      "El deseo de orinar con frecuencia, mayor al habitual para la edad del niño, es un síntoma que con frecuencia acompaña al ardor al orinar en el contexto de una infección de vías urinarias. También puede presentarse de forma aislada como parte de la irritación de la vejiga durante el proceso infeccioso.",
    causes: [
      "Infección de vías urinarias",
      "Irritación vesical asociada a la infección",
    ],
    alarmSigns: [
      "Necesidad frecuente de orinar junto con fiebre",
      "Incapacidad para retener la orina de forma súbita en un niño ya entrenado",
      "Dolor en el costado o la espalda asociado",
    ],
    whyConsult:
      "Cuando un niño necesita orinar con mucha más frecuencia de lo habitual, especialmente si se acompaña de ardor o fiebre, es importante descartar una infección de vías urinarias con un examen de orina.",
    faqs: [
      {
        question: "¿Orinar muy seguido siempre es infección urinaria?",
        answer:
          "No siempre, pero es una de las causas más frecuentes en la infancia; la pediatra valora otros síntomas asociados, como fiebre o ardor, para decidir si se requiere un examen de orina.",
      },
      {
        question: "¿Mi hijo que ya controlaba esfínteres puede volver a mojarse por esto?",
        answer:
          "Sí, un niño que ya controlaba esfínteres puede presentar episodios de escape de orina cuando hay una infección de vías urinarias activa, por la urgencia e irritación vesical que produce.",
      },
    ],
    relatedConditions: ["d-ivu"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/deseo-de-orinar-con-frecuencia.jpg",
    seo: {
      title: "Orinar con Frecuencia en Niños | Pediatra Tuxtla",
      description:
        "¿Tu hijo quiere orinar muy seguido? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "orinar frecuente en niños Tuxtla Gutiérrez",
        "urgencia urinaria infantil Chiapas",
        "pediatra para infección urinaria en niños",
      ],
    },
  },
  {
    id: "sy-dolor-espalda",
    slug: "dolor-de-espalda",
    name: "Dolor de Espalda",
    colloquialNames: ["dolor de la cintura hacia atrás"],
    description:
      "El dolor de espalda en niños es menos común que en adultos y, cuando se presenta en el costado o la parte baja de la espalda junto con fiebre, puede ser señal de que una infección de vías urinarias ha ascendido hacia los riñones. Por eso, ante dolor de espalda con fiebre en un niño, la pediatra suele descartar esta posibilidad de forma dirigida.",
    causes: [
      "Infección de vías urinarias que compromete el riñón (pielonefritis)",
      "Postura inadecuada o mochilas escolares muy pesadas en niños mayores",
    ],
    alarmSigns: [
      "Dolor de espalda o costado con fiebre alta",
      "Dolor de espalda con vómito y decaimiento",
      "Dolor que no mejora y limita el movimiento del niño",
    ],
    whyConsult:
      "El dolor de espalda o en el costado acompañado de fiebre en un niño debe valorarse para descartar que una infección urinaria haya avanzado hacia los riñones, una condición que requiere tratamiento médico oportuno.",
    faqs: [
      {
        question: "¿El dolor de espalda en niños es normal?",
        answer:
          "El dolor de espalda aislado, sin fiebre, suele estar relacionado con postura o cargas pesadas en mochilas escolares; cuando se acompaña de fiebre, debe valorarse para descartar una infección urinaria que afecte el riñón.",
      },
      {
        question: "¿Cómo se relaciona el dolor de espalda con una infección urinaria?",
        answer:
          "Cuando una infección de vías urinarias asciende hasta el riñón, puede causar dolor en el costado o la parte baja de la espalda junto con fiebre; es una señal de que la infección requiere atención médica más próxima.",
      },
    ],
    relatedConditions: ["d-ivu"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dolor-de-espalda.jpg",
    seo: {
      title: "Dolor de Espalda en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dolor de espalda con fiebre? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dolor de espalda en niños Tuxtla Gutiérrez",
        "dolor de costado infantil Chiapas",
        "pediatra para dolor de espalda en niños",
      ],
    },
  },
  {
    id: "sy-dolor-oido",
    slug: "dolor-de-oido",
    name: "Dolor de Oído",
    colloquialNames: ["dolor de oreja"],
    description:
      "El dolor de oído es uno de los motivos de consulta más frecuentes en la infancia y suele estar relacionado con la otitis media, aunque también puede presentarse como dolor referido en infecciones de garganta como la amigdalitis o la faringitis. En bebés y niños pequeños, el dolor de oído puede manifestarse como llanto o el niño se jala la oreja repetidamente.",
    causes: [
      "Otitis media",
      "Dolor referido desde una amigdalitis o faringitis",
      "Acumulación de cerumen",
    ],
    alarmSigns: [
      "Dolor de oído con fiebre alta persistente",
      "Salida de líquido o secreción del oído",
      "Dolor de oído con hinchazón detrás de la oreja",
    ],
    whyConsult:
      "El dolor de oído en un niño amerita valoración con otoscopia para confirmar si se trata de una otitis media y definir el manejo adecuado, ya que el diagnóstico no puede confirmarse solo por el síntoma.",
    faqs: [
      {
        question: "¿Cómo sé si mi bebé tiene dolor de oído si no puede decírmelo?",
        answer:
          "En bebés, el dolor de oído suele manifestarse como llanto difícil de calmar, el bebé se jala o se toca la oreja repetidamente, dificultad para dormir, o rechazo al alimentarse por la presión que genera succionar.",
      },
      {
        question: "¿El dolor de oído siempre es otitis?",
        answer:
          "Es la causa más frecuente, pero el dolor de oído también puede ser referido desde la garganta en cuadros de amigdalitis o faringitis; la otoscopia que realiza la pediatra permite diferenciarlo.",
      },
    ],
    relatedConditions: ["d-otitis-media", "d-amigdalitis", "d-faringitis"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dolor-de-oido.jpg",
    seo: {
      title: "Dolor de Oído en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dolor de oído? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dolor de oído en niños Tuxtla Gutiérrez",
        "dolor de oreja infantil Chiapas",
        "pediatra para dolor de oído",
      ],
    },
  },
  {
    id: "sy-perdida-audicion",
    slug: "perdida-de-audicion",
    name: "Pérdida de Audición",
    colloquialNames: ["no escucha bien", "oído tapado"],
    description:
      "La pérdida de audición en niños puede ser temporal, asociada a líquido acumulado detrás del tímpano después de una otitis media, o requerir una evaluación más detallada según el caso. En niños pequeños, puede notarse como falta de respuesta a sonidos o retraso en el desarrollo del lenguaje si se prolonga.",
    causes: [
      "Otitis media con derrame persistente",
      "Acumulación de cerumen",
      "Infecciones de oído recurrentes",
    ],
    alarmSigns: [
      "Pérdida de audición que no mejora después de resolverse la infección de oído",
      "Falta de respuesta a sonidos en un bebé",
      "Retraso en el desarrollo del lenguaje asociado",
    ],
    whyConsult:
      "La pérdida de audición asociada a una otitis media suele ser temporal, pero debe vigilarse en consulta para confirmar que se resuelve por completo y no interfiere con el desarrollo del lenguaje del niño.",
    faqs: [
      {
        question: "¿La pérdida de audición por otitis es permanente?",
        answer:
          "En la mayoría de los casos es temporal y se resuelve al tratar la otitis media; sin embargo, los episodios recurrentes o el derrame persistente deben vigilarse en consulta pediátrica para descartar afectación de mayor duración.",
      },
      {
        question: "¿Cómo noto si mi bebé no escucha bien?",
        answer:
          "Señales a vigilar incluyen falta de respuesta a sonidos fuertes, no voltear hacia la voz de los padres, o un posible retraso en el balbuceo o las primeras palabras; ante cualquiera de estas señales conviene una valoración pediátrica.",
      },
    ],
    relatedConditions: ["d-otitis-media"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/perdida-de-audicion.jpg",
    seo: {
      title: "Pérdida de Audición en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo no escucha bien después de una infección de oído? Consulta con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "pérdida de audición en niños Tuxtla Gutiérrez",
        "oído tapado infantil Chiapas",
        "pediatra para audición en niños",
      ],
    },
  },
  {
    id: "sy-dolor-muscular",
    slug: "dolor-muscular-o-de-huesos",
    name: "Dolor Muscular o de Huesos",
    colloquialNames: ["dolor de cuerpo", "dolores de crecimiento"],
    description:
      "El dolor muscular o de huesos en niños acompaña con frecuencia a los cuadros virales, como parte del malestar general que producen las enfermedades exantemáticas y otras infecciones. También existen los llamados \"dolores de crecimiento\", un dolor benigno en piernas que no está relacionado con ninguna infección.",
    causes: [
      "Enfermedades víricas exantemáticas y otros cuadros virales",
      "Dolores de crecimiento en niños sanos",
      "Actividad física intensa reciente",
    ],
    alarmSigns: [
      "Dolor muscular localizado con inflamación, calor o enrojecimiento en una articulación",
      "Dolor que despierta al niño por la noche de forma intensa y persistente",
      "Dolor acompañado de fiebre prolongada o pérdida de peso",
    ],
    whyConsult:
      "El dolor muscular que acompaña a un cuadro viral suele mejorar junto con los demás síntomas; cuando es intenso, localizado en una sola zona o persiste más allá del cuadro agudo, conviene una valoración pediátrica.",
    faqs: [
      {
        question: "¿Qué son los \"dolores de crecimiento\"?",
        answer:
          "Son dolores musculares benignos, generalmente en las piernas, que algunos niños presentan por la tarde o noche sin relación con ninguna enfermedad; no se acompañan de fiebre, inflamación ni cojera, y mejoran con masaje suave.",
      },
      {
        question: "¿El dolor muscular con fiebre es normal?",
        answer:
          "Sí, es común que los cuadros virales, incluyendo las enfermedades exantemáticas, produzcan dolor muscular generalizado junto con la fiebre, como parte del malestar general de la infección.",
      },
    ],
    relatedConditions: ["d-virales-exantematicas"],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dolor-muscular-o-de-huesos.jpg",
    seo: {
      title: "Dolor Muscular en Niños | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dolor de cuerpo o de piernas? Conoce las causas con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dolor muscular en niños Tuxtla Gutiérrez",
        "dolores de crecimiento Chiapas",
        "pediatra para dolor de huesos en niños",
      ],
    },
  },
  {
    id: "sy-dificultad-respirar",
    slug: "dificultad-para-respirar",
    name: "Dificultad para Respirar",
    colloquialNames: ["se ahoga", "le cuesta respirar"],
    description:
      "La dificultad para respirar en niños es un síntoma que siempre requiere valoración médica pronta, ya que puede corresponder a distintas causas, desde una laringitis o amigdalitis severa hasta condiciones propias del recién nacido como la apnea de la prematuridad o el síndrome de dificultad respiratoria neonatal. Identificar el grado de esfuerzo respiratorio es clave para decidir la urgencia de la atención.",
    causes: [
      "Laringitis (crup)",
      "Amigdalitis con inflamación severa",
      "Faringitis con compromiso de la vía aérea",
      "Apnea de la prematuridad",
      "Síndrome de dificultad respiratoria en neonatos",
    ],
    alarmSigns: [
      "Hundimiento de las costillas o el cuello con cada respiración",
      "Coloración azulada de labios o piel",
      "Sonido agudo al respirar, incluso en reposo",
      "Incapacidad para hablar, llorar o alimentarse por falta de aire",
    ],
    whyConsult:
      "La dificultad para respirar es uno de los signos de alarma más importantes en pediatría: nunca debe esperarse a que mejore por sí sola, sino buscar valoración médica inmediata para identificar la causa y actuar a tiempo.",
    faqs: [
      {
        question: "¿Cómo distingo si mi hijo solo está agitado o realmente le falta el aire?",
        answer:
          "Signos de verdadera dificultad respiratoria incluyen hundimiento visible de las costillas o el cuello al respirar, aleteo nasal, color azulado en labios, o que el niño no pueda hablar ni llorar con normalidad; ante cualquiera de estos signos se requiere atención de urgencia.",
      },
      {
        question: "¿La dificultad para respirar en un recién nacido es diferente?",
        answer:
          "Sí, en recién nacidos y bebés prematuros la dificultad para respirar puede deberse a condiciones propias de esa etapa, como la apnea de la prematuridad o el síndrome de dificultad respiratoria neonatal, que requieren manejo hospitalario especializado.",
      },
    ],
    relatedConditions: [
      "d-amigdalitis",
      "d-apnea-prematuridad",
      "d-sdr-neonatal",
      "d-faringitis",
      "d-laringitis",
    ],
    lastReviewed: "2026-11-09",
    image: "/images/symptoms/dificultad-para-respirar.jpg",
    seo: {
      title: "Dificultad para Respirar | Pediatra en Tuxtla Gutiérrez",
      description:
        "¿Tu hijo tiene dificultad para respirar? Señales de alarma y cuándo buscar atención con la pediatra en Tuxtla Gutiérrez, Chiapas.",
      keywords: [
        "dificultad para respirar en niños Tuxtla Gutiérrez",
        "bebé se ahoga Chiapas",
        "pediatra urgencia respiratoria infantil",
      ],
    },
  },
];
