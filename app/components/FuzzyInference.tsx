"use client";

import { getDegreeOfMembership, getClippedWaterDegreeOfMembership } from "@helpers/GetDegreeOfMembershipHelper";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
	ResponsiveContainer,
	Label,
	DefaultTooltipContent,
	ReferenceLine,
	Area,
	ComposedChart
} from "recharts";

import { WaterData } from '@data/WaterData';
import SetFunction from "@components/SetFunction";

interface FuzzyInferenceProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
	handleUpdateMainOuput: (output: number) => void;
}

export default function FuzzyInference({
	temperature,
  water,
  steps,
  dataIsSet = false,
	handleUpdateMainOuput
}:FuzzyInferenceProps) {
	const [degreeOfMembership, setDegreeOfMembership] = useState<any>(null)
	const [rulesToFire, setRulesToFire] = useState<any>(null)
	const [reducedRules, setReducedRules] = useState<any>(null)
	const [samplingPoints, setSamplingPoints] = useState<any>(null)

	function generateRules(data: any) {
		const combinations = [];
	
		for (const temperature in data.temperature) {
			for (const water in data.water) {
				for (const steps in data.steps) {
					const tempValue = data.temperature[temperature];
					const waterValue = data.water[water];
					const stepsValue = data.steps[steps];
	
					if (tempValue !== 0 && waterValue !== 0 && stepsValue !== 0) {
						combinations.push({
							temperature: { key: temperature, value: tempValue },
							currentWaterIntake: { key: water, value: waterValue },
							steps: { key: steps, value: stepsValue },
							recommendedWaterIntake: {
								key: waterIntakeTranslationNormal[Math.ceil(
									(1/3*(temperatureTranslationCamelCase.findIndex(x => x == temperature)+1)) +
									(1/3*(6-(waterIntakeTranslationCamelCase.findIndex(x => x == water)+1))) +
									(1/3*(stepsTranslationCamelCase.findIndex(x => x == steps)+1))
								) - 1],
								value: Math.max(tempValue, waterValue, stepsValue)
							},
						});
					}
				}
			}
		}
	
		return combinations;
	}

	useEffect(() => {
		if(rulesToFire != null) {
			setReducedRules(rulesReducer(rulesToFire))
		}
		
		console.log(degreeOfMembership)
		console.log(rulesToFire)
		console.log(reducedRules)
	}, [degreeOfMembership, rulesToFire])

	useEffect(() => {
		if(reducedRules != null) {
			setSamplingPoints(
				getSamplingPoints(
					findBounds(reducedRules).minLower,
					findBounds(reducedRules).maxHigher
				)
			)
		}
	}, [reducedRules])

	useEffect(() => {
		if(dataIsSet) {
			const value = getDegreeOfMembership(temperature, water, steps)
			setRulesToFire(generateRules(value))
			setDegreeOfMembership(value)
		}
	}, [dataIsSet, temperature, water, steps])
	
	const temperatureTranslationCamelCase = ['cold', 'cool', 'moderate', 'warm', 'hot'];
	const waterIntakeTranslationCamelCase = ['veryLow', 'low', 'moderate', 'high', 'veryHigh'];
	const stepsTranslationCamelCase = ['sedentary', 'lowActivity', 'moderateActivity', 'active', 'veryActive'];

	const temperatureTranslationNormal = ['Cold', 'Cool', 'Moderate', 'Warm', 'Hot'];
	const waterIntakeTranslationNormal = ['Very Low', 'Low ', 'Moderate', 'High', 'Very High'];
	const stepsTranslationNormal = ['Sedentary', 'Low Activity', 'Moderate Activity', 'Active', 'Very Active'];

	const CustomTooltip = (props:any) => {
    if (!props.active) {
      return null
    }
    return <DefaultTooltipContent {...props} label={"At " + props.label + props.unit + " degree of membership is:"}/>;
	};
	
	const getClippedWaterData = () => {
		const recommendedWaterIntakeArray = [];
		for (const item of rulesToFire) {
			recommendedWaterIntakeArray.push(item.recommendedWaterIntake);
		}

		const uniqueKeysMap: any = {};
		for (const item of recommendedWaterIntakeArray) {
			const key = item.key;
			const value = item.value;

			// If the key is not in uniqueKeysMap or the value is greater than the stored value, update it
			if (!uniqueKeysMap[key] || value > uniqueKeysMap[key]) {
				uniqueKeysMap[key] = value;
			}
		}

		// Convert the uniqueKeysMap back to an array of objects
		const limits: any = Object.keys(uniqueKeysMap).map((key) => ({
			key,
			value: uniqueKeysMap[key],
		}));

		console.log(limits)

		// Create a new object to store the modified data
		const modifiedData = WaterData.map((obj: any) => {
			const newObj: any = { name: obj.name };
			for (const key in obj) {
				if (key !== "name") {
					newObj[key] = limits.some((limit: any) => limit.key === key) ? 
							(obj[key] <= limits.find((limit: any) => limit.key === key).value ? obj[key] : limits.find((limit: any) => limit.key === key).value)
							: 0;
				}
			}
			return newObj;
		});

		return modifiedData;
	}

	const rulesReducer = (rules: any) => {
		// console.log(rules)
		const recommendedWaterIntakeArray = [];
		for (const rule of rules) {
			recommendedWaterIntakeArray.push(rule.recommendedWaterIntake);
		}
		// console.log(recommendedWaterIntakeArray)
		const uniqueKeysMap:any = {};

		// Loop through the recommendedWaterIntakeArray and update the maximum values
		for (const item of recommendedWaterIntakeArray) {
			const key = item.key;
			const value = item.value;

			// If the key is not in uniqueKeysMap or the value is greater than the stored value, update it
			if (!uniqueKeysMap[key] || value > uniqueKeysMap[key]) {
				uniqueKeysMap[key] = value;
			}
		}
		// console.log(uniqueKeysMap)
		// Convert the uniqueKeysMap back to an array of objects
		const limits: any = Object.keys(uniqueKeysMap).map((key) => ({
			key,
			value: uniqueKeysMap[key],
		}));
		// console.log(limits)
		return limits;
	}

	const waterVeryLowFunctionsWithCondition = [
		{ function: "1", condition: "0 ≤ x ≤ 300" },
		{ function: "-0.005x + 2.5", condition: "300 < x ≤ 500" },
		{ function: "0", condition: "x > 500" },
	];

	const waterLowFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 400" },
		{ function: "0.005x - 2", condition: "400 < x ≤ 600" },
		{ function: "-0.005x + 4", condition: "600 < x ≤ 800" },
		{ function: "0", condition: "x > 800" },
	];

	const waterModerateFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 700" },
		{ function: "0.005x - 3.5", condition: "700 < x ≤ 900" },
		{ function: "1", condition: "900 < x ≤ 1000" },
		{ function: "-0.005x + 6", condition: "1000 < x ≤ 1200" },
		{ function: "0", condition: "x > 1200" },
	];

	const waterHighFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 1000" },
		{ function: "0.005x - 5", condition: "1000 < x ≤ 1200" },
		{ function: "1", condition: "1200 < x ≤ 1600" },
		{ function: "-0.005x + 9", condition: "1600 < x ≤ 1800" },
		{ function: "0", condition: "x > 1800" },
	];

	const waterVeryHighFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 1500" },
		{ function: "0.005x - 7.5", condition: "1500 < x ≤ 1700" },
		{ function: "1", condition: "x > 1700" },
	];

	const waterFunctions = [
		waterVeryLowFunctionsWithCondition,
		waterLowFunctionsWithCondition,
		waterModerateFunctionsWithCondition,
		waterHighFunctionsWithCondition,
		waterVeryHighFunctionsWithCondition
	]

	const waterSetBounds = [
		{
			name: 'Very Low',
			lower: 0,
			higher: 500
		},
		{
			name: 'Low',
			lower: 400,
			higher: 800,
		}
		,
		{
			name: 'Moderate',
			lower: 700,
			higher: 1200,
		}
		,
		{
			name: 'High',
			lower: 1200,
			higher: 1800,
		}
		,
		{
			name: 'Very High',
			lower: 1500,
			higher: 2000,
		}
	]

	const findBounds = (rules: any) => {
		let lowestLowerBound = Number.MAX_SAFE_INTEGER;
		let highestHigherBound = Number.MIN_SAFE_INTEGER;
		for (const rule of rules) {
			const matchingBound = waterSetBounds.find(bound => bound.name === rule.key);
	
			if (matchingBound) {
				if (matchingBound.lower < lowestLowerBound) {
					lowestLowerBound = matchingBound.lower;
				}
				if (matchingBound.higher > highestHigherBound) {
					highestHigherBound = matchingBound.higher;
				}
			}
		}
	
		return { minLower: lowestLowerBound, maxHigher: highestHigherBound };
	};

	const getSamplingPoints = (min: number, max: number) => {
		const stepSize = (max - min) / 6;

		// Generate 5 evenly distributed points
		const evenlyDistributedPoints = Array.from({ length: 5 }, (_, index) => {
			return min + (index + 1) * stepSize;
		});

		return evenlyDistributedPoints;
	};

	const getSampledPointProperty = () => {
		if(reducedRules != null && samplingPoints != null) {
			return samplingPoints.map((sampledPoint: number) => {
				const ruleValues = reducedRules.map((rule: any) => getClippedWaterDegreeOfMembership(rule.value, sampledPoint, rule.key));
				const maxRuleIndex = ruleValues.indexOf(Math.max(...ruleValues));
				const selectedRule = reducedRules[maxRuleIndex];
		
				return {
					sampledPoint: sampledPoint,
					value: sampledPoint * Math.max(...ruleValues),
					ruleApplied: selectedRule.key,
					ruleValue: Math.max(...ruleValues)
				};
			});
		}
	}

	const getCentroid = (result: any) => {
		const sumOfValues = result.reduce((acc: any, obj: any) => acc + obj.value, 0);
		const sumOfRuleValues = result.reduce((acc: any, obj: any) => acc + obj.ruleValue, 0);
		const output = sumOfValues / sumOfRuleValues;
		handleUpdateMainOuput(output)
		return output;
	}

	// const dataToClip = JSON.parse(JSON.stringify(WaterData));
	// // Loop through each object in the modifiedData array
	// for (let i = 0; i < dataToClip.length; i++) {
	// 	// Loop through the "limits" array to check for "Moderate" and "High" values
	// 	for (const limit of limits) {
	// 			const key = limit.key;
	// 			const value = limit.value;

	// 			// Check if the key exists in the modifiedData object and if the value is greater than the limit
	// 			if (dataToClip[i][key] && dataToClip[i][key] > value) {
	// 				// Set the value to the limit
	// 				dataToClip[i][key] = value;
	// 			}
	// 	}
	// }
	// console.log("clippedData")
	// console.log(dataToClip);
  return (
    <div>
			{
				(dataIsSet && degreeOfMembership != null) ?
					<div>
						<h4>These are the degree of membership according to the inputs:</h4>
						<div className="flex flex-col lg:flex-row justify-around mt-6 space-y-4 lg:space-y-0">
							<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
								<div className="font-semibold mb-2">Environment Temperature:</div>
								<div>
									{temperatureTranslationCamelCase.map((item: any, index: number) => (
										<div key={"temperature"+index}>{temperatureTranslationNormal[index]} = {degreeOfMembership.temperature[item]}</div>
									))}
								</div>
							</div>
							<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
								<div className="font-semibold mb-2">Current Water Intake:</div>
								<div>
									{waterIntakeTranslationCamelCase.map((item: any, index: number) => (
										<div key={"water" + index}>{waterIntakeTranslationNormal[index]} = {degreeOfMembership.water[item]}</div>
									))}
								</div>
							</div>
							<div className="border-4 rounded-lg border-slate-800 dark:border-slate-100 p-4">
								<div className="font-semibold mb-2">Total Steps Taken:</div>
								<div>
									{stepsTranslationCamelCase.map((item: any, index: number) => (
										<div key={"steps" + index}>{stepsTranslationNormal[index]} = {degreeOfMembership.steps[item]}</div>
									))}
								</div>
							</div>
						</div>
						<div className="mt-12">
							<h4>The rules that will be fired are:</h4>
							<div className="italic">* the firing strength for Recomended Water Intake will be the max of the conditions degree of membership, because, it wont hurt to drink slightly more water right?</div>
							<div className="flex flex-wrap py-6">
								{
									rulesToFire.map((rule: any, index: number) => (
										<div key={"rule-" + index} className="ml-4 mb-4 border-4 border-slate-800 dark:border-slate-100 p-4 rounded-lg">
											<span className="font-semibold">Rule {index+1}</span>
											{
												<div key={"rule-" + index + "-" + rule.key + "-" + rule.value}>
													{
														<div>
															<div>IF Environment Temperature = {rule.temperature.key} = {rule.temperature.value}</div>
															<div>AND  Current Water Intake = {rule.currentWaterIntake.key} = {rule.currentWaterIntake.value}</div>
															<div>AND Total Steps Taken = {rule.steps.key} = {rule.steps.value}</div>
															<div>
																THEN Recomended Water Intake = {rule.recommendedWaterIntake.key} = {rule.recommendedWaterIntake.value}
															</div>
														</div>
													}
												</div>
											}
										</div>
									))
								}
							</div>
						</div>
						<div className="mt-12">
							<h4>Remember the fuzzy set for Recomended Water Intake?</h4>
							<div>Let us aggregate the fuzzy sets and the firing strength of Recomended Water Intake from the rules that should be fired.</div>
							<div className="not-prose text-black grid lg:grid-cols-1 gap-y-4 lg:gap-x-4">
								<div className="bg-amber-50 p-6 rounded-lg">
									<div className="text-center font-semibold py-2">Recomended Water Intake</div>
									<div className="text-left">degree of<br />membership</div>
									<div>
										<ResponsiveContainer width={"100%"} minWidth={"300px"} minHeight={"300px"}>
											<ComposedChart
												data={getClippedWaterData()}
											>
												<CartesianGrid strokeDasharray="3 3" />
												<XAxis dataKey="name">
													<Label value={"water intake, mℓ"} offset={-5} position="insideBottomRight"/>
												</XAxis>
												<YAxis/>
												<Tooltip wrapperClassName={"opacity-80"} content={<CustomTooltip unit="mℓ"/>}/>
												<Legend />
												<Area dataKey="Very Low" fill="#264653" stroke="#264653" />
												<Area dataKey="Low" fill="#2a9d8f" stroke="#2a9d8f" />
												<Area dataKey="Moderate" fill="#e9c46a" stroke="#e9c46a" />
												<Area dataKey="High" fill="#f4a261" stroke="#f4a261" />
												<Area dataKey="Very High" fill="#e76f51" stroke="#e76f51" />
											</ComposedChart>
										</ResponsiveContainer>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-12">
							<h4>Lets also make it into a function for easier calculation.</h4>
							<div className="flex flex-wrap">
								{ reducedRules != null &&
									reducedRules.map((rule: any, index: number) => (
										<div key={"rule-" + index + "-as-function"} className="w-max mb-4 mr-4 border-4 border-slate-800 dark:border-slate-100 p-4 rounded-lg">
											{
												<div className="w-full" key={"rule-" + index + "-" + rule.key + "-" + rule.value}>
													{
														<div>
															<div className="text-lg font-semibold">Recomended Water Intake, mℓ</div>
															<div className="text-black">
																<SetFunction title={rule.key} functionsWithCondition={waterFunctions[
																	waterIntakeTranslationNormal.indexOf(rule.key)
																]}/>
															</div>
															<div className="mt-2">Then:</div>
															<div>min( <span className="underline">max(f(x), 0)</span> , {rule.value} )</div>
														</div>
													}
												</div>
											}
										</div>
									))
								}
							</div>
						</div>
						<div className="mt-12">
							<h4>
								Ideally we should find the centroid of the area chart shown above, but for simplicity, lets just sample 5 random amounts of Recommended Water Intake within the ranges of our rules fired.
								If at 1 single point sampled has 2 outputs from the functions above, we should consider the higher one.
							</h4>
							<div>
								<div>
									<div>
										These are the points that we have sampled:
									</div>
									{ reducedRules != null && samplingPoints != null &&
										samplingPoints.map((samplePoint: any, index: number) => (
											<div key={"sample"+index}>
												At {samplePoint} mℓ, firing strenght of the cliped set is:
												{
													reducedRules.map((rule: any, index: number) => (
														<div key={"rule-" + index + "-show-both"} className="mt-2 w-max mb-4 mr-4 border-4 border-slate-800 dark:border-slate-100 p-4 rounded-lg">
															Clipping at: {rule.value}, From set: {rule.key}<br />
															{
																getClippedWaterDegreeOfMembership(rule.value, samplePoint, rule.key)
															}
														</div>
													))
												}
												<div className="mb-12">
													Max firing strength = 
													{
														reducedRules.map((rule: any, index: number) => {
															// Calculate data for 1 single rule here
												
															// Assuming you have a function getClippedWaterDegreeOfMembership
															const data = getClippedWaterDegreeOfMembership(rule.value, samplePoint, rule.key);
															return data;  // Return the data for the current rule
														}).reduce((maxValue: any, currentValue: any) => Math.max(maxValue, currentValue), -Infinity)
													}
												</div>
											</div>
										))}
								</div>
							</div>
							<h4>Finally, we can calculate the output now</h4>
							<div>
								We can generate the output by getting the <span className="italic highlighted underline">sumof(sampled point * firing strength) / sumof(strength fired)</span>.
							</div>
							<div>
								{ getSampledPointProperty() != null &&
									<div>You should still drink: {getCentroid(getSampledPointProperty())} mℓ of water to stay hydrated.</div>
								}
							</div>
						</div>
					</div>
				:
					<div>
						Please give some inputs <a className="highlighted" href="#inputs">here</a> first to see how we do the fuzzy inference.
					</div>
			}
		</div>
  );
}
