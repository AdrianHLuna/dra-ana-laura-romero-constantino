# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dra. Ana Laura Romero Constantino — Pediatría
**Ciudad:** Tuxtla Gutiérrez, Chiapas

**Nota de tono:** este catálogo es pediátrico — ningún prompt debe producir imágenes que asusten a un niño o a un padre ansioso. Nada de agujas en primer plano amenazante, nada de llanto angustiante, nada de sangre o tejido abierto. Priorizar calidez, luz suave y composición tranquilizadora incluso en los temas más delicados (ictericia neonatal, apnea de la prematuridad, síndrome de dificultad respiratoria). Ningún niño debe representarse como un paciente real identificable — siempre ilustración o fotografía de modelo genérica, nunca un registro clínico real.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud pediátrica y sitios web de consultorios de Pediatría.
Tono: Cálido, tranquilizador y amigable — nunca clínico-frío, nunca atemorizante para un niño o un padre ansioso.
Estilo: Mezcla de dos registros según el tema — (1) ilustración 3D médica suave y redondeada (colores pastel, formas orgánicas, nunca hiperrealista/gráfica) para anatomía y padecimientos; (2) fotografía cálida de estilo editorial, con niños modelo genéricos (nunca pacientes reales identificables) en escenas cotidianas de consulta o en casa, para síntomas y servicios.
Identidad visual OBLIGATORIA (paleta real de marca del logotipo de la doctora): azul periwinkle (#788EC6), rosa (#D88EB7), amarillo/dorado (#EFC613), fondo crema cálido (#FDFAF5) — colores suaves/pastel, nunca saturados ni neón.
Restricciones: Cero sangre, cero tejido abierto, cero agujas en primer plano amenazante, cero llanto angustiante o niños en sufrimiento visible, cero desnudez. Para temas delicados (recién nacido, prematuridad, dificultad respiratoria), usar encuadres tranquilizadores: manos cuidadosas de personal médico, equipo médico desenfocado de fondo, nunca el procedimiento invasivo en sí. Prohibidos hologramas, neones, HUDs futuristas. Cero palabras, texto, marcas de agua, firmas o números en la imagen.
Formato: JPG horizontal de aspecto 16:10 (--ar 16:10 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Luz suave, cálida y difusa — nunca dura ni clínica-fría.
- Color Palette: Periwinkle (#788EC6), Rosa (#D88EB7), Amarillo (#EFC613), Crema (#FDFAF5), tonos de piel naturales.
- Composition: Centrada, con espacio negativo generoso, composición calmada y redondeada (evitar ángulos duros/agresivos).
- Suffixes: soft rounded 3D medical illustration OR warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
- Negative Prompt: blood, gore, open wound, scary needle close-up, crying child in distress, dark clinical lighting, hologram, neon, sci-fi, text, watermark, signature, real identifiable patient.

Estas son instrucciones, no hagas imágenes todavía.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES

### 1. Rinofaringitis (`public/images/diseases/rinofaringitis.jpg`)
```text
Warm editorial photo of a toddler sitting calmly on a parent's lap at home, a soft tissue nearby, gentle content expression, cozy living room light.
Color Palette: Periwinkle (#788EC6) blanket accent, Cream (#FDFAF5) background, natural warm tones.
Composition: Centered, soft focus background, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: crying, distress, dark lighting, text, watermark.
```

### 2. Otitis Media (`public/images/diseases/otitis-media.jpg`)
```text
Soft rounded 3D medical illustration of a simplified, friendly cross-section of a child's ear anatomy, middle ear highlighted gently in warm rose tone, educational and non-threatening.
Color Palette: Rosa (#D88EB7) highlight, Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered cross-section, macro clinical-educational framing, rounded shapes only.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, sharp edges, text, watermark.
```

### 3. Infección de Vías Urinarias (`public/images/diseases/infeccion-de-vias-urinarias.jpg`)
```text
Warm editorial photo of a pediatrician gently listening to a young child with a stethoscope in a bright, friendly consultation room, parent nearby smiling reassuringly.
Color Palette: Periwinkle (#788EC6) scrubs accent, Cream (#FDFAF5) walls, warm natural tones.
Composition: Centered, soft depth of field, calm atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: clinical-cold lighting, distress, text, watermark.
```

### 4. Cólico del Lactante (`public/images/diseases/colico-del-lactante.jpg`)
```text
Warm editorial photo of a parent gently holding and soothing a swaddled newborn against their shoulder in soft golden-hour light, tender and calm moment.
Color Palette: Rosa (#D88EB7) swaddle, Amarillo (#EFC613) warm light accent, Cream (#FDFAF5) background.
Composition: Close but gentle framing, soft bokeh background.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: crying distress, dark lighting, text, watermark.
```

### 5. Enfermedad Diarreica Aguda (`public/images/diseases/enfermedad-diarreica-aguda.jpg`)
```text
Soft rounded 3D illustration of a smiling glass of water with gentle droplets and a simple rounded digestive-system icon beside it, conveying hydration and gentle digestive care, friendly icon style.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) water accent, Cream (#FDFAF5) background.
Composition: Centered, icon-like simplicity, generous negative space.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, text, watermark.
```

### 6. Enfermedades Víricas Exantemáticas (`public/images/diseases/enfermedades-viricas-exantematicas.jpg`)
```text
Soft rounded 3D illustration of a friendly, simplified child silhouette with a few small gentle rose-colored dots on the skin, calm and non-alarming educational style, no facial detail.
Color Palette: Rosa (#D88EB7) dots, Periwinkle (#788EC6) silhouette, Cream (#FDFAF5) background.
Composition: Centered, minimal, rounded shapes.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: realistic rash close-up, distress, text, watermark.
```

### 7. Amigdalitis (`public/images/diseases/amigdalitis.jpg`)
```text
Soft rounded 3D medical illustration of a simplified, friendly open-mouth throat cross-section with gently highlighted tonsils in warm rose tone, educational and calm.
Color Palette: Rosa (#D88EB7) highlight, Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered, rounded educational framing.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, text, watermark.
```

### 8. Giardiasis (`public/images/diseases/giardiasis.jpg`)
```text
Soft rounded 3D illustration of a simple, friendly glass of clean water next to a gentle magnifying glass icon, conveying water safety and hygiene, icon-like educational style.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) accent, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: blood, gore, text, watermark.
```

### 9. Reflujo Gastroesofágico del Lactante (`public/images/diseases/reflujo-gastroesofagico-del-lactante.jpg`)
```text
Warm editorial photo of a parent holding a baby upright against their shoulder after feeding, gentle burping position, soft warm nursery light.
Color Palette: Periwinkle (#788EC6) nursery accents, Cream (#FDFAF5) background, warm tones.
Composition: Centered, tender close framing, soft bokeh.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 10. Ictericia Neonatal (`public/images/diseases/ictericia-neonatal.jpg`)
```text
Warm editorial photo of a peaceful newborn resting in a bassinet under soft warm nursery light, calm reassuring atmosphere, no medical equipment visible in focus.
Color Palette: Amarillo (#EFC613) soft warm light, Cream (#FDFAF5) background, periwinkle blanket accent.
Composition: Centered, soft focus, generous negative space.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: clinical equipment close-up, distress, text, watermark.
```

### 11. Apnea de la Prematuridad (`public/images/diseases/apnea-de-la-prematuridad.jpg`)
```text
Warm editorial photo of a gentle nurse's hand resting reassuringly near a peaceful premature baby in a soft-lit neonatal care setting, calm and caring tone, equipment softly blurred in background.
Color Palette: Periwinkle (#788EC6) soft accents, Cream (#FDFAF5) background, warm tones.
Composition: Centered, tender close framing, soft bokeh background.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: medical equipment close-up, distress, dark lighting, text, watermark.
```

### 12. Eritema Tóxico del Neonato (`public/images/diseases/eritema-toxico-del-neonato.jpg`)
```text
Soft rounded 3D illustration of a peaceful, simplified newborn silhouette wrapped in a soft blanket, a few tiny gentle dots on the skin rendered softly, calm and reassuring, no facial detail.
Color Palette: Amarillo (#EFC613) soft dots, Periwinkle (#788EC6) blanket, Cream (#FDFAF5) background.
Composition: Centered, minimal, rounded shapes.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: realistic rash close-up, distress, text, watermark.
```

### 13. Síndrome de Dificultad Respiratoria en Neonatos (`public/images/diseases/sindrome-de-dificultad-respiratoria-en-neonatos.jpg`)
```text
Warm editorial photo of a caring parent's hand gently touching a peaceful premature baby's hand through a soft-lit incubator, tender bonding moment, equipment softly blurred, reassuring tone.
Color Palette: Periwinkle (#788EC6) soft accents, Cream (#FDFAF5) background, warm light.
Composition: Centered, intimate close framing, soft bokeh.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: medical equipment close-up, distress, dark lighting, text, watermark.
```

### 14. Faringitis (`public/images/diseases/faringitis.jpg`)
```text
Warm editorial photo of a pediatrician gently examining a calm child's throat with a soft light, parent nearby, bright friendly consultation room.
Color Palette: Periwinkle (#788EC6) accents, Cream (#FDFAF5) walls, warm natural tones.
Composition: Centered, soft depth of field, calm atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 15. Laringitis (`public/images/diseases/laringitis.jpg`)
```text
Warm editorial photo of a parent comforting a calm child at home with a warm mug of water nearby and a humidifier softly steaming in the background, cozy reassuring scene.
Color Palette: Periwinkle (#788EC6) accents, Amarillo (#EFC613) warm light, Cream (#FDFAF5) background.
Composition: Centered, soft bokeh, cozy atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

---

## 🧰 SECCIÓN 2: PROMPTS PARA SERVICIOS

### 1. Control del Niño Sano (`public/images/services/control-del-nino-sano.jpg`)
```text
Warm editorial photo of a pediatrician smiling while measuring a toddler's height against a friendly growth chart on the wall, parent watching happily, bright consultation room.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) chart accents, Cream (#FDFAF5) background.
Composition: Centered, cheerful, soft natural light.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: clinical-cold lighting, text, watermark.
```

### 2. Atención de Enfermedades Gastrointestinales (`public/images/services/atencion-de-enfermedades-gastrointestinales.jpg`)
```text
Warm editorial photo of a pediatrician gently talking with a parent and child in a friendly consultation room, a glass of water and simple hydration chart softly visible on the desk.
Color Palette: Periwinkle (#788EC6), Cream (#FDFAF5) background, warm tones.
Composition: Centered, calm conversational framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 3. Atención de Enfermedades Respiratorias (`public/images/services/atencion-de-enfermedades-respiratorias.jpg`)
```text
Warm editorial photo of a pediatrician gently placing a stethoscope on a calm child's back for a listen, parent reassuringly nearby, bright friendly room.
Color Palette: Periwinkle (#788EC6) scrubs, Cream (#FDFAF5) background, warm tones.
Composition: Centered, soft depth of field.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 4. Detección Oportuna del Cáncer Infantil (`public/images/services/deteccion-oportuna-del-cancer-infantil.jpg`)
```text
Warm editorial photo of a pediatrician gently and attentively examining a calm, healthy-looking child during a routine checkup, warm reassuring atmosphere, parent smiling nearby.
Color Palette: Periwinkle (#788EC6), Rosa (#D88EB7) soft accents, Cream (#FDFAF5) background.
Composition: Centered, calm and caring framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark/somber tone, text, watermark.
```

### 5. Administración de Vacunas (`public/images/services/administracion-de-vacunas.jpg`)
```text
Warm editorial photo of a smiling toddler receiving a small sticker/bandage from a friendly nurse after a routine vaccine, no needle visible, cheerful celebratory moment, parent proud nearby.
Color Palette: Amarillo (#EFC613) sticker accent, Periwinkle (#788EC6), Cream (#FDFAF5) background.
Composition: Centered, cheerful, bright light.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: needle close-up, crying, distress, text, watermark.
```

### 6. Atención al Adolescente (`public/images/services/atencion-al-adolescente.jpg`)
```text
Warm editorial photo of a pediatrician having a friendly, respectful conversation with a teenager in a bright consultation room, relaxed confident body language.
Color Palette: Periwinkle (#788EC6), Cream (#FDFAF5) background, warm tones.
Composition: Centered, conversational, natural light.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 7. Valoración del Recién Nacido (`public/images/services/valoracion-del-recien-nacido.jpg`)
```text
Warm editorial photo of a pediatrician gently and carefully checking a peaceful newborn on a soft changing pad, parent watching tenderly, soft warm light.
Color Palette: Periwinkle (#788EC6), Cream (#FDFAF5) background, warm light.
Composition: Centered, tender close framing, soft bokeh.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, dark lighting, text, watermark.
```

### 8. Pruebas de Tamiz Neonatal (`public/images/services/pruebas-de-tamiz-neonatal.jpg`)
```text
Soft rounded 3D illustration of a friendly, simplified droplet icon beside a tiny heel-shape icon, conveying gentle newborn screening, calm icon-based educational style, no needle visible.
Color Palette: Rosa (#D88EB7) droplet, Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: needle close-up, blood, distress, text, watermark.
```

### 9. Consulta de Lactancia Materna (`public/images/services/consulta-de-lactancia-materna.jpg`)
```text
Warm editorial photo of a lactation-supportive pediatric consultation: a parent breastfeeding comfortably while a caring professional offers gentle guidance nearby, soft warm light, modest and tender framing.
Color Palette: Rosa (#D88EB7), Cream (#FDFAF5) background, warm tones.
Composition: Centered, soft bokeh, discreet and warm.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: explicit nudity, text, watermark.
```

### 10. Curva de Crecimiento y Desarrollo (`public/images/services/curva-de-crecimiento-y-desarrollo.jpg`)
```text
Soft rounded 3D illustration of a friendly, gently upward growth curve chart with small rounded milestone icons along the way, cheerful and encouraging educational style.
Color Palette: Periwinkle (#788EC6) line, Amarillo (#EFC613) milestone dots, Cream (#FDFAF5) background.
Composition: Centered, clean chart composition, generous negative space.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, numbers, watermark.
```

### 11. Desparasitación Infantil (`public/images/services/desparasitacion-infantil.jpg`)
```text
Soft rounded 3D illustration of a friendly handwashing icon with gentle water droplets and soap bubbles, conveying hygiene and prevention, cheerful icon-based educational style.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) bubble accents, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, watermark.
```

### 12. Revisión de Salud Escolar (`public/images/services/revision-de-salud-escolar.jpg`)
```text
Warm editorial photo of a pediatrician doing a cheerful routine checkup on a school-age child wearing a backpack, friendly consultation room, parent smiling nearby.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) backpack accent, Cream (#FDFAF5) background.
Composition: Centered, cheerful, bright natural light.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

---

## 🌡️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS

### 1. Náuseas (`public/images/symptoms/nauseas.jpg`)
```text
Soft rounded 3D illustration of a simple, friendly stomach icon with a gentle wavy discomfort line, calm and non-alarming educational style.
Color Palette: Rosa (#D88EB7), Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, watermark.
```

### 2. Vómitos (`public/images/symptoms/vomitos.jpg`)
```text
Warm editorial photo of a parent gently comforting a calm child resting on a couch with a glass of water nearby, soft caring atmosphere.
Color Palette: Periwinkle (#788EC6), Cream (#FDFAF5) background, warm tones.
Composition: Centered, soft bokeh, tender framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 3. Dolor Abdominal (`public/images/symptoms/dolor-abdominal.jpg`)
```text
Soft rounded 3D illustration of a simple, friendly child silhouette gently holding their tummy, calm expression, non-alarming educational style, no facial detail.
Color Palette: Periwinkle (#788EC6), Rosa (#D88EB7) accent, Cream (#FDFAF5) background.
Composition: Centered, minimal, rounded shapes.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 4. Fiebre (`public/images/symptoms/fiebre.jpg`)
```text
Soft rounded 3D illustration of a friendly, rounded digital thermometer icon with a gentle warm glow, calm educational style, no alarming numbers.
Color Palette: Amarillo (#EFC613) warm glow, Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, numbers, watermark.
```

### 5. Meteorismo (Gases) (`public/images/symptoms/meteorismo-gases.jpg`)
```text
Warm editorial photo of a parent gently doing a calm "bicycle legs" stretch with a peaceful baby on a soft blanket, tender caring moment.
Color Palette: Periwinkle (#788EC6) blanket, Cream (#FDFAF5) background, warm tones.
Composition: Centered, soft bokeh, tender framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 6. Ardor al Orinar (`public/images/symptoms/ardor-al-orinar.jpg`)
```text
Soft rounded 3D illustration of a friendly glass of water with a gentle warm glow, conveying hydration and care, calm icon-based educational style.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) accent, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, watermark.
```

### 7. Deseo de Orinar con Frecuencia (`public/images/symptoms/deseo-de-orinar-con-frecuencia.jpg`)
```text
Soft rounded 3D illustration of a friendly bathroom door icon with a gentle clock accent, calm educational style conveying frequent urination without any explicit imagery.
Color Palette: Periwinkle (#788EC6), Rosa (#D88EB7) accent, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, watermark.
```

### 8. Dolor de Espalda (`public/images/symptoms/dolor-de-espalda.jpg`)
```text
Soft rounded 3D illustration of a simple, friendly child silhouette seen from behind with a gentle highlighted lower-back area, calm non-alarming educational style.
Color Palette: Periwinkle (#788EC6), Rosa (#D88EB7) highlight, Cream (#FDFAF5) background.
Composition: Centered, minimal, rounded shapes.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 9. Dolor de Oído (`public/images/symptoms/dolor-de-oido.jpg`)
```text
Warm editorial photo of a parent gently comforting a calm toddler who rests their head on the parent's shoulder, soft tender home lighting.
Color Palette: Periwinkle (#788EC6), Cream (#FDFAF5) background, warm tones.
Composition: Centered, soft bokeh, tender framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 10. Pérdida de Audición (`public/images/symptoms/perdida-de-audicion.jpg`)
```text
Soft rounded 3D illustration of a friendly, simplified ear icon with gentle soft sound waves, calm reassuring educational style.
Color Palette: Rosa (#D88EB7), Periwinkle (#788EC6) outline, Cream (#FDFAF5) background.
Composition: Centered, minimal icon composition.
Suffixes: soft rounded 3D medical illustration, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: text, watermark.
```

### 11. Dolor Muscular o de Huesos (`public/images/symptoms/dolor-muscular-o-de-huesos.jpg`)
```text
Warm editorial photo of a parent gently massaging a calm child's leg before bedtime, soft warm nightlight glow, tender caring moment.
Color Palette: Periwinkle (#788EC6), Amarillo (#EFC613) soft light, Cream (#FDFAF5) background.
Composition: Centered, soft bokeh, cozy bedtime atmosphere.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: distress, text, watermark.
```

### 12. Dificultad para Respirar (`public/images/symptoms/dificultad-para-respirar.jpg`)
```text
Warm editorial photo of a pediatrician calmly and attentively listening to a seated child's chest with a stethoscope, reassuring steady presence, parent calmly nearby, soft bright room.
Color Palette: Periwinkle (#788EC6) scrubs, Cream (#FDFAF5) background, warm tones.
Composition: Centered, calm and attentive framing.
Suffixes: warm editorial photography, 8k, gentle pastel tones --ar 16:10 --v 6.0
Negative Prompt: panic, distress, dark lighting, text, watermark.
```
