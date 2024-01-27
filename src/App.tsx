import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"
import { AllUsers, Home, CreatePost, EditPost, Explore, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';


const App = () => {
  return (
   <main className="flex h-screen">
        <Routes>
            {/* {public routes} */} 
            <Route element = {<AuthLayout/>}>
                <Route path='/sign-in' element={<SigninForm/>}/>
                <Route path='/sign-up' element={<SignupForm/>}/>
            </Route>
            
{/* 
    <div>
        import * as React from "react";

function MyComponent(props) {
  
    <div className="bg-slate-900 bg-opacity-90 flex flex-col justify-center items-stretch">
      <div className="flex-col overflow-hidden relative flex min-h-[1200px] w-full justify-center items-stretch max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/abedb24ea3198099707a53224d7ab279e74659a9402c06872efc1f2cf95d8d55?apiKey=c2d6097276184d83ab3fbf47df280f80&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative bg-black flex w-full flex-col items-stretch px-20 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-lime-400 text-5xl font-medium leading-[85px] tracking-tighter mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[76px]">
            Step 2
          </div>
          <div className="text-white text-7xl leading-[84.96px] tracking-tighter mt-6 max-md:max-w-full max-md:text-4xl">
            Generate code
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl font-semibold leading-[60px] whitespace-nowrap justify-center items-center bg-stone-900 aspect-[1.042857142857143] h-[72px] px-7 rounded-[99px] border-2 border-solid border-violet-400 max-md:px-5">
              1
            </div>
            <div className="text-sky-500 text-4xl leading-[60px] self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Select any layer or frame or{" "}
              <span className="text-sky-500">use a sample design </span>
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl font-semibold leading-[60px] whitespace-nowrap justify-center items-center bg-stone-900 aspect-[1.042857142857143] h-[72px] px-6 rounded-[99px] border-2 border-solid border-violet-400 max-md:px-5">
              2
            </div>
            <div className="text-white text-4xl leading-[60px] self-center grow shrink basis-auto my-auto max-md:max-w-full">
              Click ‘Generate code’
            </div>
          </div>
          <div className="items-stretch flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-4xl font-semibold leading-[60px] whitespace-nowrap justify-center items-center bg-stone-900 aspect-[1.042857142857143] h-[72px] px-6 rounded-[99px] border-2 border-solid border-violet-400 max-md:px-5">
              3
            </div>
            <div className="text-white text-4xl leading-[60px] self-center grow shrink basis-auto my-auto max-md:max-w-full">
              The Builder.io editor will auto-launch
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1887df95-4d07-411b-82a6-6ff72410087d?apiKey=c2d6097276184d83ab3fbf47df280f80&"
            className="aspect-[1.87] object-contain object-center w-full overflow-hidden mt-12 mb-1.5 max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>

}


    </div> */}


            {/* {private routes} */}
            <Route element = {<RootLayout/>}>
                <Route index element={<Home />}/>
                <Route path='/explore' element={<Explore />}/>
                <Route path='/saved' element={<Saved />}/>
                <Route path='/all-users' element={<AllUsers />}/>
                <Route path='/create-post' element={<CreatePost />}/>
                <Route path='/update-post/:id' element={<EditPost />}/>
                <Route path='/posts/:id' element={<PostDetails />}/>
                <Route path='/profile/:id/*' element={<Profile />}/>
                <Route path='/update-profile/:id' element={<UpdateProfile />}/>
            </Route>
            
        </Routes>
        <Toaster/>
   </main>
  )
}

export default App