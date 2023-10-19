"use client";

export default function ProblemAndLinguisticVariable() {
  return (
    <div>
      <h3>Problem:</h3>
      <div>
        As per lay press, 75% of Americans are some how dehydrated chronically.
        Dehydration has been reported to occur in 17%-28% of older adults.
        <a href="https://www.ncbi.nlm.nih.gov/books/NBK555956/#" className="inline italic text-blue-600 dark:text-blue-300 hover:text-black hover:dark:text-white">
          [reference]
        </a>
      </div>
      <h3>What do we want to do:</h3>
      <div>
        Dehydration is dangerous and unhealthy yet common, we want to contribute to fixing that by providing people with recommendation on
        <span className="highlighted font-bold ml-1">
          how much water they should drink
        </span>.
        <br />
        Based on thier:
        <ul className='dark:marker:text-white marker:text-black list-outside'>
          <li>
            <div className="highlighted inline font-semibold">
              Environment Temperature
            </div>
          </li>
          <li>
            <div className="highlighted inline font-semibold">
              Current Water Intake
            </div>
          </li>
          <li>
            <div className="highlighted inline font-semibold">
              Total Steps Taken
            </div>
          </li>
        </ul>
        to keep them adequately hydrated and healthy.
      </div>
      <h3>Linguistic variables and thier ranges:</h3>
      <div className="flex flex-col justify-around lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div>
          <h4 className="text-center">Environment Temperature</h4>
          <table className="max-w-lg table-auto bg-white not-prose">
            <caption className="caption-bottom mt-4">Table 1: Linguistic value and numerical range for environment temperature.</caption>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="text-left py-3 px-4">Lian</td>
                <td className="py-3 px-4 text-right">Smith</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Emma</td>
                <td className="py-3 px-4 text-right">Johnson</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-4">Oliver</td>
                <td className="py-3 px-4 text-right">Williams</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Isabella</td>
                <td className="py-3 px-4 text-right">Brown</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="text-center">Current Water Intake</h4>
          <table className="max-w-lg table-auto bg-white not-prose">
            <caption className="caption-bottom mt-4">Table 2: Linguistic value and numerical range for current water intake.</caption>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="text-left py-3 px-4">Lian</td>
                <td className="py-3 px-4 text-right">Smith</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Emma</td>
                <td className="py-3 px-4 text-right">Johnson</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-4">Oliver</td>
                <td className="py-3 px-4 text-right">Williams</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Isabella</td>
                <td className="py-3 px-4 text-right">Brown</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="text-center">Total Steps Taken</h4>
          <table className="max-w-lg table-auto bg-white not-prose">
            <caption className="caption-bottom mt-4">Table 3: Linguistic value and numerical range for total steps taken.</caption>
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="text-left py-3 px-4">Lian</td>
                <td className="py-3 px-4 text-right">Smith</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Emma</td>
                <td className="py-3 px-4 text-right">Johnson</td>
              </tr>
              <tr>
                <td className="text-left py-3 px-4">Oliver</td>
                <td className="py-3 px-4 text-right">Williams</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="text-left py-3 px-4">Isabella</td>
                <td className="py-3 px-4 text-right">Brown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
