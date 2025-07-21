import React from 'react'

interface Work {
  id: number
  image: string
  alt: string
  description: string
}

const Works: React.FC = () => {
  const works: Work[] = [
    {
      id: 1,
      image: '/images/top_slideImg01.png',
      alt: '和の趣を感じる庭園施工例',
      description: '和の趣を活かした庭園施工。伝統と現代の調和。'
    },
    {
      id: 2,
      image: '/images/top_slideImg02.png',
      alt: '現代的な和風外構の施工例',
      description: '現代住宅に合う和風外構。機能美と景観美の両立。'
    },
    {
      id: 3,
      image: '/images/top_slideImg03.png',
      alt: '四季を彩る植栽の施工例',
      description: '四季折々の植栽で彩る空間づくり。'
    }
  ]

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center max-w-7xl mx-auto">
        {works.map((work) => (
          <div 
            key={work.id}
            className="w-full md:flex-1 md:min-w-70 md:max-w-95 bg-white shadow-work rounded-work flex flex-col items-center mb-5 md:mb-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-work-hover"
          >
            <img 
              src={work.image} 
              alt={work.alt}
              className="w-full h-55 object-cover"
            />
            <div className="p-6 text-base text-gray-700 text-center w-full leading-relaxed font-medium">
              {work.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works 