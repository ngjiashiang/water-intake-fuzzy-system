"use client";
interface FunctionWithCondition {
  function: string;
  condition: string;
}

interface SetFunctionProps {
  title: string;
  functionsWithCondition: FunctionWithCondition[];
}

export default function SetFunction({
	title,
	functionsWithCondition
}: SetFunctionProps) {
  return (
    <div className="bg-white rounded-lg p-4">
			<div className="mt-4 font-semibold">{title}</div>
			<div className="items-center flex lg:space-x-4">
				<div>f(x) =</div>
				<div className="font-thin pb-8" style={{letterSpacing: "0.1px", fontSize: "300px"}}>
					&#123;
				</div>
				<div className="flex flex-col space-y-3">
					{functionsWithCondition.map((functionWithCondition, index) => (
						<div key={index}>
							<span>{functionWithCondition.function}</span> 
							<span>, {functionWithCondition.condition}</span>
						</div>
					))}
				</div>
			</div>
		</div>
  )
}
