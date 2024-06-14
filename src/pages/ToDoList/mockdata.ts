const mockdata = [
  {
    day: '2024-05-27',
    id: 1,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: '5:30',
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 3,
        taskType: 'ROUTINE',
        timeType: 'AFTERNOON',
        appointedTime: '5:30',
        description: 'AFTERNOON ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 4,
        taskType: 'ROUTINE',
        timeType: 'NIGHT',
        appointedTime: '5:30',
        description: 'NIGHT ROUTINE',
        status: false,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: '🧚‍'
      },
      {
        orderNo: 6,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: ''
      }
    ]
  },
  {
    day: '2024-05-28',
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
    day: '2024-05-29',
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
    day: '2024-05-30',
    id: 4,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: '5:30',
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 3,
        taskType: 'ROUTINE',
        timeType: 'AFTERNOON',
        appointedTime: '5:30',
        description: 'AFTERNOON ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 4,
        taskType: 'ROUTINE',
        timeType: 'NIGHT',
        appointedTime: '5:30',
        description: 'NIGHT ROUTINE',
        status: false,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: '🧚‍'
      },
      {
        orderNo: 6,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: ''
      }
    ]
  },
  {
    day: '2024-05-31',
    id: 5,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: '5:30',
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 3,
        taskType: 'ROUTINE',
        timeType: 'AFTERNOON',
        appointedTime: '5:30',
        description: 'AFTERNOON ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 4,
        taskType: 'ROUTINE',
        timeType: 'NIGHT',
        appointedTime: '5:30',
        description: 'NIGHT ROUTINE',
        status: false,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: '🧚‍'
      },
      {
        orderNo: 6,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: ''
      }
    ]
  },
  {
    day: '2024-06-01',
    id: 6,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: '5:30',
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 3,
        taskType: 'ROUTINE',
        timeType: 'AFTERNOON',
        appointedTime: '5:30',
        description: 'AFTERNOON ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 4,
        taskType: 'ROUTINE',
        timeType: 'NIGHT',
        appointedTime: '5:30',
        description: 'NIGHT ROUTINE',
        status: false,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: '🧚‍'
      },
      {
        orderNo: 6,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: ''
      }
    ]
  },
  {
    day: '2024-06-02',
    id: 7,
    routines: [
      {
        orderNo: 1,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 2,
        taskType: 'ROUTINE',
        timeType: 'MORNING',
        appointedTime: '5:30',
        description: 'MORNING ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 3,
        taskType: 'ROUTINE',
        timeType: 'AFTERNOON',
        appointedTime: '5:30',
        description: 'AFTERNOON ROUTINE',
        status: false,
        statusDesc: '⏰'
      },
      {
        orderNo: 4,
        taskType: 'ROUTINE',
        timeType: 'NIGHT',
        appointedTime: '5:30',
        description: 'NIGHT ROUTINE',
        status: false,
        statusDesc: '⏰'
      }
    ],
    todos: [
      {
        orderNo: 1,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '💲'
      },
      {
        orderNo: 2,
        taskType: 'TODO',
        timeType: 'MORNING',
        appointedTime: null,
        description: 'MORNING TODO',
        status: false,
        statusDesc: '✉️'
      },
      {
        orderNo: 3,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '🖼️'
      },
      {
        orderNo: 4,
        taskType: 'TODO',
        timeType: 'AFTERNOON',
        appointedTime: null,
        description: 'AFTERNOON TODO',
        status: false,
        statusDesc: '📚'
      },
      {
        orderNo: 5,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: 'NIGHT TODO',
        status: false,
        statusDesc: '🧚‍'
      },
      {
        orderNo: 6,
        taskType: 'TODO',
        timeType: 'NIGHT',
        appointedTime: null,
        description: '바람이 일어나 널 만난 그 순간',
        status: false,
        statusDesc: ''
      }
    ]
  }
];

export default mockdata;
