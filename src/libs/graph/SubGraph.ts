import AbstractGraph, { LANE_HEIGHT_LITTLE, LANE_WIDTH } from './AbstractGraph';
import BPMNXMLParser from '../../components/BPMNXMLParser';
import { ShapeBpmnElementKind } from '../bpmn/shape/ShapeBpmnElementKind';

export default class SubGraph extends AbstractGraph {
  constructor(container: Element) {
    super(container);
  }

  public loadGraph(): void {
    const { shapes, edges } = BPMNXMLParser.parse();

    const model = this.graph.getModel();

    const pools = [];

    model.beginUpdate();
    try {
      shapes.forEach(shape => {
        const bounds = shape.bounds;
        const bpmnElement = shape.bpmnElement;
        if (bpmnElement !== undefined && bpmnElement !== null) {
          const parent = bpmnElement.parent;
          if (parent !== undefined && parent !== null) {
            this.graph.insertVertex(model.getCell(parent.id), bpmnElement.id, bpmnElement.name, bounds.x, bounds.y, bounds.width, bounds.height, bpmnElement.kind, false);
          } else {
            // this.graph.insertVertex(pool, bpmnElement.id, bpmnElement.name, bounds.x, bounds.y, bounds.width, bounds.height, bpmnElement.kind, false);

            const process = bpmnElement.process;
            const poolName = 'Pool'.concat(process.toString());
            let pool = model.getCell(poolName);
            if (pool === undefined || pool === null) {
              if (!Array.isArray(pools)) {
                pool = this.graph.insertVertex(this.graph.getDefaultParent(), poolName, poolName, 0, 0, 2000, 800, ShapeBpmnElementKind.POOL);
              } else {
                const poolY = 800 + pools.length * 800;
                pool = this.graph.insertVertex(this.graph.getDefaultParent(), poolName, poolName, 0, poolY, 2000, 800, ShapeBpmnElementKind.POOL);
                pools.push(pool);
              }
            }

            if (bpmnElement.kind === ShapeBpmnElementKind.LANE) {
              this.graph.insertVertex(pool, bpmnElement.id, bpmnElement.name, bounds.x, bounds.y, bounds.width, bounds.height, bpmnElement.kind, false);
            } else {
              const laneName = 'Lane'.concat(process.toString());
              let lane = model.getCell(laneName);
              if (!lane) {
                const laneY = 300 + model.getChildVertices(pool).length * 300;
                lane = this.graph.insertVertex(pool, laneName, laneName, 0, laneY, 2000, 300, ShapeBpmnElementKind.LANE);
              }
              this.graph.insertVertex(lane, bpmnElement.id, bpmnElement.name, bounds.x, bounds.y, bounds.width, bounds.height, bpmnElement.kind, false);
            }
          }
        }
      });

      edges.forEach(edge => {
        const bpmnElement = edge.bpmnElement;
        if (bpmnElement !== undefined && bpmnElement !== null) {
          const source = bpmnElement.source;
          const target = bpmnElement.target;

          if (source !== undefined && source !== null && target !== undefined && target !== null) {
            this.graph.insertEdge(this.graph.getDefaultParent(), null, bpmnElement.name, model.getCell(source.id), model.getCell(target.id));
          }
        }
      });
    } finally {
      // Updates the display
      model.endUpdate();
    }

    //this.graph.fit();
    //document.getElementById('subGraphContainer').className = 'hidden';
  }
}
