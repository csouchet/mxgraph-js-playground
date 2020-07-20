import { TCorrelationKey } from '../correlation';
import { TParticipantAssociation } from '../participant';
import { TArtifact, TAssociation, TGroup, TTextAnnotation } from '../artifact';
import { TFlowElement, TFlowNode } from '../flowElement';

// abstract="true"
export interface TChoreographyActivity extends TFlowNode {
  correlationKey?: TCorrelationKey[];
  participantRef: string[];
  initiatingParticipantRef: string;
  loopType?: tChoreographyLoopType; // default="None"
}

export interface TCallChoreography extends TChoreographyActivity {
  participantAssociation?: TParticipantAssociation[];
  calledChoreographyRef?: string;
}

export interface TChoreographyTask extends TChoreographyActivity {
  messageFlowRef: string[];
}

export interface TSubChoreography extends TChoreographyActivity {
  flowElement?: TFlowElement[];

  // artifact
  artifact?: TArtifact[];
  association?: TAssociation[];
  group?: TGroup[];
  textAnnotation?: TTextAnnotation[];
}

enum tChoreographyLoopType {
  None = 'None',
  Standard = 'Standard',
  MultiInstanceSequential = 'MultiInstanceSequential',
  MultiInstanceParallel = 'MultiInstanceParallel',
}
