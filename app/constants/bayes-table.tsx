
export default function BayesTable() {
  return (
    <div
className='w-1/2 flex flex-col gap-2'
>
    <table className="w-1/2 text-sm">
        <thead>
            <tr>
                <th className="text-left">Category</th>

                <th className="text-left">Total Score</th>
                </tr>
        </thead>
        <tbody>
            <tr>
                <td className="text-left">Pathogenic</td>
                <td className="text-left">  &gt;10</td>
                </tr>
            <tr>
                <td className="text-left"> Likely Pathogenic</td>
                <td className="text-left"> 6-9</td>
                </tr>
            <tr>
                <td className="text-left">Uncertain Significance</td>
                <td className="text-left">0-5</td>
                </tr>
            <tr>
                <td className="text-left">Likely Benign</td>
                <td className="text-left"> -1-6</td>
                </tr>
            <tr>
                <td className="text-left">Benign</td>
                <td className="text-left"> {`>=`}
                
                -7</td>
                

            </tr>
            <tr>
                </tr>
        </tbody>
      <p className="text-xs text-gray-500">*Note: This is a beta version of the ACMG classification tool. Please use with caution. Based on Tavtigian 2020</p>
    </table>
    </div>
  );
}