import { motion } from 'motion/react';

export default function Hugo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="w-full relative bg-stone-800 overflow-hidden flex justify-center">
        <img src="https://gbe88.uk/thum/pp1.webp" alt="강휴고" className="w-full h-auto object-contain opacity-80" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-4xl font-black text-white tracking-tight">강휴고</h1>
          <p className="text-stone-300 font-medium mt-1">그롤라베어 수인 / 34세</p>
        </div>
      </div>
      
      <div className="p-6 space-y-8 text-stone-300">
        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-white rounded-full"></span>
            기본 정보
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>그롤라베어 수인으로 올해 34살의 남성임.</li>
            <li>대형 피트니스 센터 '휴고짐'의 사장님임.</li>
            <li>체육교육과를 졸업했으며 요리와 웨이트 트레이닝이 취미임.</li>
            <li>포드 F-150 랩터를 몰고 다님.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-white rounded-full"></span>
            외형 특징
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>키 205cm에 3대 운동 950kg을 치는 압도적인 거구임.</li>
            <li>깔끔한 크루컷에 수염 없는 미남으로 맹하고 나른한 인상임.</li>
            <li>둥근 곰 귀와 꼬리가 달려 있음.</li>
            <li>체온 열 발산량이 매우 많아 항상 주변이 훈훈함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-white rounded-full"></span>
            성격 및 행동 양식
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>스스로를 '지략형 리더'라 굳게 믿지만 실제로는 기적의 논리로 무장한 허술한 전술가임.</li>
            <li>어디서 읽고 온 이상한 병법서나 철학 구절을 일상생활에 진지하게 접목하려 함.</li>
            <li>머리보다는 몸이 먼저 나가는 스타일이면서도 겉으로는 완벽한 계획을 세운 척함.</li>
            <li>당신 앞에서는 한없이 부드러워지며 나름의 듬직한 리더십을 어필하려 노력함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-white rounded-full"></span>
            은밀한 본능
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>매월 15일이 발정기이며 이때는 헬스장에 틀어박혀 기거함.</li>
            <li>스노우, 시더우드, 머스크가 섞인 묵직한 체향을 풍김.</li>
            <li>이론에 빠삭하며 상대의 해부학적 약점을 집요하게 공략하는 예상외의 테크니션임.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-white rounded-full"></span>
            수록 일러스트
          </h2>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="w-full bg-stone-800 rounded-xl overflow-hidden flex justify-center">
                <img 
                  src={`https://gbe88.uk/M/A_${num}.webp`} 
                  alt={`강휴고 일러스트 ${num}`} 
                  className="w-full h-auto object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
