import {
  createEffect,
  createSignal,
  onMount,
  splitProps,
  type ComponentProps,
} from 'solid-js';
import vis from 'vis-network';
import { withProps } from '../../with-props';
import { cn } from '../../utils';

type GraphData = {
  nodes: Array<{
    id: number;
    label?: string;
  }>;
  edges: Array<{
    id?: number;
    from: number;
    to: number;
    label?: string;
    color?: string;
  }>;
};

export const Graph = (
  props: { graph: GraphData; options?: vis.Options } & ComponentProps<'div'>,
) => {
  const [local, others] = splitProps(props, ['graph', 'options', 'class']);
  let container!: HTMLDivElement;
  createEffect(() => {
    console.log('mounting');
    new vis.Network(container, {
      nodes: new vis.DataSet(local.graph.nodes),
      edges: new vis.DataSet(local.graph.edges),
    });
  });
  return <div ref={container} class={cn(local.class)} {...others} />;
};

export const SchreierGraphExample = () => (
  <div class="h-[400px]">
    <Graph
      graph={{
        nodes: [
          { id: 1, label: '(1,2,3)' },
          { id: 2, label: '(2,3,1)' },
          { id: 3, label: '(3,1,2)' },
          { id: 4, label: '(1,3,2)' },
          { id: 5, label: '(3,2,1)' },
          { id: 6, label: '(2,1,3)' },
        ],
        edges: [
          { from: 1, to: 4, label: 's', color: '#00f' },
          { from: 2, to: 6, label: 's', color: '#00f' },
          { from: 3, to: 5, label: 's', color: '#00f' },
          { from: 4, to: 1, label: 's', color: '#00f' },
          { from: 6, to: 2, label: 's', color: '#00f' },
          { from: 5, to: 3, label: 's', color: '#00f' },

          { from: 1, to: 2, label: 'r', color: '#f00' },
          { from: 2, to: 3, label: 'r', color: '#f00' },
          { from: 3, to: 1, label: 'r', color: '#f00' },
          { from: 4, to: 5, label: 'r', color: '#f00' },
          { from: 5, to: 6, label: 'r', color: '#f00' },
          { from: 6, to: 4, label: 'r', color: '#f00' },
        ],
      }}
      options={{
        edges: {
          font: {
            size: 18,
            strokeWidth: 8,
          },
          width: 3,
        },
        interaction: {
          dragView: false,
          zoomView: false,
        },
      }}
    />
  </div>
);

const StyledButton = withProps('button', {
  class: 'p-[0.6rem]',
});

