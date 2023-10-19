"use client";
import Image from 'next/image'
import { FaGlassWaterDroplet } from "react-icons/fa6";
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function Home() {
  const [showSteps, setShowSteps] = useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSteps(event.target.checked);
  };

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
          <div className='w-full flex flex-col lg:flex-row justify-between'>
            <label htmlFor="water-intake-input">How much water did u drink so far?</label>
            <input type="text" className='py-1 px-2 rounded-lg' id="water-intake-input" placeholder='cups'/>
          </div>
          <div className='w-full flex flex-col lg:flex-row justify-between'>
            <label htmlFor="environment-temp-input">What is your environment temperature?</label>
            <input type="text" className='py-1 px-2 rounded-lg' id="environment-temp-input" placeholder='°C'/>
          </div>
          <div className='w-full flex flex-col lg:flex-row justify-between'>
            <label htmlFor="steps-taken-input">How many steps did u walked so far?</label>
            <input type="text" className='py-1 px-2 rounded-lg' id="steps-taken-input" />
          </div>
        </div>
        <div className='text-center'>
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
                <a className='bg-amber-100 text-black px-2 py-0.5 rounded-lg block lg:inline hover:bg-black hover:text-amber-100 focus:bg-black focus:text-amber-100' href="#step-1" >
                  Specify the problem and define linguistic variables.
                </a> 
              </li>
              <li>
                <a className='bg-amber-100 text-black px-2 py-0.5 rounded-lg block lg:inline hover:bg-black hover:text-amber-100 focus:bg-black focus:text-amber-100' href="#step-2">
                  Determine fuzzy sets.
                </a>
              </li>  
              <li>
                <a className='bg-amber-100 text-black px-2 py-0.5 rounded-lg block lg:inline hover:bg-black hover:text-amber-100 focus:bg-black focus:text-amber-100' href="#step-3">
                  Elicit and construct fuzzy rules.
                </a>
              </li>  
              <li>
                <a className='bg-amber-100 text-black px-2 py-0.5 rounded-lg block lg:inline hover:bg-black hover:text-amber-100 focus:bg-black focus:text-amber-100' href="#step-4">
                  Encode the fuzzy sets, fuzzy rules, and procedures to perform fuzzy inference into the expert system.
                </a>
              </li>  
              <li>
                <a className='bg-amber-100 text-black px-2 py-0.5 rounded-lg block lg:inline hover:bg-black hover:text-amber-100 focus:bg-black focus:text-amber-100' href="#step-5">
                  Evaluate and tune the system.
                </a>
              </li>  
            </ol>
          </div>
          <div>
            <h2 id='step-1'>
              1. Specify the problem and define linguistic variables.
            </h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, excepturi. Neque architecto quis, possimus deleniti nobis nostrum? Error quis ducimus recusandae esse tempora perspiciatis velit et assumenda, voluptates dolore deleniti, aliquam sit odio laudantium quasi quae corporis dignissimos, dolores repellendus fugit alias quas sunt. Officiis et voluptate dolores ipsam assumenda dolor rem, earum sed doloremque! Deserunt enim aperiam reiciendis neque, vitae dolorem quisquam quos quidem doloribus est numquam tempore ab, pariatur, laboriosam possimus in voluptatibus et excepturi corrupti esse labore saepe totam! Quis, velit reprehenderit cupiditate impedit voluptatibus dignissimos quos quaerat omnis, repellendus beatae, possimus corrupti harum eos qui dolorum. A eum, ipsam rerum dignissimos rem blanditiis, ut unde et libero quia corrupti natus optio exercitationem recusandae explicabo! Eligendi voluptates tenetur vel reprehenderit ex vitae non soluta tempora ducimus doloremque itaque obcaecati accusantium iusto amet eos dolorem fugit nam, rem, aspernatur repudiandae. Magnam illo, beatae deleniti eos ducimus aperiam dolor laudantium expedita quae optio sed temporibus laboriosam enim tenetur. Minima incidunt quod natus fuga facilis maiores dicta ipsa explicabo labore enim accusantium recusandae ratione quibusdam eum unde porro harum nam at, vero saepe, ducimus culpa veniam? Repudiandae asperiores, voluptatum maiores, quo, accusamus architecto voluptatibus similique excepturi sunt cumque vitae in repellat illo tenetur iusto ratione ducimus. Officia magni maxime consequatur! Optio excepturi eaque quia molestias omnis, illo ad nam eligendi veritatis porro quae voluptatibus dolorum sunt accusamus consequatur cumque non dignissimos delectus consectetur odio modi deserunt obcaecati. Beatae, magni nemo et doloremque porro harum eius maxime esse dolore dolor saepe, sapiente veritatis nam, quibusdam amet ex cum officiis velit rem consequuntur ipsam obcaecati aliquid nulla praesentium. Officia accusantium nostrum magnam maiores quia placeat. Explicabo ducimus asperiores aspernatur similique eum dolores doloremque, facilis provident aut cumque aliquam cum perferendis ipsa harum quae, quia laboriosam libero iste voluptas architecto sint rerum. Iste facilis ad aliquid, quod sapiente ex tempore dolorum molestiae tempora cumque autem! Ea numquam maiores, voluptas, aliquid quos aliquam corporis voluptatem provident quam qui architecto culpa unde rerum tenetur minus ducimus odio voluptatum, voluptatibus repudiandae quis libero laboriosam possimus nulla? Assumenda odio, et modi sapiente libero dolores enim aperiam corrupti officia animi praesentium! Facere praesentium quod tenetur cupiditate. Doloremque consectetur animi repudiandae veritatis, dolorum odio consequuntur, vero eum impedit ipsam quaerat. Dolore voluptatum magnam necessitatibus esse. Nulla vitae et aliquid, eum placeat consectetur, vel dolor sapiente esse inventore cupiditate quae culpa quas. Doloremque odio et nemo dignissimos iusto error nostrum doloribus voluptates tempore dolorem assumenda, illo illum ea vero cumque asperiores dicta aliquid pariatur exercitationem nam eveniet tenetur perferendis culpa eum? Dignissimos quae neque labore doloremque numquam suscipit architecto maiores consequuntur sapiente quam repellat eos sed nobis distinctio, alias dolores, minus reprehenderit temporibus iste culpa inventore atque cumque! Doloribus facilis sed libero adipisci quae facere recusandae dolor culpa ipsam sapiente assumenda neque distinctio, autem aspernatur error dolore quidem, fugit, ea aliquam. Accusamus ratione quos incidunt fugiat, eum eaque dolorum atque sint facere nobis. Ullam, recusandae? Necessitatibus quos tenetur accusantium nobis id similique aliquam et sapiente, consequuntur recusandae! Ipsum, odit necessitatibus!
            </div>
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
        </>}
      </article>
    </main>
  )
}
