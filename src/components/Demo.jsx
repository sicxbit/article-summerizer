import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

import { useLazyGetSummeryQuery } from "../services/article";

const Demo = () => {
const [article, setArticle] = useState({
  url:'',
  summery :'',
})
const [getSummery,{error, isFetching}] = useLazyGetSummeryQuery()

const handleSubmit = async (e) => {
  e.preventDefault()

  const {data} = await getSummery({articleUrl: article.url})
  
  if (data?.summery) {
    const newArticle = {...article , summery: data.summery}
    setArticle(newArticle)

    console.log(newArticle)
  }
}
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div
        className="flex flex-col w-full
      gap-2"
      >
        <form
          className="relative flex 
        justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 
          ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({
              ...article,url: e.target.value
            })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn
            peer-focus:border-gray-700
            peer-focus:text-gray-700"
          >
            ✔
          </button>
        </form>
        {/*Browser URL History*/}
      </div>
      {/*Display results*/}
    </section>
  );
};

export default Demo;
