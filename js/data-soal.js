/* Gabungan bank soal. SOAL_A dan SOAL_B didefinisikan di file masing-masing
   (classic script berbagi global lexical scope, jadi diacu langsung). */
const SOAL = [
  ...(typeof SOAL_A !== "undefined" ? SOAL_A : []),
  ...(typeof SOAL_B !== "undefined" ? SOAL_B : [])
];
