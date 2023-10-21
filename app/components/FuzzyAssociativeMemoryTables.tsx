"use client";

import { getDegreeOfMembership } from "@helpers/GetDegreeOfMembershipHelper";
import { useState, useEffect } from "react";

interface FuzzyAssociativeMemoryTablesProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
}

export default function FuzzyAssociativeMemoryTables({
	temperature,
  water,
  steps,
  dataIsSet = false
}:FuzzyAssociativeMemoryTablesProps) {
	const [degreeOfMembership, setDegreeOfMembership] = useState<any>(null)

	useEffect(() => {
		if(dataIsSet) {
			console.log(getDegreeOfMembership(temperature, water, steps))
			setDegreeOfMembership(getDegreeOfMembership(temperature, water, steps))
		}
	}, [dataIsSet])
	
	const temperatureTranslation = ['cold', 'cool', 'moderate', 'warm', 'hot']
	const waterIntakeTranslation = ['veryLow', 'low', 'moderate', 'high', 'veryHigh']
	const stepsTranslation = ['sedentary', 'lowActivity', 'moderateActivity', 'active', 'veryActive']

	const checkIfRuleShouldBeFired = (temperatureIndex: number, waterIndex: number, stepsIndex: number) => {
		if(degreeOfMembership != null) {
			return degreeOfMembership.water[waterIntakeTranslation[waterIndex]] && degreeOfMembership.temperature[temperatureTranslation[temperatureIndex]] && degreeOfMembership.steps[stepsTranslation[stepsIndex]]
		}

		return false;
	}

  return (
    <div>
			<div className="flex flex-wrap flex-col lg:flex-row justify-around border-4 space-x-2 border-slate-800 dark:border-slate-100 rounded-lg p-4">
				{[...Array(5)].map((steps, stepsIndex) =>
					<table key={"steps-" + stepsIndex} className="mt-6 border-separate not-prose">
						<caption className="caption-bottom mt-4">Steps taken, Level: {stepsIndex + 1}</caption>
						<thead className="text-white">
							<tr>
								<th colSpan={2} className="text-right py-3 px-4 uppercase font-semibold text-sm bg-gray-800"></th>
								<th colSpan={5} className="bg-gray-800 text-center py-3 px-4 uppercase font-semibold text-sm">Current Water Intake Level</th>
							</tr>
						</thead>
						<tbody className="text-gray-700">
							<tr>
								<td colSpan={2} className="bg-gray-800"></td>
								<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">1</td>
								<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">2</td>
								<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">3</td>
								<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">4</td>
								<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">5</td>
							</tr>
							<tr>
								<td rowSpan={6} colSpan={1} className="rotate-180 text-center uppercase bg-gray-800 text-white" style={{ writingMode: 'vertical-rl' }}>
									Temperature Level
								</td>
							</tr>
							{[...Array(5)].map((temperature, temperatureIndex) => 
								<tr key={"steps-" + stepsIndex + "-temperature-" + temperatureIndex}>
									<td className="text-center border-2 p-1 lg:p-4 bg-gray-800 text-white">{temperatureIndex + 1}</td>
									{[...Array(5)].map((curentWaterIntake, curentWaterIntakeIndex) => 
										<td 
											key={"steps-" + stepsIndex + "-temperature-"+ temperatureIndex + "-water-" + curentWaterIntakeIndex}
											className={`text-center border-2 p-1 lg:p-4 
											${
												(
													dataIsSet &&
													checkIfRuleShouldBeFired(temperatureIndex, curentWaterIntakeIndex, stepsIndex)
												) ? "bg-red-300" : ""
											} 
											dark:text-white`}
										>
											{Math.ceil((1/3*(temperatureIndex+1)) + (1/3*(6-(curentWaterIntakeIndex+1))) + (1/3*(stepsIndex+1)))}
										</td>
									)}
								</tr>
							)}
						</tbody>
					</table>
				)}
			</div>
			<div className="mt-6">
				<div className="font-semibold">Table legend:</div>
				<div className="flex items-end space-x-6">
					<div className="mt-2 h-12 w-32 bg-red-300 border-2 border-black"></div>
					<div>The rules that should be fired.</div>
				</div>
			</div>
		</div>
  );
}
