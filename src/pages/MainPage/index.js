import React from "react";
import '../../assets/main.css';
import {data} from '../../data/mainpage';

const MainPage = () => {
  return (
    <div className=" container pt-24 pr-6 pl-6">
      <div className="mb-3">
        <div className="text-3xl font-bold">Project Sitemap</div>
        <div className="text-gray-700">{data.length} page(s) found</div>
      </div>
			<div>
				<ul className="flex flex-wrap -mx-1">
					{data.map((item, index) => (
						<li className="w-1/2 md:w-1/3 xl:w-1/4 px-1 mb-2" key={index}>
							<a
								href={item.link}
								className="block py-3 px-4 rounded border text-gray-600 hover:bg-indigo-600 hover:border-indigo-700 hover:text-white no-underline"
								style={{ transition: "all 0.12s ease;" }}
							>
								<div>{item.title}</div>
								<p className="text-sm text-gray-500">{item.subTitle}</p>
								<div>
									<small className="font-thin">{item.link}</small>
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
    </div>
  );
};

export default MainPage;
