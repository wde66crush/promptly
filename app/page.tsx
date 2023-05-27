import React from "react";
import Feed from "../components/Feed";



const Home = () => {
  return (
    <section className="w-full flex-center flex-col" >
      <h1 className="head_text text-center">Discover & Use</h1>
      {/* underscores in class names show that it is a custom style in my globals */}
      <br className="max-md:hidden"/>
      <span className="orange_gradient text-center">AI-POWERED PROMPTS</span>
      <p className="desc text-center">Promptly get your AI text prompts</p>
      <Feed/>
    </section>

  )
}

export default Home