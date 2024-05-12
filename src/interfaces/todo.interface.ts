interface Routines {
  order: number;
  description: string;
  status: boolean;
}

interface Todos {
  order: number;
  description: string;
  status: boolean;
}

interface MockData {
  day: string;
  id: number;
  routines?: Routines[];
  todos?: Todos[];
}

export interface FinalMockData {
  data: MockData[];
}
