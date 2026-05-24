import ExploreOther from "@/app/components/ui/exploreOther";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";

export const metadata = {
  title: "Tree Diameter Visualizer | Tree Algorithm | AlgoBuddy",
  description:
    "Explore tree diameter calculation with practical examples, recursion strategies, and complexity analysis for tree algorithms.",
  keywords: ["Tree Diameter", "Tree Algorithms", "Binary Tree", "AlgoBuddy"],
  robots: "index, follow",
};

function Animation() {
  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tree Diameter Overview</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        The tree diameter is the length of the longest path between any two nodes.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-slate-500 dark:text-slate-400">Longest path length measured in edges.</p>
          <div className="mt-4 rounded-3xl bg-gradient-to-r from-cyan-100 to-sky-100 p-5 text-center text-slate-900 dark:from-slate-900 dark:to-slate-800 dark:text-cyan-200">
            Node pair: D ↔ G
            <div className="mt-3 text-sm text-slate-700 dark:text-slate-300">Diameter = 4</div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-slate-500 dark:text-slate-400">Compute using depth-first search and subtree heights.</p>
          <div className="mt-4 rounded-3xl border border-cyan-300 bg-cyan-50 p-5 text-center text-cyan-800 dark:border-cyan-700 dark:bg-cyan-950 dark:text-cyan-200">
            Use height(left) + height(right) at each node.
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="prose prose-slate mx-auto dark:prose-invert">
      <h2>What is Tree Diameter?</h2>
      <p>
        The diameter of a tree is the number of edges on the longest path between any two nodes. In trees, the longest path always passes through a node that is the root of the longest diameter.
      </p>
      <h3>How to compute it</h3>
      <ol>
        <li>Compute the height of left and right subtrees for every node.</li>
        <li>Track the highest value of left height + right height across all nodes.</li>
        <li>The maximum sum is the diameter of the tree.</li>
      </ol>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
        <h3>Complexity</h3>
        <ul>
          <li><strong>Time:</strong> O(N) — each node is visited once.</li>
          <li><strong>Space:</strong> O(H) — recursion stack required for depth-first search.</li>
        </ul>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`let maxDiameter = 0;

function height(node) {
  if (!node) return 0;
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
  return Math.max(leftHeight, rightHeight) + 1;
}

function treeDiameter(root) {
  maxDiameter = 0;
  height(root);
  return maxDiameter;
}`}
      </pre>
    </div>
  );
}

function Quiz() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: Diameter edges</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">If the longest path uses 5 nodes, what is the diameter in edges?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> 4 edges.</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: Computation strategy</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Which subtree heights are combined at each node when calculating diameter?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> left subtree height + right subtree height.</p>
      </div>
    </div>
  );
}

export default function DiameterAlgorithmPage() {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Tree", "Algorithms", "Tree Diameter")}
      title="Tree Diameter"
      animation={<Animation />}
      content={<Content />}
      code={<Code />}
      quiz={<Quiz />}
      exploreOther={
        <ExploreOther
          title="Explore other Tree Algorithms"
          links={[
            { text: "Lowest Common Ancestor", url: "./lca" },
            { text: "Tree Isomorphism", url: "./isomorphism" },
            { text: "Serialize/Deserialize", url: "./serialization" },
          ]}
          columns="3"
        />
      }
    />
  );
}
