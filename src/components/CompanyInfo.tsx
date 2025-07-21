import React from 'react'

const CompanyInfo: React.FC = () => {
  return (
    <section className="bg-white border-t border-gray-200 py-20 px-6 text-center">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-2xl font-bold mb-8 tracking-wide text-main">
          アライランドスケーピング株式会社
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          〒231-0836 神奈川県横浜市中区根岸町1-19
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          TEL: 045-624-0047
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          FAX: 045-624-0984
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          E-Mail: <a 
            href="mailto:info@arailandscaping.com" 
            className="underline underline-offset-2 transition-colors duration-200 hover:text-accent"
          >
            info@arailandscaping.com
          </a>
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          神奈川県造園業協会組合
        </div>
        <div className="text-lg mb-4 text-gray-600 font-serif leading-relaxed">
          一級造園技能士, 二級造園施工管理士
        </div>
        <div className="mt-8">
          <a 
            href="https://www.instagram.com/arailandscaping" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 text-3xl transition-all duration-300 inline-block p-2 rounded-full hover:text-accent hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo 