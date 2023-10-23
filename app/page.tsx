"use client";

import Image from 'next/image'
import { FaGlassWaterDroplet } from "react-icons/fa6";
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';
import ProblemAndLinguisticVariable from '@components/ProblemAndLinguisticVariable';
import FieldBuilderWithValidation from '@components/FieldBuilderWithValidation';
import DetermineFuzzySets from '@components/DetermineFuzzySets';
import ElicitAndConstructFuzzyRules from '@components/ElicitAndConstructFuzzyRules';
import * as Yup from "yup";
import FuzzyInference from '@components/FuzzyInference';


type formData = {
  temperature: number;
  water: number;
  steps: number;
};

export default function Home() {
  const [showSteps, setShowSteps] = useState(true);
  const [output, setOutput] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSteps(event.target.checked);
  };
  const [dataIsSet, setDataIsSet] = useState(false);

  const [formData, setFormData] = useState<formData>({
    temperature: 0,
    water: 0,
    steps: 0
  });

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSubmit = (values: formData) => {
    setDataIsSet(true);
    setFormData(values);
  }

  const updateOutput = (output: number) => {
    setOutput(output);
  };

  const fields = [
      {
        name: "temperature",
        type: "number",
        question: "What is your environment temperature?",
        validation: Yup.number()
                      .transform((value) => Number.isNaN(value) ? null : value )
                      .nullable()
                      .min(-70, "The problem that you are facing is probably greater than dehydration.")
                      .max(70, "The problem that you are facing is probably greater than dehydration.")
                      .required("A number is required."),
        placeholder: "°C",
        style: { },
        inputClassName: 'py-1 px-2 rounded-lg text-black',
        questionAndInputClassName: 'w-full flex flex-col lg:flex-row justify-between',
        errorMessageClassName: "mt-1 text-center italic"
      },
      {
        name: "water",
        type: "number",
        question: "How much water did you drank today?",
        validation: Yup.number()
                      .transform((value) => Number.isNaN(value) ? null : value )
                      .nullable()
                      .min(0, "You know very well you can't drink negative amount of water.")
                      .required("A number is required."),
        placeholder: "mℓ",
        style: { },
        inputClassName: 'py-1 px-2 rounded-lg text-black',
        questionAndInputClassName: 'w-full flex flex-col lg:flex-row justify-between',
        errorMessageClassName: "mt-1 text-center italic"
      },
      {
        name: "steps",
        type: "number",
        question: "How many steps did you walked today?",
        validation: Yup.number()
                      .transform((value) => Number.isNaN(value) ? null : value )
                      .nullable()
                      .min(0, "You can walk backwards, but you can't really unwalk.")
                      .required("A number is required."),
        placeholder: "steps",
        style: { },
        inputClassName: 'py-1 px-2 rounded-lg text-black',
        questionAndInputClassName: 'w-full flex flex-col lg:flex-row justify-between',
        errorMessageClassName: "mt-1 text-center italic"
      }
  ];

  return (
    <main className="dark:bg-slate-700 min-h-screen flex justify-center py-6">
      <article className="prose dark:prose-invert flex flex-col space-y-6 w-11/12 lg:max-w-screen-2xl">
        <div className='text-center'>
          <h1>
            Hydration Assistant <FaGlassWaterDroplet color={'rgb(96 165 250)'} size={'25px'} className="inline my-auto"/>
          </h1>
          A fuzzy system to recommend how much water should a person drink to stay healthy and hydrated, based on thier
          <div id="inputs" className='mx-auto text-left w-max block'>
            <ul className='dark:marker:text-white marker:text-black list-outside'>
              <li>
                Environment Temperature
              </li>
              <li>
                Current Water Intake
              </li>
              <li>
                Total Steps Taken
              </li>
            </ul>
          </div>
          to contribute to <a className="text-blue-500 underline" href="https://sdgs.un.org/goals/goal3" target="_blank"><code>SDG 3: Ensure healthy lives and promote well-being for all at all ages</code></a>.
        </div>
        <div className='flex flex-col space-y-4 w-full lg:max-w-xl mx-auto py-6'>
          <FieldBuilderWithValidation 
            fields = {fields}
            onSubmit = {handleSubmit}
            submitButton
            submitButtonClassName="cursor-pointer rounded-lg p-2 text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white"
            submitButtonText="Calculate"
          />
        </div>
        <div className='text-center'>
          <div>
            <div>
              Temperature: {formData.temperature}
            </div>
            <div>
              Water: {formData.water}
            </div>
            <div>
              Steps: {formData.steps}
            </div>
          </div>
          You still need to drink<br /><span className='highlighted'>{Math.ceil(output/236.588)} cups / {output} mℓ of water</span><br />today
        </div>
        <div className='text-center pt-4'>
          <span>Hide workings</span>
          <Switch className='mx-6' defaultChecked onChange={handleChange}/>
          <span>Show workings</span>
        </div>
        {showSteps &&
          <>
            <div>
              <h2>
                First things first:
              </h2>
              <p>Our process of developing this system follows the steps given below:</p>
              <ol>
                <li>
                  <a className='highlighted px-2 block lg:inline' href="#step-1" >
                    Specify the problem and define linguistic variables.
                  </a> 
                </li>
                <li>
                  <a className='highlighted px-2 block lg:inline' href="#step-2">
                    Determine fuzzy sets.
                  </a>
                </li>  
                <li>
                  <a className='highlighted px-2 block lg:inline' href="#step-3">
                    Elicit and construct fuzzy rules.
                  </a>
                </li>
                <li>
                  <a className='highlighted px-2 block lg:inline' href="#step-4">
                    Encode the fuzzy sets, fuzzy rules, and procedures to perform fuzzy inference into the fuzzy system.
                  </a>
                </li>
              </ol>
            </div>
            <div>
              <h2 id='step-1'>
                1. Specify the problem and define linguistic variables.
              </h2>
              <ProblemAndLinguisticVariable dataIsSet={dataIsSet} temperature={formData.temperature} water={formData.water} steps={formData.steps}/>
            </div>
            <div>
              <h2 id='step-2'>
                2. Determine fuzzy sets.
              </h2>
              <DetermineFuzzySets dataIsSet={dataIsSet} temperature={formData.temperature} water={formData.water} steps={formData.steps}/>
            </div>
            <div>
              <h2 id='step-3'>
                3. Elicit and construct fuzzy rules.
              </h2>
              <ElicitAndConstructFuzzyRules temperature={formData.temperature} water={formData.water} steps={formData.steps} dataIsSet={dataIsSet}/>
            </div>
            <div>
              <h2 id='step-4'>
                4. Encode the fuzzy sets, fuzzy rules, and procedures to perform fuzzy inference.
              </h2>
              <FuzzyInference handleUpdateMainOuput={updateOutput} temperature={formData.temperature} water={formData.water} steps={formData.steps} dataIsSet={dataIsSet}/>
            </div>
          </>
        }
      </article>
    </main>
  )
}
