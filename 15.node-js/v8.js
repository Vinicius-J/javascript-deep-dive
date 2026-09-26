//* compila javascript para código de máquina nativo para execução rápida
//* node.js utiliza o v8 para fornecer ambiente de execução javascript no servidor

const process = require("node:process");

const v8Version = process.versions.v8;
console.log("V8 version:", v8Version);

// Get information about V8's heap memory usage
const v8 = require("v8");
const heapStats = v8.getHeapStatistics();

console.log(
  "Heap size limit:",
  (heapStats.heap_size_limit / 1024 / 1024).toFixed(2),
  "MB",
);
console.log(
  "Total heap size:",
  (heapStats.total_heap_size / 1024 / 1024).toFixed(2),
  "MB",
);
console.log(
  "Used heap size:",
  (heapStats.used_heap_size / 1024 / 1024).toFixed(2),
  "MB",
);
