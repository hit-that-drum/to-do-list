const mockdata = [
  {
    day: 'MON',
    id: 1,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: null,
        description: '지각하지 않기',
        status: true,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: '5:30',
        description: '기상시간 기록',
        status: true,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '가계부 쓰기',
        status: true,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '메일 보내기',
        status: true,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '사진첩 정리',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '독서기록 정리',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '에스파 앨범 듣기',
        status: false,
        statusDesc: '🧚‍♀️'
      }
    ]
  },
  {
    day: 'TUE',
    id: 2,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: null,
        description: '지각하지 않기',
        status: true,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '배포목록 정리',
        status: true,
        statusDesc: '📊'
      }
    ]
  },
  {
    day: 'WED',
    id: 3,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: '8:00',
        description: '지각하지 않기',
        status: true,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '배포버전 따기',
        status: true,
        statusDesc: '📊'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '배포하기',
        status: true,
        statusDesc: '📊'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '라이브 배포 확인 후 정리',
        status: true,
        statusDesc: '📊'
      }
    ]
  },
  {
    day: 'THU',
    id: 4,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: '지각하지 않기',
        status: true,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: '일찍 자기',
        status: false,
        statusDesc: '😴'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: '15:00',
        description: '식당 전화해서 예약하기',
        status: false,
        statusDesc: '📊'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: null,
        appointedTime: null,
        description: '앱으로 집 구경',
        status: false,
        statusDesc: '🏠'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: null,
        appointedTime: null,
        description: '4월 일상 정리',
        status: true,
        statusDesc: null
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: null,
        appointedTime: null,
        description: '4월 독서 정리',
        status: false,
        statusDesc: '🫧'
      }
    ]
  },
  {
    day: 'FRI',
    id: 5,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: null,
        description: '지각하지 않기',
        status: true,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '일찍 자기',
        status: false,
        statusDesc: '😴'
      }
    ]
  },
  {
    day: 'SAT',
    id: 6,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: null,
        description: '아침 운동',
        status: false,
        statusDesc: '💪'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '모리노팡야',
        status: true,
        statusDesc: '🥐'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '솜솜뜨개',
        status: true,
        statusDesc: '🧶'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '스터디 모각코 참여',
        status: true,
        statusDesc: '📖'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '옥동식 서교점',
        status: false,
        statusDesc: '🥘'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '헤이주드',
        status: false,
        statusDesc: '🍸'
      }
    ]
  },
  {
    day: 'SUN',
    id: 7,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: '',
        appointedTime: null,
        description: '아침 운동',
        status: false,
        statusDesc: '💪'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '개인프로젝트 클론코딩',
        status: false,
        statusDesc: '📖'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: '',
        appointedTime: null,
        description: '도서관 가서 책반납&책대여',
        status: false,
        statusDesc: '📚'
      }
    ]
  }
];

export default mockdata;
