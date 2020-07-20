// mixed="true"
// <xsd:any namespace="##any" processContents="lax" minOccurs="0"/>
export interface TDocumentation {
  id?: string;
  textFormat?: string; // default="text/plain"
}

export interface TExtension {
  documentation?: TDocumentation[];
  definition?: string;
  mustUnderstand?: boolean; // default="false"
}

// <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded" />
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TExtensionElements {}

// mixed="true"
// <xsd:any namespace="##any" processContents="lax" minOccurs="0"/>
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TScript {}

// mixed="true"
// <xsd:any namespace="##any" processContents="lax" minOccurs="0"/>
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TText {}
