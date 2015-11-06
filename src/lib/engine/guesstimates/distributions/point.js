function isNumber(s) {
  return !!(s && !isNaN(s.toString()))
}

//export var Main = {
  //isA(g) {return Formatter.isA(g)},
  //isValid(g) {return Formatter.isValid(g)},
  //sample(g,n) {
    //const formatted = Formatter.format(g)
    //return Sampler.sample(formatted, n)
  //}
//}

export var Formatter = {
  isA(g) { return this._relevantFormatter(g).isA(g) },
  isValid(g) { return this._relevantFormatter(g).isValid(g) },
  format(g) { return this._relevantFormatter(g).format(g) },
  _relevantFormatter(g) { return (InputFormatter.isA(g) ? InputFormatter : ManualFormatter) },
}

export var Sampler = {
  sample(formatted, n) {
    return {values: [formatted.value]}
  }
}

export var InputFormatter = {
  name: 'input',
  isValid(g) { return (!!g.input && isNumber(g.input)) },
  isA(g) { return this.isValid(g) },
  format(g) { return {value: parseFloat(g.input)} }
}

export var ManualFormatter = {
  name: 'manual',
  isA(g) { return (g.distributionType === 'PointDistribution') },
  isValid(g) { return (!!this.isA(g) && isNumber(g.value)) },
  format(g) { return {value: parseFloat(g.value)} }
}

