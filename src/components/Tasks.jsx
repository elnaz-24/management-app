import NewTasks from "./NewTasks";

export default function Tasks(params) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
      <NewTasks />
      <p className="text-stone-800 mb-4">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}
