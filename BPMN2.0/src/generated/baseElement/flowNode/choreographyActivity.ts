import { TFlowNode } from '../../Semantic';
import { TCorrelationKey } from '../correlation';
import { TParticipantAssociation } from '../participant';
import { TArtifact } from '../artifact';
import { TFlowElement } from '../baseElement';

// abstract="true"
export interface TChoreographyActivity extends TFlowNode {
  correlationKey?: TCorrelationKey[];
  participantRef: string[];
  initiatingParticipantRef: string;
  loopType?: tChoreographyLoopType; // default="None"
}

// substitutionGroup="flowElement"
export interface TCallChoreography extends TChoreographyActivity {
  participantAssociation?: TParticipantAssociation[];
  calledChoreographyRef?: string;
}

// substitutionGroup="flowElement"
export interface TChoreographyTask extends TChoreographyActivity {
  messageFlowRef: string[];
}

// substitutionGroup="flowElement"
export interface TSubChoreography extends TChoreographyActivity {
  flowElement?: TFlowElement[];
  artifact?: TArtifact[];
}

enum tChoreographyLoopType {
  None = 'None',
  Standard = 'Standard',
  MultiInstanceSequential = 'MultiInstanceSequential',
  MultiInstanceParallel = 'MultiInstanceParallel',
}
