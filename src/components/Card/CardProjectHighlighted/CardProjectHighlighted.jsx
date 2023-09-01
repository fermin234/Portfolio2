import { useState } from "react";
import Carousel from "../../Carrousel/Carrousel";
import rombo_fill from '../../../assets/Icons/rombo_fill.png'
import rombo_unfill from '../../../assets/Icons/rombo_unfill.png'

export default function CardProjects({ project }) {

  const { title, description, technologies, aplication, code, images, responsive } = project;
  const romboFillLength = Array.from({ length: responsive });
  const romboUnfillLength = Array.from({ length: 5 - responsive });
  const [seeMore, setSeeMore] = useState(false)


  return (
    <div>
      <div className="w-[60%] float-right pl-2 max-[1526px]:hidden">
        <Carousel images={images} />
      </div>
      <h1 className="font-bold text-2xl text-color-2 pb-4">{title}</h1>
      <div className={`${seeMore ? "line-clamp-none" : "line-clamp-[12]"} md:text-lg text-sm`}>{description}</div>
      <button onClick={() => setSeeMore(!seeMore)} className={`${description.length < 750 && "hidden"} text-color-2 hover:opacity-60`}>{seeMore ? "Ver menos" : "Ver mas"}</button>

      <div className={`${seeMore ? "w-full" : "w-[40%]"} max-[1526px]:w-full h-full`}>
        <div className="max-[1526px]:flex hidden">
          <Carousel images={images} />
        </div>

        <div className="flex flex-col gap-5 mt-5">

          <div className="w-full flex items-center justify-center gap-1">
            <h1 className="font-Montserrat text-color-2 font-semibold">Responsive: </h1>
            {
              romboFillLength.map((e, i) => <img key={`"rombo ${i}`} src={rombo_fill} />)
            }
            {
              romboUnfillLength.map((e, i) => <img key={`"rombo2 ${i}`} src={rombo_unfill} />)
            }
          </div>


          <div className="flex flex-wrap justify-center items-center gap-2 w-full h-full">
            {technologies.map((Technology, techIndex) => (
              <div
                key={techIndex}
                className="flex flex-col justify-center items-center">
                {Technology}
              </div>
            ))}
          </div>

          <div className="font-Montserrat flex justify-center w-full items-center gap-10">
            <a
              rel="noreferrer"
              target="_blank"
              className="border-2 p-2 border-[#ecd85d] text-color-2 hover:bg-[#ecd85d] hover:text-[#181607] font-extrabold text-center"
              href={aplication}
            >
              Ver aplicación
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              className="text-color-2 hover:text-[#181607] font-extrabold text-center"
              href={code}
            >
              Ver código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}