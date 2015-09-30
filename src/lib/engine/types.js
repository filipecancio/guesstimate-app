export type Guesstimate = {
  input: string;
  metric: string
};

export type Distribution = {
  mean?: number;
  stdev?: number,
  input?: string
};

export type DGraph = {
  metrics: any
};

export type Sample = {
  values?: any,
  errors?: any
};

export type GridLocation = {
  row: number,
  column: number
};

export type Metric = {
  id: string,
  readableId?: string,
  location?: GridLocation
};
