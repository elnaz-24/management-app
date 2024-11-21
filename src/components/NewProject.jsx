import Input from "./Input.jsx";


function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className=" text-ston-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">Save</button>
        </li>
      </menu>
      <div >
        <Input lable="TITLE" />
        <Input lable="DESCRIPTION" textarea/>
        <Input lable="DUE DATE" />

        </div>
    </div>
  );
}
export default NewProject;
