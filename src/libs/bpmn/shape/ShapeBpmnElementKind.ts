export enum ShapeBpmnElementKind {
  POLL_LANE = 'poolLane',

  GATEWAY = 'condition',
  TASK = 'task',
  TASK_CA = 'CallActivity',

  EVENT_END_TERMINATE = 'endTerminate',
  EVENT_END = 'end',
  EVENT_START = 'start',
  EVENT_BOUNDARY = 'boundary',
}
