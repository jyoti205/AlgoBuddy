import ExploreOther from "@/app/components/ui/exploreOther";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";

export const metadata = {
  title: "Lowest Common Ancestor Visualizer | Tree Algorithm | AlgoBuddy",
  description:
    "Learn the Lowest Common Ancestor algorithm for binary trees with clear examples, time and space complexity analysis, and implementation details.",
  keywords: [
    "Lowest Common Ancestor",
    "LCA",
    "Tree Algorithms",
    "Binary Tree",
    "AlgoBuddy",
  ],
  robots: "index, follow",
};

function Animation() {
  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">LCA Visual Guide</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Understand the ancestor relationships inside a binary tree.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Input tree with nodes A, B, C and target nodes B, D.</p>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-slate-900 dark:to-slate-800 p-4 text-center text-sm font-semibold text-slate-900 dark:text-white">
            B
            <div className="mt-3 grid grid-cols-2 gap-2 text-left text-xs text-slate-700 dark:text-slate-300">
              <span>left → D</span>
              <span>right → E</span>
              <span>parent → A</span>
              <span>root → A</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Result: find the deepest shared ancestor of the selected nodes.</p>
          <div className="mt-4 rounded-2xl border border-violet-300 bg-violet-50 p-4 text-center text-lg font-semibold text-violet-700 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-200">
            Lowest Common Ancestor = A
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="prose prose-slate mx-auto dark:prose-invert">
      <h2>What is Lowest Common Ancestor?</h2>
      <p>
        The Lowest Common Ancestor (LCA) of two nodes in a binary tree is the deepest node that is an ancestor of both nodes.
        It is a core tree algorithm used in family tree queries, file systems, network routing, and many interview problems.
      </p>
      <h3>How LCA works</h3>
      <ol>
        <li>Recursively traverse the tree from the root.</li>
        <li>If the current node matches either target, return it.</li>
        <li>If both left and right calls return non-null values, current node is the LCA.</li>
        <li>If only one side returns a node, propagate that value upward.</li>
      </ol>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
        <h3>Complexity</h3>
        <ul>
          <li><strong>Time:</strong> O(N) — each node is visited at most once.</li>
          <li><strong>Space:</strong> O(H) — recursion stack height, where H is tree height.</li>
        </ul>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
}`}
      </pre>
    </div>
  );
}

function Quiz() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: LCA Behavior</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Which statement is true for the Lowest Common Ancestor of nodes p and q?</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          <li>It is always one of the target nodes.</li>
          <li>It is the deepest node that has both p and q in its subtree.</li>
          <li>It is always the root node.</li>
          <li>It is the shallowest node in the tree.</li>
        </ul>
        <p className="mt-4 text-slate-600 dark:text-slate-400"><strong>Answer:</strong> It is the deepest node that has both p and q in its subtree.</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: Recursive case</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">If the left subtree returns a node and the right subtree returns null, what should the recursion return?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> Return the non-null node from the left subtree.</p>
      </div>
    </div>
  );
}

export default function LCAAlgorithmPage() {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Tree", "Algorithms", "Lowest Common Ancestor")}
      title="Lowest Common Ancestor"
      animation={<Animation />}
      content={<Content />}
      code={<Code />}
      quiz={<Quiz />}
      exploreOther={
        <ExploreOther
          title="Explore other Tree Algorithms"
          links={[
            { text: "Tree Diameter", url: "./diameter" },
            { text: "Tree Isomorphism", url: "./isomorphism" },
            { text: "Serialize/Deserialize", url: "./serialization" },
          ]}
          columns="3"
        />
      }
    />
  );
}
