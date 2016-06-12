import e from 'gEngine/engine'

const MAX_WIDTH = 8

export function parseSlurp(slurp, space={metrics: [], guesstimates: []}) {
  const name = slurp.name
  const description = slurp.provenance

  const maxRow = space.metrics.map(m => m.location.row).reduce((x,y) => Math.max(x,y), 0) + 1

  let existingReadableIds = space.metrics.map(m => m.readableId)
  const newMetrics = _.map(slurp.sips, (s,i) => {
    const metric = {
      ...e.metric.create(existingReadableIds),
      location: {row: maxRow + Math.floor(i/MAX_WIDTH), column: i % MAX_WIDTH},
      name: s.name,
      space: space.id,
    }
    existingReadableIds.concat(metric.readableId)
    return metric
  })
  const newGuesstimates = _.map(slurp.sips, (s,i) => ({
    description: s.provenance,
    guesstimateType: 'DATA',
    data: s.value,
    metric: newMetrics[i].id,
  }))

  return {name, description, newMetrics, newGuesstimates}
}
