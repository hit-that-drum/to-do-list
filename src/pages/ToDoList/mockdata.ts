const mockdata = [
  {
    day: 'MON',
    id: 1,
    routines: [{ orderNo: 1, description: '지각하지 않기', status: true }],
    todos: []
  },
  {
    day: 'TUE',
    id: 2,
    routines: [{ orderNo: 1, description: '지각하지 않기', status: true }],
    todos: [{ orderNo: 1, description: '배포목록 정리', status: true }]
  },
  {
    day: 'WED',
    id: 3,
    routines: [{ orderNo: 1, description: '지각하지 않기', status: true }],
    todos: [
      { orderNo: 1, description: '배포버전 따기', status: true },
      { orderNo: 2, description: '배포하기', status: true },
      { orderNo: 3, description: '라이브 배포 확인 후 정리', status: true }
    ]
  },
  {
    day: 'THU',
    id: 4,
    routines: [{ orderNo: 1, description: '지각하지 않기', status: true }],
    todos: [{ orderNo: 1, description: '일찍 자기', status: false }]
  },
  {
    day: 'FRI',
    id: 5,
    routines: [{ orderNo: 1, description: '지각하지 않기', status: true }],
    todos: [{ orderNo: 1, description: '일찍 자기', status: false }]
  },
  {
    day: 'SAT',
    id: 6,
    routines: [{ orderNo: 1, description: '아침 운동', status: false }],
    todos: [
      { orderNo: 1, description: '모리노팡야', status: true },
      { orderNo: 2, description: '솜솜뜨개', status: true },
      { orderNo: 3, description: '스터디 모각코 참여', status: true },
      { orderNo: 4, description: '옥동식 서교점', status: false },
      { orderNo: 5, description: '헤이주드', status: false }
    ]
  },
  {
    day: 'SUN',
    id: 7,
    routines: [{ orderNo: 1, description: '아침 운동', status: false }],
    todos: [
      { orderNo: 1, description: '개인프로젝트 클론코딩', status: false },
      { orderNo: 2, description: '도서관 가서 책반납&책대여', status: false }
    ]
  }
];
export default mockdata;
