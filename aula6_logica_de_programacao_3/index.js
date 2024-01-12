// true && false

//valores falsos

// 0, '', "", ``, null, undefined, NaN

//valores verdadeiros são todos que são diferentes dos valores falso descrito acima

//&& -> AND -> E

console.log('Gabriel' && null && 'Oliveira') // Retorna o VALOR: se tiver alguma afirmativa false vai retornar o valor falso no caso = (null)

console.log('Gabriel' && 'Oliveira'); // Retorna o VALOR: se as duas condições 'Gabriel' E 'Oliveira' vai retornar o valor = Oliveira

// || -> OR -> OU

console.log(null || '' || 'Gabriel' || true); // Retorna o primeiro valor true na condição || (OR -> OU)