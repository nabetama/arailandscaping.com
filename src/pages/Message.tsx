import React from 'react'

const Message: React.FC = () => {
  return (
    <section className="about text-left py-20 px-6 mb-0 max-w-screen bg-white">
      <h2 className="text-main text-4xl font-semibold mb-10 tracking-wide border-none p-0 bg-transparent text-center leading-tight">
        代表からのご挨拶
      </h2>
      <div className="max-w-4xl mx-auto flex flex-wrap items-start gap-8 bg-white rounded-xl shadow-sm p-9">
        <img 
          src="/images/ceo_photo.jpg" 
          alt="代表の写真" 
          className="max-w-65 w-full rounded-xl shadow-md border border-border-color bg-yellow-50 mb-4"
        />
        <div className="flex-1 text-lg text-text-sumi font-serif text-left leading-relaxed">
          <p className="mb-4">
            株式会社アライランドスケーピングは1985年に個人事業として創業致しました。私は2代目として父の後を継ぎ、更なるサービス、技術の向上を目指していきたいと考えております。
          </p>
          <p className="mb-4">
            私は他社で9年間植木職人として修行させて頂きました。ど素人だった私に職人としての自信と誇りを叩き込んでいただき、今の全ての考えの根底にはこの9年間の影響が大きく、道標として自分を信じれる時間的な存在です。この経験と父が築いてくれた信頼を活かし、敷居が高く感じてしまう職人としての本格的なサービスを依頼された全ての方に楽しんで頂きたいと考えております。
          </p>
          <p className="mb-4">
            また、仕事の大小に関わらず私たちが携わる全ての仕事に、「感動」という形で応えることを念頭に業務に励んでおります。1軒1軒のお庭の仕事を通して、街全体のランドスケープ（景観設計）まで考えていきたい。地元横浜をもっともっとかっこ良い街にしていきたい。そんなことを思いながら毎日せっせと枝を切っています。
          </p>
          <p className="mb-4">
            これからの株式会社アライランドスケーピングもどうぞよろしくお願いいたします。
          </p>
          <p className="mt-8 text-right font-bold text-main tracking-wide">
            代表取締役 新井 大介
          </p>
        </div>
      </div>
    </section>
  )
}

export default Message 