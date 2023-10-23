"use client";

interface ProblemAndLinguisticVariableProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
}

export default function ProblemAndLinguisticVariable({
  temperature,
  water,
  steps,
  dataIsSet = false
}: ProblemAndLinguisticVariableProps) {
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
      <div className="border-4 border-slate-800 dark:border-slate-100 rounded-lg p-4">
        <div className="text-lg font-semibold">Our inputs:</div>
        <div className="flex flex-col flex-wrap justify-around lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div>
            <h4 className="text-center">Environment Temperature</h4>
            <table className="border-separate max-w-lg mx-auto table-auto bg-white not-prose">
              <caption className="caption-bottom mt-4">Table 1: Linguistic value and numerical range for environment temperature.</caption>
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className={(dataIsSet && temperature < 15) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Cold</td>
                  <td className="py-3 px-4 text-right">
                    &lt;15°C
                  </td>
                </tr>
                <tr className={(dataIsSet && temperature > 10 && temperature < 25) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Cool</td>
                  <td className="py-3 px-4 text-right">
                    &gt;10°C to &lt;25°C
                  </td>
                </tr>
                <tr className={(dataIsSet && temperature > 20 && temperature < 30) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Moderate</td>
                  <td className="py-3 px-4 text-right">
                    &gt;20°C to &lt;30°C
                  </td>
                </tr>
                <tr className={(dataIsSet && temperature > 25 && temperature < 35) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Warm</td>
                  <td className="py-3 px-4 text-right">
                    &gt;25°C to &lt;35°C
                  </td>
                </tr>
                <tr className={(dataIsSet && temperature > 30) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Hot</td>
                  <td className="py-3 px-4 text-right">
                    &gt;30°C
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="text-center">Current Water Intake</h4>
            <table className="border-separate max-w-lg mx-auto table-auto bg-white not-prose">
              <caption className="caption-bottom mt-4">Table 2: Linguistic value and numerical range for current water intake.</caption>
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className={(dataIsSet && water >= 0 && water < 500) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Very Low</td>
                  <td className="py-3 px-4 text-right">
                    0mℓ to &lt;500mℓ
                  </td>
                </tr>
                <tr className={(dataIsSet && water > 400 && water < 800) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Low</td>
                  <td className="py-3 px-4 text-right">
                   &gt;400mℓ to &lt;800mℓ
                  </td>
                </tr>
                <tr className={(dataIsSet && water > 700 && water < 1200) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Moderate</td>
                  <td className="py-3 px-4 text-right">
                    &gt;700mℓ to &lt;1200mℓ
                  </td>
                </tr>
                <tr className={(dataIsSet && water > 1000 && water < 1800) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">High</td>
                  <td className="py-3 px-4 text-right">
                    &gt;1000mℓ to &lt;1800mℓ
                  </td>
                </tr>
                <tr className={(dataIsSet && water > 1500) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Very High</td>
                  <td className="py-3 px-4 text-right">
                    &gt; 1500mℓ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 className="text-center">Total Steps Taken</h4>
            <table className="border-separate max-w-lg mx-auto table-auto bg-white not-prose">
              <caption className="caption-bottom mt-4">Table 3: Linguistic value and numerical range for total steps taken.</caption>
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className={(dataIsSet && steps >= 0 && steps < 2000) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Sedentary</td>
                  <td className="py-3 px-4 text-right">
                    0 steps to &lt;2000 steps
                  </td>
                </tr>
                <tr className={(dataIsSet && steps > 1500 && steps < 5000) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Low Activity</td>
                  <td className="py-3 px-4 text-right">
                    &gt;1500 steps to &lt;5000 steps
                  </td>
                </tr>
                <tr className={(dataIsSet && steps > 4000 && steps < 8000) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Moderate Activity</td>
                  <td className="py-3 px-4 text-right">
                    &gt;4000 steps to &lt;8000 steps
                  </td>
                </tr>
                <tr className={(dataIsSet && steps > 7000 && steps < 12000) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Active</td>
                  <td className="py-3 px-4 text-right">
                    &gt;7000 steps to &lt;12000 steps
                  </td>
                </tr>
                <tr className={(dataIsSet && steps > 10000) ? "border-2 border-black bg-amber-100" : ""}>
                  <td className="text-left py-3 px-4">Very Active</td>
                  <td className="py-3 px-4 text-right">
                    &gt; 10000 steps
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-6">
          <div className="font-semibold">Table legend:</div>
          <div className="flex items-end space-x-6">
            <div className="mt-2 h-12 w-32 bg-amber-100 border-2 border-black"></div>
            <div>the categories that you belong in.</div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-4 border-slate-800 dark:border-slate-100 rounded-lg p-4">
        <div className="text-lg font-semibold">Our output:</div>
        <div className="flex flex-col flex-wrap justify-around lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div>
            <h4 className="text-center">Recomended Water Intake</h4>
            <table className="border-separate max-w-lg mx-auto table-auto bg-white not-prose">
              <caption className="caption-bottom mt-4">Table 4: Linguistic value and numerical range for recomended water intake.</caption>
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Linguistic Value</th>
                  <th className="text-right py-3 px-4 uppercase font-semibold text-sm">Numerical Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="text-left py-3 px-4">Very Low</td>
                  <td className="py-3 px-4 text-right">
                    0mℓ to 500mℓ
                  </td>
                </tr>
                <tr>
                  <td className="text-left py-3 px-4">Low</td>
                  <td className="py-3 px-4 text-right">
                    400mℓ to 800mℓ
                  </td>
                </tr>
                <tr>
                  <td className="text-left py-3 px-4">Moderate</td>
                  <td className="py-3 px-4 text-right">
                    700mℓ to 1200mℓ
                  </td>
                </tr>
                <tr>
                  <td className="text-left py-3 px-4">High</td>
                  <td className="py-3 px-4 text-right">
                    1000mℓ to 1800mℓ
                  </td>
                </tr>
                <tr>
                  <td className="text-left py-3 px-4">Very High</td>
                  <td className="py-3 px-4 text-right">
                    ≥ 1500mℓ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p>As we are trying to produce a drinking recommendation result based on the time this system is used, the time scope for these variables should be of <span className="font-bold italic">start of today till now</span>.</p>
    </div>
  )
}
