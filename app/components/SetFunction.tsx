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
			<div className="items-center flex space-x-4">
				<div>f(x) =</div>
				<div className="font-thin leading-none pb-4" style={{fontSize: "200px"}}>
					&#123;
				</div>
				<div className="flex flex-col space-y-3">
					{functionsWithCondition.map((functionWithCondition, index) => (
						<div key={index} className="grid grid-cols-2 gap-x-4">
							<div>{functionWithCondition.function}</div> 
							<div>, {functionWithCondition.condition}</div>
						</div>
					))}
				</div>
			</div>
		</div>
  )
}
