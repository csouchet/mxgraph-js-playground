import AbstractGraph, { LANE_HEIGHT_LITTLE } from './AbstractGraph';
import BPMNXMLParser from '../../components/BPMNXMLParser';

export default class SubGraph extends AbstractGraph {
  constructor(container: Element) {
    super(container);
  }

  public loadGraph(): void {
    const { shapes, edges } = BPMNXMLParser.parse();

    const model = this.graph.getModel();

    model.beginUpdate();
    try {
      const pool = this.createPool('Sub Pool');
      const lane = this.createLane(pool, 'Sub Lane', 0);

      shapes.forEach(shape => {
        const bounds = shape.bounds;
        const bpmnElement = shape.bpmnElement;
        if (bpmnElement !== undefined && bpmnElement !== null) {
          this.graph.insertVertex(lane, bpmnElement.id, bpmnElement.name, bounds.x, bounds.y, bounds.width, bounds.height, bpmnElement.kind);
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
    document.getElementById('subGraphContainer').className = 'hidden';
  }
}
