"use client";

import Image from 'next/image'
import { FaGlassWaterDroplet } from "react-icons/fa6";
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';
import ProblemAndLinguisticVariable from '@components/ProblemAndLinguisticVariable';
import FieldBuilderWithValidation from '@components/FieldBuilderWithValidation';
import * as Yup from "yup";

type formData = {
  temperature: number;
  water: number;
  steps: number;
};

export default function Home() {
  const [showSteps, setShowSteps] = useState(true);
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
        inputClassName: 'py-1 px-2 rounded-lg',
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
        inputClassName: 'py-1 px-2 rounded-lg',
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
        inputClassName: 'py-1 px-2 rounded-lg',
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
          An expert fuzzy system to recommend how much water should a person drink to stay healthy and hydrated, based on thier
          <div className='mx-auto text-left w-max block'>
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
          You still need to drink<br /><span className='text-black bg-amber-100 py-0.5 px-2 rounded-lg'>XX cups / XX ml of water</span><br />today
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
                    Encode the fuzzy sets, fuzzy rules, and procedures to perform fuzzy inference into the expert system.
                  </a>
                </li>  
                <li>
                  <a className='highlighted px-2 block lg:inline' href="#step-5">
                    Evaluate and tune the system.
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
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, excepturi. Neque architecto quis, possimus deleniti nobis nostrum? Error quis ducimus recusandae esse tempora perspiciatis velit et assumenda, voluptates dolore deleniti, aliquam sit odio laudantium quasi quae corporis dignissimos, dolores repellendus fugit alias quas sunt. Officiis et voluptate dolores ipsam assumenda dolor rem, earum sed doloremque! Deserunt enim aperiam reiciendis neque, vitae dolorem quisquam quos quidem doloribus est numquam tempore ab, pariatur, laboriosam possimus in voluptatibus et excepturi corrupti esse labore saepe totam! Quis, velit reprehenderit cupiditate impedit voluptatibus dignissimos quos quaerat omnis, repellendus beatae, possimus corrupti harum eos qui dolorum. A eum, ipsam rerum dignissimos rem blanditiis, ut unde et libero quia corrupti natus optio exercitationem recusandae explicabo! Eligendi voluptates tenetur vel reprehenderit ex vitae non soluta tempora ducimus doloremque itaque obcaecati accusantium iusto amet eos dolorem fugit nam, rem, aspernatur repudiandae. Magnam illo, beatae deleniti eos ducimus aperiam dolor laudantium expedita quae optio sed temporibus laboriosam enim tenetur. Minima incidunt quod natus fuga facilis maiores dicta ipsa explicabo labore enim accusantium recusandae ratione quibusdam eum unde porro harum nam at, vero saepe, ducimus culpa veniam? Repudiandae asperiores, voluptatum maiores, quo, accusamus architecto voluptatibus similique excepturi sunt cumque vitae in repellat illo tenetur iusto ratione ducimus. Officia magni maxime consequatur! Optio excepturi eaque quia molestias omnis, illo ad nam eligendi veritatis porro quae voluptatibus dolorum sunt accusamus consequatur cumque non dignissimos delectus consectetur odio modi deserunt obcaecati. Beatae, magni nemo et doloremque porro harum eius maxime esse dolore dolor saepe, sapiente veritatis nam, quibusdam amet ex cum officiis velit rem consequuntur ipsam obcaecati aliquid nulla praesentium. Officia accusantium nostrum magnam maiores quia placeat. Explicabo ducimus asperiores aspernatur similique eum dolores doloremque, facilis provident aut cumque aliquam cum perferendis ipsa harum quae, quia laboriosam libero iste voluptas architecto sint rerum. Iste facilis ad aliquid, quod sapiente ex tempore dolorum molestiae tempora cumque autem! Ea numquam maiores, voluptas, aliquid quos aliquam corporis voluptatem provident quam qui architecto culpa unde rerum tenetur minus ducimus odio voluptatum, voluptatibus repudiandae quis libero laboriosam possimus nulla? Assumenda odio, et modi sapiente libero dolores enim aperiam corrupti officia animi praesentium! Facere praesentium quod tenetur cupiditate. Doloremque consectetur animi repudiandae veritatis, dolorum odio consequuntur, vero eum impedit ipsam quaerat. Dolore voluptatum magnam necessitatibus esse. Nulla vitae et aliquid, eum placeat consectetur, vel dolor sapiente esse inventore cupiditate quae culpa quas. Doloremque odio et nemo dignissimos iusto error nostrum doloribus voluptates tempore dolorem assumenda, illo illum ea vero cumque asperiores dicta aliquid pariatur exercitationem nam eveniet tenetur perferendis culpa eum? Dignissimos quae neque labore doloremque numquam suscipit architecto maiores consequuntur sapiente quam repellat eos sed nobis distinctio, alias dolores, minus reprehenderit temporibus iste culpa inventore atque cumque! Doloribus facilis sed libero adipisci quae facere recusandae dolor culpa ipsam sapiente assumenda neque distinctio, autem aspernatur error dolore quidem, fugit, ea aliquam. Accusamus ratione quos incidunt fugiat, eum eaque dolorum atque sint facere nobis. Ullam, recusandae? Necessitatibus quos tenetur accusantium nobis id similique aliquam et sapiente, consequuntur recusandae! Ipsum, odit necessitatibus!
              </div>
            </div>
            <div>
              <h2 id='step-3'>
                3. Elicit and construct fuzzy rules.
              </h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, excepturi. Neque architecto quis, possimus deleniti nobis nostrum? Error quis ducimus recusandae esse tempora perspiciatis velit et assumenda, voluptates dolore deleniti, aliquam sit odio laudantium quasi quae corporis dignissimos, dolores repellendus fugit alias quas sunt. Officiis et voluptate dolores ipsam assumenda dolor rem, earum sed doloremque! Deserunt enim aperiam reiciendis neque, vitae dolorem quisquam quos quidem doloribus est numquam tempore ab, pariatur, laboriosam possimus in voluptatibus et excepturi corrupti esse labore saepe totam! Quis, velit reprehenderit cupiditate impedit voluptatibus dignissimos quos quaerat omnis, repellendus beatae, possimus corrupti harum eos qui dolorum. A eum, ipsam rerum dignissimos rem blanditiis, ut unde et libero quia corrupti natus optio exercitationem recusandae explicabo! Eligendi voluptates tenetur vel reprehenderit ex vitae non soluta tempora ducimus doloremque itaque obcaecati accusantium iusto amet eos dolorem fugit nam, rem, aspernatur repudiandae. Magnam illo, beatae deleniti eos ducimus aperiam dolor laudantium expedita quae optio sed temporibus laboriosam enim tenetur. Minima incidunt quod natus fuga facilis maiores dicta ipsa explicabo labore enim accusantium recusandae ratione quibusdam eum unde porro harum nam at, vero saepe, ducimus culpa veniam? Repudiandae asperiores, voluptatum maiores, quo, accusamus architecto voluptatibus similique excepturi sunt cumque vitae in repellat illo tenetur iusto ratione ducimus. Officia magni maxime consequatur! Optio excepturi eaque quia molestias omnis, illo ad nam eligendi veritatis porro quae voluptatibus dolorum sunt accusamus consequatur cumque non dignissimos delectus consectetur odio modi deserunt obcaecati. Beatae, magni nemo et doloremque porro harum eius maxime esse dolore dolor saepe, sapiente veritatis nam, quibusdam amet ex cum officiis velit rem consequuntur ipsam obcaecati aliquid nulla praesentium. Officia accusantium nostrum magnam maiores quia placeat. Explicabo ducimus asperiores aspernatur similique eum dolores doloremque, facilis provident aut cumque aliquam cum perferendis ipsa harum quae, quia laboriosam libero iste voluptas architecto sint rerum. Iste facilis ad aliquid, quod sapiente ex tempore dolorum molestiae tempora cumque autem! Ea numquam maiores, voluptas, aliquid quos aliquam corporis voluptatem provident quam qui architecto culpa unde rerum tenetur minus ducimus odio voluptatum, voluptatibus repudiandae quis libero laboriosam possimus nulla? Assumenda odio, et modi sapiente libero dolores enim aperiam corrupti officia animi praesentium! Facere praesentium quod tenetur cupiditate. Doloremque consectetur animi repudiandae veritatis, dolorum odio consequuntur, vero eum impedit ipsam quaerat. Dolore voluptatum magnam necessitatibus esse. Nulla vitae et aliquid, eum placeat consectetur, vel dolor sapiente esse inventore cupiditate quae culpa quas. Doloremque odio et nemo dignissimos iusto error nostrum doloribus voluptates tempore dolorem assumenda, illo illum ea vero cumque asperiores dicta aliquid pariatur exercitationem nam eveniet tenetur perferendis culpa eum? Dignissimos quae neque labore doloremque numquam suscipit architecto maiores consequuntur sapiente quam repellat eos sed nobis distinctio, alias dolores, minus reprehenderit temporibus iste culpa inventore atque cumque! Doloribus facilis sed libero adipisci quae facere recusandae dolor culpa ipsam sapiente assumenda neque distinctio, autem aspernatur error dolore quidem, fugit, ea aliquam. Accusamus ratione quos incidunt fugiat, eum eaque dolorum atque sint facere nobis. Ullam, recusandae? Necessitatibus quos tenetur accusantium nobis id similique aliquam et sapiente, consequuntur recusandae! Ipsum, odit necessitatibus!
              </div>
            </div>
            <div>
              <h2 id='step-4'>
                4. Encode the fuzzy sets, fuzzy rules, and procedures to perform fuzzy inference into the expert system.
              </h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, excepturi. Neque architecto quis, possimus deleniti nobis nostrum? Error quis ducimus recusandae esse tempora perspiciatis velit et assumenda, voluptates dolore deleniti, aliquam sit odio laudantium quasi quae corporis dignissimos, dolores repellendus fugit alias quas sunt. Officiis et voluptate dolores ipsam assumenda dolor rem, earum sed doloremque! Deserunt enim aperiam reiciendis neque, vitae dolorem quisquam quos quidem doloribus est numquam tempore ab, pariatur, laboriosam possimus in voluptatibus et excepturi corrupti esse labore saepe totam! Quis, velit reprehenderit cupiditate impedit voluptatibus dignissimos quos quaerat omnis, repellendus beatae, possimus corrupti harum eos qui dolorum. A eum, ipsam rerum dignissimos rem blanditiis, ut unde et libero quia corrupti natus optio exercitationem recusandae explicabo! Eligendi voluptates tenetur vel reprehenderit ex vitae non soluta tempora ducimus doloremque itaque obcaecati accusantium iusto amet eos dolorem fugit nam, rem, aspernatur repudiandae. Magnam illo, beatae deleniti eos ducimus aperiam dolor laudantium expedita quae optio sed temporibus laboriosam enim tenetur. Minima incidunt quod natus fuga facilis maiores dicta ipsa explicabo labore enim accusantium recusandae ratione quibusdam eum unde porro harum nam at, vero saepe, ducimus culpa veniam? Repudiandae asperiores, voluptatum maiores, quo, accusamus architecto voluptatibus similique excepturi sunt cumque vitae in repellat illo tenetur iusto ratione ducimus. Officia magni maxime consequatur! Optio excepturi eaque quia molestias omnis, illo ad nam eligendi veritatis porro quae voluptatibus dolorum sunt accusamus consequatur cumque non dignissimos delectus consectetur odio modi deserunt obcaecati. Beatae, magni nemo et doloremque porro harum eius maxime esse dolore dolor saepe, sapiente veritatis nam, quibusdam amet ex cum officiis velit rem consequuntur ipsam obcaecati aliquid nulla praesentium. Officia accusantium nostrum magnam maiores quia placeat. Explicabo ducimus asperiores aspernatur similique eum dolores doloremque, facilis provident aut cumque aliquam cum perferendis ipsa harum quae, quia laboriosam libero iste voluptas architecto sint rerum. Iste facilis ad aliquid, quod sapiente ex tempore dolorum molestiae tempora cumque autem! Ea numquam maiores, voluptas, aliquid quos aliquam corporis voluptatem provident quam qui architecto culpa unde rerum tenetur minus ducimus odio voluptatum, voluptatibus repudiandae quis libero laboriosam possimus nulla? Assumenda odio, et modi sapiente libero dolores enim aperiam corrupti officia animi praesentium! Facere praesentium quod tenetur cupiditate. Doloremque consectetur animi repudiandae veritatis, dolorum odio consequuntur, vero eum impedit ipsam quaerat. Dolore voluptatum magnam necessitatibus esse. Nulla vitae et aliquid, eum placeat consectetur, vel dolor sapiente esse inventore cupiditate quae culpa quas. Doloremque odio et nemo dignissimos iusto error nostrum doloribus voluptates tempore dolorem assumenda, illo illum ea vero cumque asperiores dicta aliquid pariatur exercitationem nam eveniet tenetur perferendis culpa eum? Dignissimos quae neque labore doloremque numquam suscipit architecto maiores consequuntur sapiente quam repellat eos sed nobis distinctio, alias dolores, minus reprehenderit temporibus iste culpa inventore atque cumque! Doloribus facilis sed libero adipisci quae facere recusandae dolor culpa ipsam sapiente assumenda neque distinctio, autem aspernatur error dolore quidem, fugit, ea aliquam. Accusamus ratione quos incidunt fugiat, eum eaque dolorum atque sint facere nobis. Ullam, recusandae? Necessitatibus quos tenetur accusantium nobis id similique aliquam et sapiente, consequuntur recusandae! Ipsum, odit necessitatibus!
              </div>
            </div>
            <div>
              <h2 id='step-5'>
                5. Evaluate and tune the system.
              </h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, excepturi. Neque architecto quis, possimus deleniti nobis nostrum? Error quis ducimus recusandae esse tempora perspiciatis velit et assumenda, voluptates dolore deleniti, aliquam sit odio laudantium quasi quae corporis dignissimos, dolores repellendus fugit alias quas sunt. Officiis et voluptate dolores ipsam assumenda dolor rem, earum sed doloremque! Deserunt enim aperiam reiciendis neque, vitae dolorem quisquam quos quidem doloribus est numquam tempore ab, pariatur, laboriosam possimus in voluptatibus et excepturi corrupti esse labore saepe totam! Quis, velit reprehenderit cupiditate impedit voluptatibus dignissimos quos quaerat omnis, repellendus beatae, possimus corrupti harum eos qui dolorum. A eum, ipsam rerum dignissimos rem blanditiis, ut unde et libero quia corrupti natus optio exercitationem recusandae explicabo! Eligendi voluptates tenetur vel reprehenderit ex vitae non soluta tempora ducimus doloremque itaque obcaecati accusantium iusto amet eos dolorem fugit nam, rem, aspernatur repudiandae. Magnam illo, beatae deleniti eos ducimus aperiam dolor laudantium expedita quae optio sed temporibus laboriosam enim tenetur. Minima incidunt quod natus fuga facilis maiores dicta ipsa explicabo labore enim accusantium recusandae ratione quibusdam eum unde porro harum nam at, vero saepe, ducimus culpa veniam? Repudiandae asperiores, voluptatum maiores, quo, accusamus architecto voluptatibus similique excepturi sunt cumque vitae in repellat illo tenetur iusto ratione ducimus. Officia magni maxime consequatur! Optio excepturi eaque quia molestias omnis, illo ad nam eligendi veritatis porro quae voluptatibus dolorum sunt accusamus consequatur cumque non dignissimos delectus consectetur odio modi deserunt obcaecati. Beatae, magni nemo et doloremque porro harum eius maxime esse dolore dolor saepe, sapiente veritatis nam, quibusdam amet ex cum officiis velit rem consequuntur ipsam obcaecati aliquid nulla praesentium. Officia accusantium nostrum magnam maiores quia placeat. Explicabo ducimus asperiores aspernatur similique eum dolores doloremque, facilis provident aut cumque aliquam cum perferendis ipsa harum quae, quia laboriosam libero iste voluptas architecto sint rerum. Iste facilis ad aliquid, quod sapiente ex tempore dolorum molestiae tempora cumque autem! Ea numquam maiores, voluptas, aliquid quos aliquam corporis voluptatem provident quam qui architecto culpa unde rerum tenetur minus ducimus odio voluptatum, voluptatibus repudiandae quis libero laboriosam possimus nulla? Assumenda odio, et modi sapiente libero dolores enim aperiam corrupti officia animi praesentium! Facere praesentium quod tenetur cupiditate. Doloremque consectetur animi repudiandae veritatis, dolorum odio consequuntur, vero eum impedit ipsam quaerat. Dolore voluptatum magnam necessitatibus esse. Nulla vitae et aliquid, eum placeat consectetur, vel dolor sapiente esse inventore cupiditate quae culpa quas. Doloremque odio et nemo dignissimos iusto error nostrum doloribus voluptates tempore dolorem assumenda, illo illum ea vero cumque asperiores dicta aliquid pariatur exercitationem nam eveniet tenetur perferendis culpa eum? Dignissimos quae neque labore doloremque numquam suscipit architecto maiores consequuntur sapiente quam repellat eos sed nobis distinctio, alias dolores, minus reprehenderit temporibus iste culpa inventore atque cumque! Doloribus facilis sed libero adipisci quae facere recusandae dolor culpa ipsam sapiente assumenda neque distinctio, autem aspernatur error dolore quidem, fugit, ea aliquam. Accusamus ratione quos incidunt fugiat, eum eaque dolorum atque sint facere nobis. Ullam, recusandae? Necessitatibus quos tenetur accusantium nobis id similique aliquam et sapiente, consequuntur recusandae! Ipsum, odit necessitatibus!
              </div>
            </div>
          </>
        }
      </article>
    </main>
  )
}
