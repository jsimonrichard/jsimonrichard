import {
  createEffect,
  createSignal,
  onMount,
  splitProps,
  type ComponentProps,
} from 'solid-js';
import { Options, Network, Edge, Node } from 'vis-network';
import { DataSet } from 'vis-data';
import { withProps } from '~/with-props';
import { cn } from '~/utils';

type GraphData = {
  nodes: Node[];
  edges: Edge[];
};

export const Graph = (
  props: {
    graph: GraphData;
    options?: Options;
  } & ComponentProps<'div'>,
) => {
  const [local, others] = splitProps(props, ['graph', 'options', 'class']);
  let container!: HTMLDivElement;
  createEffect(() => {
    new Network(
      container,
      {
        nodes: new DataSet(local.graph.nodes),
        edges: new DataSet(local.graph.edges.map((e, i) => ({ ...e, id: i }))),
      },
      {
        physics: {
          enabled: true,
        },
        edges: {
          smooth: false, // hides a state bug
          arrows: 'to',
        },
      },
    );
  });
  return <div ref={container} class={cn(local.class)} {...others} />;
};

const StyledButton = withProps('button', {
  class: 'px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-md',
});

type DataFrame = {
  caption: string;
  frames: GraphData[];
};

export const GraphAnimation = ({ dataFrames }: { dataFrames: DataFrame[] }) => {
  const [t, setT] = createSignal({
    step: 0,
    frame: 0,
  });
  return (
    <div class="p-4 border border-black">
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

      <Graph
        class="h-[600px]"
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
  );
};
