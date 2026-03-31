import { motion } from 'motion/react';

export default function Places() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="p-6 space-y-10 text-stone-300">
        <div className="mb-2">
          <h1 className="text-3xl font-black text-white tracking-tight">장소 🐾</h1>
        </div>
        <section>
          <div className="flex flex-col gap-2 mb-4">
            <div className="w-full bg-stone-800 rounded-xl overflow-hidden flex justify-center">
              <img src="https://gbe88.uk/M/BG_21.webp" alt="보금자리 단지" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="w-full bg-stone-800 rounded-xl overflow-hidden flex justify-center">
              <img src="https://gbe88.uk/M/BG_22.webp" alt="보금자리 실내" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-stone-100 mb-3">
            보금자리
            <span className="block text-sm font-normal text-stone-400 mt-1">(서울 용산구 하이엔드 주상복합)</span>
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>60평형의 넓은 공간으로 은행 금고용 소재의 현관문이 설치되어 있음.</li>
            <li>거실에는 강철 바디의 특대형 소파와 120인치 스크린, 빔 프로젝터가 구비됨.</li>
            <li>풀 스테인리스로 마감된 부엌에는 업소용 냉장고 4대가 돌아감.</li>
            <li>10인용 원목 식탁이 다이닝룸의 중심을 잡아줌.</li>
          </ul>
        </section>

        <section>
          <div className="w-full bg-stone-800 rounded-xl overflow-hidden mb-4 flex justify-center">
            <img src="https://gbe88.uk/M/BG_24.webp" alt="휴고짐" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-bold text-stone-100 mb-3">휴고짐</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>삼형제가 거주하는 주상복합 상가 지하 2층에 위치한 300평대 피트니스 센터임.</li>
            <li>전체적으로 블랙 톤의 묵직한 인테리어를 자랑함.</li>
            <li>220평에 달하는 프리웨이트 존과 150kg 이상의 덤벨을 다량 보유한 웨이트의 성지임.</li>
            <li>육식계 수인 트레이너들이 대거 포진해 있으며 연예인들도 몰래 PT를 받으러 옴.</li>
          </ul>
        </section>

        <section>
          <div className="w-full bg-stone-800 rounded-xl overflow-hidden mb-4 flex justify-center">
            <img src="https://gbe88.uk/M/BG_25.webp" alt="창고형 약국" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-bold text-stone-100 mb-3">창고형 약국</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>집에서 차로 20분 거리에 있는 상가 지하 1층의 260평 규모 대형 약국임.</li>
            <li>화이트 앤 블루 톤의 깔끔한 대형 마트 스타일로 꾸며져 있음.</li>
            <li>9명의 약사가 상주하며 헬멧을 비롯한 각종 보호구도 함께 판매함.</li>
          </ul>
        </section>

        <section>
          <div className="w-full bg-stone-800 rounded-xl overflow-hidden mb-4 flex justify-center">
            <img src="https://gbe88.uk/M/BG_23.webp" alt="부모님댁" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-bold text-stone-100 mb-3">부모님댁</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>인적이 드문 강원도 배산임수 지형에 지어진 이국적인 빨간 벽돌집임.</li>
            <li>30평대 본채는 프렌치풍의 우아한 인테리어로 실거주 공간임.</li>
            <li>80평대 별채는 힘 넘치는 자식들의 방문에 대비해 특수 카본 소재로 튼튼하게 지어짐.</li>
            <li>넓은 텃밭과 대형 창고를 갖추고 있음.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
