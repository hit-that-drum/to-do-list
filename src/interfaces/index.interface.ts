export interface TfilterBtnState {
  timeFilter: 'ALLTIME' | 'MORINING' | 'AFTERNOON' | 'NIGHT';
  typeFilter: 'ALLTYPE' | 'ROUTINE' | 'TODO';
  allWeekRoutine: boolean;
}
