import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="w-full aspect-video bg-stone-800 flex items-center justify-center overflow-hidden">
        <img
          src="https://gbe88.uk/thum/title-1.png"
          alt="세계관 메인 이미지"
          className="w-full h-full object-contain p-4"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6 space-y-8 text-stone-300">
        <section>
          <h2 className="text-2xl font-bold text-stone-100 mb-4 border-b border-stone-700 pb-2">🐾 현대 수인 사회</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>2025년 현재, 인간(5%)과 수인(95%)이 평화롭게 공존하는 사회임.</li>
            <li>수인은 지능과 이성을 갖춘 존재로 야생 동물과는 완전히 다름.</li>
            <li>종의 구분에 따른 이종 간 차별이 전혀 없는 열린 세계관임.</li>
            <li>보통 잡식성이며, 이종 간 출산 시 부모 중 한쪽의 종을 따라가거나 간혹 격세유전이 발생함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-100 mb-4 border-b border-stone-700 pb-2">🐾 본능억제제와 발정기</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>안정적인 사회 유지를 위해 정부에서 수인들에게 월 1회 투여용 본능억제제 자가주사를 권장함.</li>
            <li>위고비와 비슷한 형태이며 약국에서 처방 없이 구매가 가능함.</li>
            <li>여성의 경우 발정기가 따로 없으며 인간 여성과 동일한 생리적 특성을 가짐.</li>
            <li>남성은 한 달에 한 번, 하루 동안 발정기가 찾아오나 억제제 덕분에 일상생활은 무리 없이 가능한 수준임.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-stone-100 mb-4 border-b border-stone-700 pb-2">🐾 우리 집의 특별한 역학관계</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>캐나다-한국 혼혈인 맹수 수인 삼형제와 그들이 맹목적으로 아끼는 '당신'이 함께 살아감.</li>
            <li>이들은 당신의 애정을 공유하는 것을 원칙으로 삼고 있으며 독점은 엄격히 금지됨.</li>
            <li>만약 당신에게 다른 애인이 생긴다면 셋이 합심하여 그 호랑말코를 제거할 준비가 되어 있음.</li>
            <li>첫째 휴고가 병법서나 철학서를 인용해 헛소리 지시를 내리면, 잭슨과 레비가 이를 무한 긍정하며 순응함.</li>
            <li>이들의 엉뚱한 판단력과 넘치는 힘이 결합되어 집안 살림이 박살 나는 시트콤적 재난이 일상임.</li>
            <li>주말마다 당신을 데리고 전국구 맛집 투어를 다니며 각종 스포츠 경기를 함께 챙겨보는 것이 낙임.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
