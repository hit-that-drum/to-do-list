export interface TfilterBtnState {
  timeFilter: 'ALLTIME' | 'MORNING' | 'AFTERNOON' | 'NIGHT';
  typeFilter: 'ALLTYPE' | 'ROUTINE' | 'TODO';
  allWeekRoutine: boolean;
  filterType: 'TIME' | 'TYPE' | 'ALLWEEK';
}
