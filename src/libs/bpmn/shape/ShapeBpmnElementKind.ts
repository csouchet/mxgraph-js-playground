export enum ShapeBpmnElementKind {
  TASK = 'TASK',
  LANE = 'LANE',
  POOL = 'POOL',

  GATEWAY_EXCLUSIVE = 'condition',

  TASK_SERVICE = 'TASK_SERVICE',
  TASK_CA = 'CallActivity',
  TASK_USER = 'TASK_USER',

  EVENT_END_TERMINATE = 'endTerminate',
  EVENT_END = 'end',
  EVENT_START = 'start',
  EVENT_BOUNDARY = 'boundary',
  EVENT_INTERMEDIATE_CATCH = 'EVENT_INTERMEDIATE_CATCH',
}
