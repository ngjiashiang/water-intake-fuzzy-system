"use client";

import FuzzyAssociativeMemoryTables from '@components/FuzzyAssociativeMemoryTables'

interface ElicitAndConstructFuzzyRulesProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
}

export default function ElicitAndConstructFuzzyRules({
	temperature,
  water,
  steps,
  dataIsSet
}: ElicitAndConstructFuzzyRulesProps) {
  return (
    <div>
			<h4>Firsts let us understand the relationship between each of the inputs and the output.</h4>
			<div>
				<ul className='dark:marker:text-white marker:text-black list-outside'>
					<li>
						Greater environment temperature, recommend greater water intake.
					</li>
					<li>
						Greater current water intake, recommend lesser water intake.
					</li>
					<li>
						Greater steps taken, recommend greater water intake.
					</li>
				</ul>
			</div>
			<h4>For simplicity, since we have 3 input and 1 output variables, and each variable has 5 levels, we can assign 1 to 5 as a representation of the levels</h4>
			<div className="mt-4 flex flex-col flex-wrap lg:flex-row justify-around space-y-6 lg:space-y-0 lg:space-x-6">
				<div className="border-slate-800 dark:border-slate-100 border-4 rounded-lg p-4 w-full lg:w-1/5">
					<div className="text-lg font-semibold mb-6">Environment Temperature</div>
					<div>
						Cold: 1<br />
						Cool: 2<br />
						Moderate: 3<br />
						Warm: 4<br />
						Hot: 5<br />
					</div>
				</div>
				<div className="border-slate-800 dark:border-slate-100 border-4 rounded-lg p-4 w-full lg:w-1/5">
					<div className="text-lg font-semibold mb-6">Current Water Intake</div>
					<div>
						Very Low: 1<br />
						Low: 2<br />
						Moderate: 3<br />
						High: 4<br />
						Very High: 5<br />
					</div>
				</div>
				<div className="border-slate-800 dark:border-slate-100 border-4 rounded-lg p-4 w-full lg:w-1/5">
					<div className="text-lg font-semibold mb-6">Total Steps Taken</div>
					<div>
						Sedentary: 1<br />
						Low Activity: 2<br />
						Moderate Activity: 3<br />
						Active: 4<br />
						Very Active: 5<br />
					</div>
				</div>
				<div className="border-slate-800 dark:border-slate-100 border-4 rounded-lg p-4 w-full lg:w-1/5">
					<div className="text-lg font-semibold mb-6">Recommended Water Intake</div>
					<div>
						Very Low: 1<br />
						Low: 2<br />
						Moderate: 3<br />
						High: 4<br />
						Very High: 5<br />
					</div>
				</div>
			</div>
			<h4>With that we can constuct a formula to derive the level of recommended water intake based on the three inputs.</h4>
			<div className="font-semibold">
				Level of Recommended Water Intake =<br />
				<span className="italic">(weightage<sub>a</sub> * Level of Environment Temperature) + (weightage<sub>b</sub> * (6 - Level of Current Water Intake)) + (weightage<sub>c</sub> * Level of Total Steps Taken)</span>
			</div>
			<div className="mt-2 font-semibold">
				Where:<br />
				<span className="italic">weightage<sub>a</sub> + weightage<sub>b</sub> + weightage<sub>c</sub> = 1</span>
			</div>
			<div className="mt-2">
				We are doing (weightage<sub>b</sub> * (6 - Level of Current Water Intake)) because Level of Current Water Intake has a inverse relationship with Level of Recommended Water Intake.
				<br />Any decimals will be rounded up, because no harm in drinking slightly more water, right?
			</div>
			<div className="mt-2">
				In our case we will be using weightage of 1/3 for the three input variables, since we consider them equally important in contributing to the Level of Recommended Water Intake.
			</div>
			<div className="mt-6 font-bold">
				Which brings us to using<br />
				Level of Recommended Water Intake =
				<span className="italic">
					(1/3 * Level of Environment Temperature) + (1/3 * (6 - Level of Current Water Intake)) + (1/3 * Level of Total Steps Taken)
				</span><br />
			</div>
			<div>
				with Level of Recommended Water Intake being rounded up to the nearest integer.
			</div>
			<h4>Lets create a Fuzzy Associative Memory for Level of Recommended Water Intake based on that</h4>
			<FuzzyAssociativeMemoryTables temperature={temperature} water={water} steps={steps} dataIsSet={dataIsSet}/>
		</div>
  );
}
