export interface Vertex {
    x: number;
    y: number;
    z?: number;
    bulge?: number;
}

export interface Header {
    $ACADVER: string;
    $ACADMAINTVER: number;
    $DWGCODEPAGE: string;
    $REQUIREDVERSIONS: number;
    $INSBASE: Vertex;
    $EXTMIN: Vertex;
    $EXTMAX: Vertex;
}

export interface Continuous {
    name: string;
    description: string;
    patternLength: number;
}

export interface HIDDEN2 {
    name: string;
    description: string;
    pattern: number[];
    patternLength: number;
}

export interface CENTER {
    name: string;
    description: string;
    pattern: number[];
    patternLength: number;
}

export interface LineTypes {
    Continuous: Continuous;
    HIDDEN2: HIDDEN2;
    CENTER: CENTER;
}

export interface LineType {
    handle: string;
    ownerHandle: string;
    lineTypes: LineTypes;
}

export interface FGDim {
    name: string;
    visible: boolean;
    color: number;
}

export interface FGDtlHatch {
    name: string;
    visible: boolean;
    color: number;
}

export interface FGDtlHidden {
    name: string;
    visible: boolean;
    color: number;
}

export interface Vport {
    name: string;
    visible: boolean;
    color: number;
}

export interface FGLogo {
    name: string;
    visible: boolean;
    color: number;
}

export interface Layers {
}

export interface Layer {
    handle: string;
    ownerHandle: string;
    layers: Layers;
}

export interface Tables {
    lineType: LineType;
    layer: Layer;
}

export interface Position {
    x: number;
    y: number;
    z: number;
}

export interface U34 {
    handle: string;
    ownerHandle: string;
    layer: string;
    name: string;
    type: number;
    position: Vertex;
    name2: string;
    xrefPath: string;
    entities: Entity[];
}

export interface Blocks {
}

export interface Entity {
    type: string;
    vertices: Vertex[];
    handle: string;
    ownerHandle: string;
    layer: string;
    shape?: boolean;
    center?: Vertex;
    radius?: number;
    startAngle?: number;
    angleLength?: number;
    endAngle?: number;
}

export interface DXFContent {
    header: Header;
    tables: Tables;
    blocks: Blocks;
    entities: Entity[];
}
