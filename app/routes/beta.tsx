import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import ACMGCalculator from "~/components/acmg_calcv1";

export async function action({ request, params }: ActionArgs) {
  return json({});
}

export default function Beta() {
  return (
    <>
      <ACMGCalculator />
    </>
  );
}

// export default function Beta() {

//   return (
//     <div
// className='flex flex-col w-full gap-2'
// >
//   <form
//     method="POST"
//   className='flex flex-col gap-2'>
//   <Dropdown options={options}

//   />
//   <button className='bg-blue-500 text-white rounded-md p-2'>Submit</button>
//   </form>

//     </div>
//   );
// }

// const options = [
//   {
//     id: "1",
//     label: 'Option 1',
//     value: 'option-1',
//   },
//   {
//     id: "2",
//     label: 'Option 2',
//     value: 'option-2',
//   },
//   {
//     id: "3",
//     label: 'Option 3',
//     value: 'option-3',
//   },
//   {
//     id: "4",
//     label: 'Option 4',
//     value: 'option-4',
//   },

// ];
