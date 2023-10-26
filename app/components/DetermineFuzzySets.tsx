"use client";

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
	ReferenceLine
} from "recharts";

import { TemperatureData } from '@data/TemperatureData';
import { WaterData } from '@data/WaterData';
import { StepsData } from '@data/StepsData';
import SetFunction from "@components/SetFunction";

interface DeterminFuzzySetsProps {
  temperature: number;
  water: number;
  steps: number;
  dataIsSet: boolean;
}

export default function DeterminFuzzySets({
  temperature,
  water,
  steps,
  dataIsSet,
}: DeterminFuzzySetsProps) {
	const CustomTooltip = (props:any) => {
    if (!props.active) {
        return null
    }
    return <DefaultTooltipContent {...props} label={"At " + props.label + props.unit + " degree of membership is:"}/>;
	};

	const tempColdFunctionsWithCondition = [
		{ function: "1", condition: "x ≤ 5" },
		{ function: "-0.1x + 1.5", condition: "5 < x ≤ 15" },
		{ function: "0", condition: "x > 15" },
	];

	const tempCoolFunctionsWithCondition = [
		{ function: "0", condition: "x ≤ 10" },
		{ function: "0.2x - 2", condition: "10 < x ≤ 20" },
		{ function: "1", condition: "15 < x ≤ 20" },
		{ function: "-0.2x + 5", condition: "20 < x ≤ 25" },
		{ function: "0", condition: "x > 30" },
	];

	const tempModerateFunctionsWithCondition = [
		{ function: "0", condition: "x ≤ 20" },
		{ function: "0.2x - 4", condition: "20 < x ≤ 25" },
		{ function: "-0.2x + 6", condition: "25 < x ≤ 30" },
		{ function: "0", condition: "x > 30" },
	];

	const tempWarmFunctionsWithCondition = [
		{ function: "0", condition: "x ≤ 25" },
		{ function: "0.2x - 5", condition: "25 < x ≤ 30" },
		{ function: "-0.2x + 7", condition: "30 < x ≤ 35" },
		{ function: "0", condition: "x > 35" },
	];

	const tempHotFunctionsWithCondition = [
		{ function: "0", condition: "x ≤ 30" },
		{ function: "0.1x - 3", condition: "30 < x ≤ 40" },
		{ function: "1", condition: "x > 40" },
	];


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


	const stepsSedentaryFunctionsWithCondition = [
		{ function: "-0.0005x + 1", condition: "0 ≤ x ≤ 2000" },
		{ function: "0", condition: "x > 2000" },
	];

	const stepsLowActivityFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 1500" },
		{ function: "0.001x - 1.5", condition: "1500 < x ≤ 2500" },
		{ function: "1", condition: "2500 < x ≤ 4000" },
		{ function: "-0.001x + 5", condition: "4000 < x ≤ 5000" },
		{ function: "0", condition: "x > 5000" },
	];

	const stepsModerateActivityFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 4000" },
		{ function: "0.0005x - 2", condition: "4000 < x ≤ 6000" },
		{ function: "-0.0005x + 4", condition: "6000 < x ≤ 8000" },
		{ function: "0", condition: "x > 8000" },
	];

	const stepsActiveFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 7000" },
		{ function: "0.0005x - 3.5", condition: "7000 < x ≤ 9000" },
		{ function: "1", condition: "9000 < x ≤ 10000" },
		{ function: "-0.0005x + 6", condition: "10000 < x ≤ 12000" },
		{ function: "0", condition: "x > 12000" },
	];

	const stepsVeryActiveFunctionsWithCondition = [
		{ function: "0", condition: "0 ≤ x ≤ 10000" },
		{ function: "0.0005x - 5", condition: "10000 < x ≤ 12000" },
		{ function: "1", condition: "x > 12000" },
	];

  return (
		<div>
			<div className="rounded-lg lg:p-4 border-4 border-slate-800 dark:border-slate-100">
				<div className="p-4 lg:p-0 mb-4 text-lg font-semibold">Our inputs:</div>
				<div className="not-prose text-black grid lg:grid-cols-2 gap-y-4 lg:gap-x-4">
					<div className="bg-white p-6 rounded-lg">
						<div className="text-center font-semibold py-2">Environment Temperature</div>
						<div className="text-left">degree of<br />membership</div>
						<div>
							<ResponsiveContainer width={"100%"} minWidth={"300px"} minHeight={"300px"}>
								<LineChart
									data={TemperatureData}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name">
										<Label value="temperature, °C" offset={-5} position="insideBottomRight" />
									</XAxis>
									<YAxis/>
									<Tooltip wrapperClassName={"opacity-80"} content={<CustomTooltip unit="°C"/>}/>
									<Legend />
									<Line dataKey="Cold" stroke="#264653" />
									<Line dataKey="Cool" stroke="#2a9d8f" />
									<Line dataKey="Moderate" stroke="#e9c46a" />
									<Line dataKey="Warm" stroke="#f4a261" />
									<Line dataKey="Hot" stroke="#e76f51" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
					<div className="bg-white p-6 rounded-lg">
						<div className="text-center font-semibold py-2">Current Water Intake</div>
						<div className="text-left">degree of<br />membership</div>
						<div>
							<ResponsiveContainer width={"100%"} minWidth={"300px"} minHeight={"300px"}>
								<LineChart
									data={WaterData}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name">
										<Label value={"water intake, mℓ"} offset={-5} position="insideBottomRight"/>
									</XAxis>
									<YAxis/>
									<Tooltip wrapperClassName={"opacity-80"} content={<CustomTooltip unit="mℓ"/>}/>
									<Legend />
									<Line dataKey="Very Low" stroke="#264653" />
									<Line dataKey="Low" stroke="#2a9d8f" />
									<Line dataKey="Moderate" stroke="#e9c46a" />
									<Line dataKey="High" stroke="#f4a261" />
									<Line dataKey="Very High" stroke="#e76f51" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
					<div className="bg-white p-6 rounded-lg">
						<div className="text-center font-semibold py-2">Total Steps Taken</div>
						<div className="text-left">degree of<br />membership</div>
						<div>
							<ResponsiveContainer width={"100%"} minWidth={"300px"} minHeight={"300px"}>
								<LineChart
									data={StepsData}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name">
										<Label value={"steps"} offset={-5} position="insideBottomRight"/>
									</XAxis>
									<YAxis/>
									<Tooltip wrapperClassName={"opacity-80"} content={<CustomTooltip unit=" steps"/>}/>
									<Legend />
									<Line dataKey="Sedentary" stroke="#264653" />
									<Line dataKey="Low Activity" stroke="#2a9d8f" />
									<Line dataKey="Moderate Activity" stroke="#e9c46a" />
									<Line dataKey="Active" stroke="#f4a261" />
									<Line dataKey="Very Active" stroke="#e76f51" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-12 rounded-lg lg:p-4 border-4 border-slate-800 dark:border-slate-100">
				<div className="p-4 lg:p-0 mb-4 text-lg font-semibold">Our output:</div>
				<div className="not-prose text-black grid lg:grid-cols-1 gap-y-4 lg:gap-x-4">
					<div className="bg-white p-6 rounded-lg">
						<div className="text-center font-semibold py-2">Recommended Water Intake</div>
						<div className="text-left">degree of<br />membership</div>
						<div>
							<ResponsiveContainer width={"100%"} minWidth={"300px"} minHeight={"300px"}>
								<LineChart
									data={WaterData}
								>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name">
										<Label value={"water intake, mℓ"} offset={-5} position="insideBottomRight"/>
									</XAxis>
									<YAxis/>
									<Tooltip wrapperClassName={"opacity-80"} content={<CustomTooltip unit="mℓ"/>}/>
									<Legend />
									<Line dataKey="Very Low" stroke="#264653" />
									<Line dataKey="Low" stroke="#2a9d8f" />
									<Line dataKey="Moderate" stroke="#e9c46a" />
									<Line dataKey="High" stroke="#f4a261" />
									<Line dataKey="Very High" stroke="#e76f51" />
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h3>Along with the graphs, lets also define the degree of membership as functions for easier calculation later on</h3>
				<div className="rounded-lg border-4 border-slate-800 dark:border-slate-100 p-4 mb-12">
					<div className="text-lg font-semibold">Environment Temperature, °C</div>
					<div className="flex flex-col lg:flex-row flex-wrap text-black lg:space-x-4 space-y-4">
						<div className="hidden"></div>
						<SetFunction title="Cold" functionsWithCondition={tempColdFunctionsWithCondition}/>
						<SetFunction title="Cool" functionsWithCondition={tempCoolFunctionsWithCondition}/>
						<SetFunction title="Moderate" functionsWithCondition={tempModerateFunctionsWithCondition}/>
						<SetFunction title="Warm" functionsWithCondition={tempWarmFunctionsWithCondition}/>
						<SetFunction title="Hot" functionsWithCondition={tempHotFunctionsWithCondition}/>
					</div>
				</div>
				<div className="rounded-lg border-4 border-slate-800 dark:border-slate-100 p-4 mb-12">
					<div className="text-lg font-semibold">Current Water Intake, mℓ</div>
					<div className="flex flex-col lg:flex-row flex-wrap text-black lg:space-x-4 space-y-4">
						<div className="hidden"></div>
						<SetFunction title="Very Low" functionsWithCondition={waterVeryLowFunctionsWithCondition}/>
						<SetFunction title="Low" functionsWithCondition={waterLowFunctionsWithCondition}/>
						<SetFunction title="Moderate" functionsWithCondition={waterModerateFunctionsWithCondition}/>
						<SetFunction title="High" functionsWithCondition={waterHighFunctionsWithCondition}/>
						<SetFunction title="Very High" functionsWithCondition={waterVeryHighFunctionsWithCondition}/>
					</div>
				</div>
				<div className="rounded-lg border-4 border-slate-800 dark:border-slate-100 p-4 mb-12">
					<div className="text-lg font-semibold">Total Steps Taken, steps</div>
					<div className="flex flex-col lg:flex-row flex-wrap text-black lg:space-x-4 space-y-4">
						<div className="hidden"></div>
						<SetFunction title="Sedentary" functionsWithCondition={stepsSedentaryFunctionsWithCondition}/>
						<SetFunction title="Low Activity" functionsWithCondition={stepsLowActivityFunctionsWithCondition}/>
						<SetFunction title="Moderate Activity" functionsWithCondition={stepsModerateActivityFunctionsWithCondition}/>
						<SetFunction title="Active" functionsWithCondition={stepsActiveFunctionsWithCondition}/>
						<SetFunction title="Very Active" functionsWithCondition={stepsVeryActiveFunctionsWithCondition}/>
					</div>
				</div>
				<div className="rounded-lg border-4 border-slate-800 dark:border-slate-100 p-4">
					<div className="text-lg font-semibold">Recommended Water Intake, mℓ</div>
						<div className="flex flex-col lg:flex-row flex-wrap text-black lg:space-x-4 space-y-4">
							<div className="hidden"></div>
							<SetFunction title="Very Low" functionsWithCondition={waterVeryLowFunctionsWithCondition}/>
							<SetFunction title="Low" functionsWithCondition={waterLowFunctionsWithCondition}/>
							<SetFunction title="Moderate" functionsWithCondition={waterModerateFunctionsWithCondition}/>
							<SetFunction title="High" functionsWithCondition={waterHighFunctionsWithCondition}/>
							<SetFunction title="Very High" functionsWithCondition={waterVeryHighFunctionsWithCondition}/>
						</div>
					</div>
				</div>
			</div>
)}
