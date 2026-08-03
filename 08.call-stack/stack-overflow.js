//* stack overflow (estouro de pilha) acontece quando uma função ocupada toda a memória de chamadas do sistema
//! RangeError: Maximum call stack size exceeded

function stackOverflow() {
  stackOverflow();
}
stackOverflow();
