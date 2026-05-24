import ExploreOther from "@/app/components/ui/exploreOther";
import VisualizerPageLayout, {
  createVisualizerPaths,
} from "@/app/visualizer/components/VisualizerPageLayout";

export const metadata = {
  title: "Serialize/Deserialize Binary Tree | Tree Algorithm | AlgoBuddy",
  description:
    "Master binary tree serialization and deserialization with step-by-step examples and JavaScript implementation details.",
  keywords: ["Serialize Binary Tree", "Deserialize Binary Tree", "Tree Algorithms", "AlgoBuddy"],
  robots: "index, follow",
};

function Animation() {
  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 p-6 shadow-sm">
      <div className="space-y-5">
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Serialize</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Convert a tree into a string representation.</p>
          <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
            1,2,null,null,3,4,null,null,5,null,null
          </div>
        </div>
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Deserialize</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-400">Rebuild the exact same tree from the serialized string.</p>
          <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
            createNode(1) → left 2 → right 3 → left 4 → right 5
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="prose prose-slate mx-auto dark:prose-invert">
      <h2>Serialize and Deserialize a Binary Tree</h2>
      <p>
        Serialization converts a binary tree into a storable string. Deserialization rebuilds the original tree structure from that string. Together, they are useful for saving trees across a network or persistent storage.
      </p>
      <h3>Common strategy</h3>
      <ul>
        <li>Use pre-order traversal to capture node structure and null placeholders.</li>
        <li>Write null children explicitly so the tree shape is preserved.</li>
        <li>During deserialization, read values sequentially and rebuild nodes recursively.</li>
      </ul>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
        <h3>Complexity</h3>
        <ul>
          <li><strong>Time:</strong> O(N) for both serialization and deserialization.</li>
          <li><strong>Space:</strong> O(N) for the output string and recursion stack.</li>
        </ul>
      </div>
    </div>
  );
}

function Code() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`function serialize(root) {
  const vals = [];

  function dfs(node) {
    if (!node) {
      vals.push("null");
      return;
    }
    vals.push(String(node.value));
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return vals.join(",");
}

function deserialize(data) {
  const values = data.split(",");
  let index = 0;

  function build() {
    if (values[index] === "null") {
      index++;
      return null;
    }
    const node = { value: Number(values[index++]), left: null, right: null };
    node.left = build();
    node.right = build();
    return node;
  }

  return build();
}`}
      </pre>
    </div>
  );
}

function Quiz() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: preserving shape</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Why is it important to include null markers during serialization?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> Without null markers, the shape of the tree cannot be reconstructed correctly.</p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Quiz: order choice</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Which traversal order is easiest to use for deterministic serialize/deserialize of a binary tree?</p>
        <p className="mt-4 text-slate-700 dark:text-slate-300"><strong>Answer:</strong> Pre-order, because it writes the root first and preserves subtree structure clearly.</p>
      </div>
    </div>
  );
}

export default function SerializationAlgorithmPage() {
  return (
    <VisualizerPageLayout
      paths={createVisualizerPaths("Tree", "Algorithms", "Serialize/Deserialize")}
      title="Serialize/Deserialize Binary Tree"
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
            { text: "Tree Isomorphism", url: "./isomorphism" },
          ]}
          columns="3"
        />
      }
    />
  );
}
