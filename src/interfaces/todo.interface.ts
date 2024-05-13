interface Routines {
  orderNo: number;
  description: string;
  status: boolean;
}

interface Todos {
  orderNo: number;
  description: string;
  status: boolean;
}

export interface MockDataType {
  day: string;
  id: number;
  routines?: Routines[];
  todos?: Todos[];
}
