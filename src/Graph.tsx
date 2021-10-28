import React, { useEffect } from "react";
import G6 from '@antv/g6';

export function Graph({ data }: any) {
    const ref = React.useRef(null);
    
    console.log(data);
    
    useEffect(() => {
        let graph: any = null;
        if (!graph) {
            graph = new G6.Graph({
              container: ref.current || '',
              width: 1200,
              height: 1200,
              fitView: true,
              fitViewPadding: [20, 40, 50, 20],
              defaultNode: {
                  size: 30,
                  style: {
                      fill: 'steelblue',
                      stroke: '#666',
                      lineWidth: 1,
                  },
                  labelCfg: {
                      style: {
                          fill: '#fff',
                      },
                  },
              },
              defaultEdge: {
                  style: {
                      opacity: 0.6,
                      stroke: 'grey',
                  },
                  labelCfg: {
                      autoRotate: true,
                  },
              },
            });
            graph.data(data);
            graph.render();
        }
    }, []);
    return <div ref={ref}></div>
}