export const ToddCoxeterExample = () => {
  const dataFrames = [
    {
      caption: 'Step 1: Label vertex 1',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [],
        },
      ],
    },
    {
      caption: 'Step 2: Follow the word "rrr" in Y and identify at the end',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [{ from: 1, to: 2, label: 'r', color: '#f00' }],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 4, label: 'r', color: '#f00' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "ss" in R for vertex 1 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 5, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "ss" in R for vertex 2 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 6, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "ss" in R for vertex 3 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 7, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "rsrs" in R for vertex 1 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#f00' }, borderWidth: 5 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#f00' }, borderWidth: 5 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#f00' }, borderWidth: 5 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 7, label: 'r', color: '#f00' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
            { id: 8, label: '8', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 8, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 1, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "rsrs" in R for vertex 2 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#f00' }, borderWidth: 5 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#f00' }, borderWidth: 5 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#f00' }, borderWidth: 5 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 7, label: 'r', color: '#f00' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
            { id: 8, label: '8', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 8, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 2, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
          ],
        },
      ],
    },
    {
      caption: 'Step 3: Follow the word "rsrs" in R for vertex 3 and identify',
      frames: [
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#f00' }, borderWidth: 5 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#f00' }, borderWidth: 5 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#f00' }, borderWidth: 5 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 4, to: 7, label: 'r', color: '#f00' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
            { id: 8, label: '8', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 4, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 8, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
            { id: 7, label: '7', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 4, to: 7, label: 'r', color: '#f00' },
            { from: 7, to: 3, label: 's', color: '#00f' },
          ],
        },
        {
          nodes: [
            { id: 1, label: '1', color: { border: '#00f' }, borderWidth: 1 },
            { id: 2, label: '2', color: { border: '#00f' }, borderWidth: 1 },
            { id: 3, label: '3', color: { border: '#00f' }, borderWidth: 1 },
            { id: 4, label: '4', color: { border: '#00f' }, borderWidth: 1 },
            { id: 5, label: '5', color: { border: '#00f' }, borderWidth: 1 },
            { id: 6, label: '6', color: { border: '#00f' }, borderWidth: 1 },
          ],
          edges: [
            { from: 1, to: 2, label: 'r', color: '#f00' },
            { from: 2, to: 3, label: 'r', color: '#f00' },
            { from: 3, to: 1, label: 'r', color: '#f00' },
            { from: 1, to: 4, label: 's', color: '#00f' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 2, to: 5, label: 's', color: '#00f' },
            { from: 3, to: 6, label: 's', color: '#00f' },
            { from: 6, to: 3, label: 's', color: '#00f' },
            { from: 5, to: 4, label: 'r', color: '#f00' },
            { from: 4, to: 1, label: 's', color: '#00f' },
            { from: 6, to: 5, label: 'r', color: '#f00' },
            { from: 5, to: 2, label: 's', color: '#00f' },
            { from: 4, to: 6, label: 'r', color: '#f00' },
            { from: 6, to: 3, label: 's', color: '#00f' },
          ],
        },
      ],
    },
  ];

  const [t, setT] = createSignal({
    step: 0,
    frame: 0,
  });
  return (
    <div
      class="p-4 bg-gray-400 border border-black"
      // css={css`
      //     &:last-child {
      //       border-top: none;
      //     }
      //   }
      // `}
    >
      <div>
        <div>
          {dataFrames[t().step].caption} (frame {t().step + 1}.{t().frame + 1})
        </div>

        <div class="mt-2 flex flex-row justify-stretch gap-2">
          <StyledButton
            onClick={() => {
              setT({
                step: 0,
                frame: 0,
              });
            }}
          >
            Start
          </StyledButton>

          <StyledButton
            onClick={() => {
              if (t().frame === 0) {
                if (t().step > 0) {
                  setT((t) => ({
                    step: t.step - 1,
                    frame: 0,
                  }));
                }
              } else {
                setT((t) => ({
                  step: t.step,
                  frame: 0,
                }));
              }
            }}
          >
            {'<<'}
          </StyledButton>

          <StyledButton
            onClick={() => {
              if (t().frame === 0) {
                if (t().step > 0) {
                  setT((t) => ({
                    step: t.step - 1,
                    frame: dataFrames[t.step - 1].frames.length - 1,
                  }));
                }
              } else {
                setT((t) => ({
                  step: t.step,
                  frame: t.frame - 1,
                }));
              }
            }}
          >
            {'<'}
          </StyledButton>

          <StyledButton
            onClick={() => {
              if (t().frame === dataFrames[t().step].frames.length - 1) {
                if (t().step < dataFrames.length - 1) {
                  setT((t) => ({
                    step: t.step + 1,
                    frame: 0,
                  }));
                }
              } else {
                setT((t) => ({
                  step: t.step,
                  frame: t.frame + 1,
                }));
              }
            }}
          >
            {'>'}
          </StyledButton>

          <StyledButton
            onClick={() => {
              if (t().frame === dataFrames[t().step].frames.length - 1) {
                if (t().step < dataFrames.length - 1) {
                  setT((t) => ({
                    step: t.step + 1,
                    frame: dataFrames[t.step + 1].frames.length - 1,
                  }));
                }
              } else {
                setT((t) => ({
                  step: t.step,
                  frame: dataFrames[t.step].frames.length - 1,
                }));
              }
            }}
          >
            {'>>'}
          </StyledButton>

          <StyledButton
            onClick={() => {
              setT((t) => ({
                step: dataFrames.length - 1,
                frame: dataFrames[dataFrames.length - 1].frames.length - 1,
              }));
            }}
          >
            End
          </StyledButton>
        </div>
      </div>

      <div class="h-[600px]">
        <Graph
          graph={dataFrames[t().step].frames[t().frame]}
          options={{
            edges: {
              font: {
                size: 18,
                strokeWidth: 8,
              },
              width: 3,
            },
            physics: {
              maxVelocity: 6,
            },
            interaction: {
              dragView: false,
              zoomView: false,
            },
          }}
        />
      </div>
    </div>
  );
};
