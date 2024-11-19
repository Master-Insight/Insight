export default function cleanText(text) {
  // Dividir el texto en líneas y eliminar espacios en blanco al inicio y al final
  let lines = text.trim().split('\n');

  // Crear un conjunto para almacenar líneas únicas manteniendo el orden
  let cleanLines = [...new Set(lines)].map(line => {
    // Verificar si la línea puede dividirse en dos partes idénticas
    const midIndex = Math.floor(line.length / 2);
    const firstHalf = line.slice(0, midIndex).trim();
    const secondHalf = line.slice(midIndex).trim();

    // Si ambas mitades son iguales, conservar solo una mitad; si no, conservar la línea completa
    return firstHalf === secondHalf ? firstHalf : line;
  });

  // Crear un conjunto para almacenar líneas únicas manteniendo el orden
  let uniqueLines = [...new Set(cleanLines)];

  // Reconstruir el texto limpio manteniendo saltos de línea
  let cleanedText = uniqueLines.join('\n');
  
  return cleanedText;
}
