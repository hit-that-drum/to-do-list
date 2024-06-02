type TaskType = 'ROUTINE' | 'TODO';
type TimeType = 'MORNING' | 'AFTERNOON' | 'NIGHT' | null;

export interface RoutinesTodos {
  orderNo: number;
  taskType: TaskType;
  timeType: TimeType;
  appointedTime: string | null;
  description: string;
  status: boolean;
  statusDesc: string | null;
}

// export interface TWeekTableData {
//   MON: RoutinesTodos[];
//   TUE: RoutinesTodos[];
//   WED: RoutinesTodos[];
//   THU: RoutinesTodos[];
//   FRI: RoutinesTodos[];
//   SAT: RoutinesTodos[];
//   SUN: RoutinesTodos[];
// }

export interface MockDataType {
  day: string;
  id: number;
  routines?: RoutinesTodos[];
  todos?: RoutinesTodos[];
}
