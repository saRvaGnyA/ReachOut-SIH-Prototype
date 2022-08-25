import { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import Link from 'next/link';
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <Link href="/login">
          <div class="cursor-pointer">Login as User</div>
        </Link>
      ),
    },
    position: { x: 0, y: 25 },
  },

  {
    id: '2',
    // type: 'output',
    data: {
      label: (
        <Link href="/createdSchemes">
          <div class="cursor-pointer">Apply for Schemes</div>
        </Link>
      ),
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '3',
    // type: 'output',
    data: {
      label: (
        <Link href="/maps">
          <div class="cursor-pointer">Look for Available Jobs near you</div>
        </Link>
      ),
    },
    position: { x: 300, y: 100 },
  },
  {
    id: '4',
    // type: 'output',
    data: {
      label: (
        <Link href="/createdJobs">
          <div class="cursor-pointer">Apply for Jobs</div>
        </Link>
      ),
    },
    position: { x: 300, y: 200 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
];
const rfStyle = {
  backgroundColor: '#D0C0F7',
};

function Flowchart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div
      class="flex h-full w-full justify-center align-items "
      style={{ height: 500 }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        // style={rfStyle}
      />
    </div>
  );
}

export default Flowchart;
