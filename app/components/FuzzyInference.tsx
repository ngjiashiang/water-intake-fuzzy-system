"use client";

import { getDegreeOfMembership } from "@helpers/GetDegreeOfMembershipHelper";
import { useState, useEffect } from "react";

interface FuzzyInferenceProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
}

export default function FuzzyInference({
	temperature,
  water,
  steps,
  dataIsSet = false
}:FuzzyInferenceProps) {
	const [degreeOfMembership, setDegreeOfMembership] = useState<any>(null)

	useEffect(() => {
		if(dataIsSet) {
			setDegreeOfMembership(getDegreeOfMembership(temperature, water, steps))
		}
	}, [dataIsSet, temperature, water, steps])
	
	const temperatureTranslation = ['cold', 'cool', 'moderate', 'warm', 'hot'];
	const waterIntakeTranslation = ['veryLow', 'low', 'moderate', 'high', 'veryHigh'];
	const stepsTranslation = ['sedentary', 'lowActivity', 'moderateActivity', 'active', 'veryActive'];

  return (
    <div>
			<div>At:</div>
			<div>Environment Temperature = <span className="highlighted px-2">{temperature}</span>°C</div>
			<div>Current Water Intake = <span className="highlighted px-2">{water}</span>mℓ</div>
			<div>Total Steps Taken = <span className="highlighted px-2">{steps}</span> steps</div>
			<div className="mt-6">The following are our degree of membership:</div>
			{
				dataIsSet && degreeOfMembership != null && 
				<div className="flex flex-col lg:flex-row justify-around mt-6">
					<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
						<div className="font-semibold mb-2">Environment Temperature:</div>
						<div>
							{temperatureTranslation.map((item: any, index: number) => (
								<div key={"temperature"+index}>{item} = {degreeOfMembership.temperature[item]}</div>
							))}
						</div>
					</div>
					<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
						<div className="font-semibold mb-2">Current Water Intake:</div>
						<div>
							{waterIntakeTranslation.map((item: any, index: number) => (
								<div key={"water" + index}>{item} = {degreeOfMembership.water[item]}</div>
							))}
						</div>
					</div>
					<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
						<div className="font-semibold mb-2">Total Steps Taken:</div>
						<div>
							{stepsTranslation.map((item: any, index: number) => (
								<div key={"steps" + index}>{item} = {degreeOfMembership.steps[item]}</div>
							))}
						</div>
					</div>
				</div>
			}
		</div>
  );
}
