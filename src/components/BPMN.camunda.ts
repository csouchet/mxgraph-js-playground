export const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="6.3.0">
  <collaboration id="Collaboration_0z9qm3x">
    <participant id="Participant_06tnc5v" name="Pool" processRef="Process_1" />
    <participant id="Participant_1dqcv77" name="Pool 2" processRef="Process_09jjfys" />
  </collaboration>
  <process id="Process_1" isExecutable="false">
    <laneSet id="LaneSet_12a3q40">
      <lane id="Lane_18pm9xn" name="Lane 1">
        <flowNodeRef>Task_1hcentk</flowNodeRef>
        <flowNodeRef>ExclusiveGateway_15hu1pt</flowNodeRef>
        <flowNodeRef>StartEvent_1y45yut</flowNodeRef>
      </lane>
      <lane id="Lane_05bj4e3" name="Lane 2">
        <flowNodeRef>Event_1ocodej</flowNodeRef>
        <flowNodeRef>Gateway_0bsnwc3</flowNodeRef>
        <flowNodeRef>Activity_1gqz2go</flowNodeRef>
        <flowNodeRef>Activity_0w5i7vs</flowNodeRef>
        <flowNodeRef>Event_0hs6bgx</flowNodeRef>
        <flowNodeRef>Gateway_00dhejt</flowNodeRef>
        <flowNodeRef>Activity_0q6rgrb</flowNodeRef>
        <flowNodeRef>Event_0jilrsy</flowNodeRef>
        <flowNodeRef>Event_1gu7r0i</flowNodeRef>
      </lane>
    </laneSet>
    <task id="Task_1hcentk" name="choose recipe">
      <incoming>SequenceFlow_0h21x7r</incoming>
      <outgoing>SequenceFlow_0wnb4ke</outgoing>
    </task>
    <exclusiveGateway id="ExclusiveGateway_15hu1pt" name="desired dish?">
      <incoming>SequenceFlow_0wnb4ke</incoming>
    </exclusiveGateway>
    <startEvent id="Event_1ocodej">
      <outgoing>Flow_0893htq</outgoing>
    </startEvent>
    <exclusiveGateway id="Gateway_0bsnwc3" default="Flow_0bqk1uv">
      <incoming>Flow_0893htq</incoming>
      <outgoing>Flow_0bqk1uv</outgoing>
      <outgoing>Flow_06b0evz</outgoing>
    </exclusiveGateway>
    <task id="Activity_1gqz2go">
      <incoming>Flow_0bqk1uv</incoming>
      <outgoing>Flow_00ktdiv</outgoing>
    </task>
    <task id="Activity_0w5i7vs">
      <incoming>Flow_0oz7pln</incoming>
      <outgoing>Flow_0gik0ad</outgoing>
    </task>
    <endEvent id="Event_0hs6bgx">
      <incoming>Flow_0vg5m15</incoming>
    </endEvent>
    <exclusiveGateway id="Gateway_00dhejt">
      <incoming>Flow_0gik0ad</incoming>
      <incoming>Flow_00ktdiv</incoming>
      <outgoing>Flow_0vg5m15</outgoing>
    </exclusiveGateway>
    <subProcess id="Activity_0q6rgrb">
      <incoming>Flow_06b0evz</incoming>
      <outgoing>Flow_0oz7pln</outgoing>
      <startEvent id="Event_19ak306">
        <outgoing>Flow_0t0qj3k</outgoing>
      </startEvent>
      <task id="Activity_08f16eo">
        <incoming>Flow_0t0qj3k</incoming>
        <outgoing>Flow_1wca6u3</outgoing>
      </task>
      <sequenceFlow id="Flow_0t0qj3k" sourceRef="Event_19ak306" targetRef="Activity_08f16eo" />
      <endEvent id="Event_19z8wqh">
        <incoming>Flow_1wca6u3</incoming>
      </endEvent>
      <sequenceFlow id="Flow_1wca6u3" sourceRef="Activity_08f16eo" targetRef="Event_19z8wqh" />
    </subProcess>
    <boundaryEvent id="Event_0jilrsy" attachedToRef="Activity_0w5i7vs">
      <messageEventDefinition id="MessageEventDefinition_079gffz" />
    </boundaryEvent>
    <sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="ExclusiveGateway_15hu1pt" />
    <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
    <sequenceFlow id="Flow_0893htq" sourceRef="Event_1ocodej" targetRef="Gateway_0bsnwc3" />
    <sequenceFlow id="Flow_0bqk1uv" sourceRef="Gateway_0bsnwc3" targetRef="Activity_1gqz2go" />
    <sequenceFlow id="Flow_00ktdiv" sourceRef="Activity_1gqz2go" targetRef="Gateway_00dhejt" />
    <sequenceFlow id="Flow_06b0evz" sourceRef="Gateway_0bsnwc3" targetRef="Activity_0q6rgrb" />
    <sequenceFlow id="Flow_0gik0ad" sourceRef="Activity_0w5i7vs" targetRef="Gateway_00dhejt" />
    <sequenceFlow id="Flow_0vg5m15" sourceRef="Gateway_00dhejt" targetRef="Event_0hs6bgx" />
    <sequenceFlow id="Flow_0oz7pln" sourceRef="Activity_0q6rgrb" targetRef="Activity_0w5i7vs" />
    <boundaryEvent id="Event_1gu7r0i" cancelActivity="false" attachedToRef="Activity_0w5i7vs">
      <signalEventDefinition id="SignalEventDefinition_0a20mqp" />
    </boundaryEvent>
    <startEvent id="StartEvent_1y45yut" name="hunger noticed">
      <outgoing>SequenceFlow_0h21x7r</outgoing>
    </startEvent>
  </process>
  <process id="Process_09jjfys" isExecutable="false">
    <startEvent id="Event_0jqfnc3" name="hunger noticed">
      <outgoing>Flow_1kygnpa</outgoing>
    </startEvent>
    <task id="Activity_0pez278" name="choose recipe">
      <incoming>Flow_1kygnpa</incoming>
      <outgoing>Flow_1qle2of</outgoing>
    </task>
    <exclusiveGateway id="Gateway_16sabya" name="desired dish?">
      <incoming>Flow_1qle2of</incoming>
    </exclusiveGateway>
    <sequenceFlow id="Flow_1qle2of" sourceRef="Activity_0pez278" targetRef="Gateway_16sabya" />
    <sequenceFlow id="Flow_1kygnpa" sourceRef="Event_0jqfnc3" targetRef="Activity_0pez278" />
  </process>
  <bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Collaboration_0z9qm3x">
      <bpmndi:BPMNShape id="Participant_06tnc5v_di" bpmnElement="Participant_06tnc5v" isHorizontal="true">
        <omgdc:Bounds x="160" y="60" width="745" height="760" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="462" y="72" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="444" y="115" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
        <omgdc:Bounds x="680" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_15hu1pt_di" bpmnElement="ExclusiveGateway_15hu1pt" isMarkerVisible="true">
        <omgdc:Bounds x="835" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="828" y="152" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke">
        <omgdi:waypoint x="780" y="120" />
        <omgdi:waypoint x="835" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
        <omgdi:waypoint x="498" y="90" />
        <omgdi:waypoint x="589" y="90" />
        <omgdi:waypoint x="589" y="120" />
        <omgdi:waypoint x="680" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_1dqcv77_di" bpmnElement="Participant_1dqcv77" isHorizontal="true">
        <omgdc:Bounds x="920" y="60" width="600" height="250" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0jqfnc3_di" bpmnElement="Event_0jqfnc3">
        <omgdc:Bounds x="1207" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="1189" y="145" width="73" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0pez278_di" bpmnElement="Activity_0pez278">
        <omgdc:Bounds x="1295" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_16sabya_di" bpmnElement="Gateway_16sabya" isMarkerVisible="true">
        <omgdc:Bounds x="1450" y="95" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="1443" y="152" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1qle2of_di" bpmnElement="Flow_1qle2of">
        <omgdi:waypoint x="1395" y="120" />
        <omgdi:waypoint x="1450" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1kygnpa_di" bpmnElement="Flow_1kygnpa">
        <omgdi:waypoint x="1243" y="120" />
        <omgdi:waypoint x="1295" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Lane_18pm9xn_di" bpmnElement="Lane_18pm9xn" isHorizontal="true">
        <omgdc:Bounds x="190" y="60" width="715" height="125" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_05bj4e3_di" bpmnElement="Lane_05bj4e3" isHorizontal="true">
        <omgdc:Bounds x="190" y="185" width="715" height="635" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1ocodej_di" bpmnElement="Event_1ocodej">
        <omgdc:Bounds x="362" y="232" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0bsnwc3_di" bpmnElement="Gateway_0bsnwc3" isMarkerVisible="true">
        <omgdc:Bounds x="455" y="225" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0893htq_di" bpmnElement="Flow_0893htq">
        <omgdi:waypoint x="398" y="250" />
        <omgdi:waypoint x="455" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_1gqz2go_di" bpmnElement="Activity_1gqz2go">
        <omgdc:Bounds x="570" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0bqk1uv_di" bpmnElement="Flow_0bqk1uv">
        <omgdi:waypoint x="505" y="250" />
        <omgdi:waypoint x="570" y="250" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0hs6bgx_di" bpmnElement="Event_0hs6bgx">
        <omgdc:Bounds x="852" y="282" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_00ktdiv_di" bpmnElement="Flow_00ktdiv">
        <omgdi:waypoint x="670" y="250" />
        <omgdi:waypoint x="688" y="250" />
        <omgdi:waypoint x="688" y="300" />
        <omgdi:waypoint x="705" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_0w5i7vs_di" bpmnElement="Activity_0w5i7vs">
        <omgdc:Bounds x="570" y="320" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_06b0evz_di" bpmnElement="Flow_06b0evz">
        <omgdi:waypoint x="480" y="275" />
        <omgdi:waypoint x="480" y="413" />
        <omgdi:waypoint x="290" y="413" />
        <omgdi:waypoint x="290" y="550" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Gateway_00dhejt_di" bpmnElement="Gateway_00dhejt" isMarkerVisible="true">
        <omgdc:Bounds x="705" y="275" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0gik0ad_di" bpmnElement="Flow_0gik0ad">
        <omgdi:waypoint x="670" y="360" />
        <omgdi:waypoint x="730" y="360" />
        <omgdi:waypoint x="730" y="325" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0vg5m15_di" bpmnElement="Flow_0vg5m15">
        <omgdi:waypoint x="755" y="300" />
        <omgdi:waypoint x="852" y="300" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Activity_0q6rgrb_di" bpmnElement="Activity_0q6rgrb" isExpanded="true">
        <omgdc:Bounds x="260" y="550" width="350" height="200" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_19ak306_di" bpmnElement="Event_19ak306">
        <omgdc:Bounds x="300" y="632" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_08f16eo_di" bpmnElement="Activity_08f16eo">
        <omgdc:Bounds x="390" y="610" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0t0qj3k_di" bpmnElement="Flow_0t0qj3k">
        <omgdi:waypoint x="336" y="650" />
        <omgdi:waypoint x="390" y="650" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_19z8wqh_di" bpmnElement="Event_19z8wqh">
        <omgdc:Bounds x="552" y="632" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1wca6u3_di" bpmnElement="Flow_1wca6u3">
        <omgdi:waypoint x="490" y="650" />
        <omgdi:waypoint x="552" y="650" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0oz7pln_di" bpmnElement="Flow_0oz7pln">
        <omgdi:waypoint x="435" y="550" />
        <omgdi:waypoint x="435" y="475" />
        <omgdi:waypoint x="620" y="475" />
        <omgdi:waypoint x="620" y="400" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_1ay0phe_di" bpmnElement="Event_0jilrsy">
        <omgdc:Bounds x="552" y="382" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_16c1hi9_di" bpmnElement="Event_1gu7r0i">
        <omgdc:Bounds x="552" y="302" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`;
