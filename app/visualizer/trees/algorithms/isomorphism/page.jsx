import ExploreOther from "@/app/components/ui/exploreOther";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";

export const metadata = {
  title: "Tree Isomorphism Visualizer | Tree Algorithm | AlgoBuddy",
  description:
    "Learn how to determine whether two binary trees are structurally identical using tree isomorphism checks, supported by examples and code.",
  keywords: ["Tree Isomorphism", "Binary Tree", "AlgoBuddy"],
  robots: "index, follow",
};

function Animation() {
  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tree A</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Node shape and branching pattern.</p>
          <div className="mt-4 rounded-3xl bg-violet-50 p-4 text-center text-violet-700 dark:bg-violet-950 dark:text-violet-200">
            A<br />/ \<br />B  C
          </div>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Tree B</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Same shape, different labels.</p>
          <div className="mt-4 rounded-3xl bg-violet-50 p-4 text-center text-violet-700 dark:bg-violet-950 dark:text-violet-200">
            X<br />/ \<br />Y  Z
          </div>
        </div>
      </div>
      <div className="mt-6 rounded-3xl border border-violet-300 bg-violet-50 p-5 text-center text-violet-700 dark:border-violet-700 dark:bg-violet-950 dark:text-violet-200">
        These two trees are isomorphic. They have the same structure even though node values differ.
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="prose prose-slate mx-auto dark:prose-invert">
      <h2>Tree Isomorphism explained</h2>
      <p>
        Two binary trees are isomorphic if one can be transformed into the other by swapping left and right children at some nodes. The values themselves can differ, but the structure and branching must match.
      </p>
      <h3>Key steps</h3>
      <ol>
        <li>Check if both nodes are null: they match.</li>
        <li>If only one is null, the trees are not isomorphic.</li>
        <li>Check if the current node pair is structurally compatible.</li>
        <li>Recursively compare both possible subtree pairings.</li>
      </ol>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
        <h3>Complexity</h3>
        <ul>
          <li><strong>Time:</strong> O(N) — visits every node pair at most once.</li>
          <li><strong>Space:</strong> O(H) — recursion depth of the tree.</li>
        </ul>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`function areIsomorphic(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;

  const noFlip = areIsomorphic(a.left, b.left) && areIsomorphic(a.right, b.right);
  const flip = areIsomorphic(a.left, b.right) && areIsomorphic(a.right, b.left);

  return noFlip || flip;
}`}
      </pre>
    </div>
  );
}

function Quiz() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: value independence</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Can two trees with different node values still be isomorphic?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> Yes, values can differ if the structure still matches.</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: swapping children</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">What operation may be required at nodes to determine tree isomorphism?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> Swapping left and right children at some nodes.</p>
      </div>
    </div>
  );
}

export default function IsomorphismAlgorithmPage() {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Tree", "Algorithms", "Tree Isomorphism")}
      title="Tree Isomorphism"
      animation={<Animation />}
      content={<Content />}
      code={<Code />}
      quiz={<Quiz />}
      exploreOther={
        <ExploreOther
          title="Explore other Tree Algorithms"
          links={[
            { text: "Lowest Common Ancestor", url: "./lca" },
            { text: "Tree Diameter", url: "./diameter" },
            { text: "Serialize/Deserialize", url: "./serialization" },
          ]}
          columns="3"
        />
      }
    />
  );
}
