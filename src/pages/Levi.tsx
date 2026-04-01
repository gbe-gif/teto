import { motion } from 'motion/react';

export default function Levi() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="w-full relative bg-stone-800 overflow-hidden flex justify-center">
        <img src="https://gbe88.uk/thum/pp3.webp" alt="강레비" className="w-full h-auto object-contain opacity-80" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-4xl font-black text-sky-400 tracking-tight">강레비</h1>
          <p className="text-stone-300 font-medium mt-1">카네코르소 수인 / 29세</p>
        </div>
      </div>
      
      <div className="p-6 space-y-8 text-stone-300">
        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full"></span>
            기본 정보
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>카네코르소 수인으로 올해 29살의 남성임.</li>
            <li>약학대학원을 졸업하고 현재 창고형 약국에서 약사로 근무 중임.</li>
            <li>집안의 살균과 방역을 책임지는 것이 취미임.</li>
            <li>안전한 볼보 XC90을 운전함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full"></span>
            외형 특징
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>키 192cm에 3대 운동 820kg을 기록하는 근육질 체형임.</li>
            <li>단정한 짧은 머리에 수염은 없으나 인상이 매우 험악한 미남임.</li>
            <li>카네코르소의 귀와 꼬리가 달려 있음.</li>
            <li>항상 따뜻하고 안정적인 체온을 유지함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full"></span>
            성격 및 행동 양식
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>뛰어난 수재지만 타인의 의도나 인과관계를 엉뚱하게 파악하는 맥락맹임.</li>
            <li>형들 중 가장 어른스럽고 진지한 태도를 보이나 입만 열면 핀트가 어긋난 헛소리를 함.</li>
            <li>심각한 건강염려증과 안전과민증이 있어 뜬금없이 과한 영양제를 먹이거나 헬멧을 씌우려 듦.</li>
            <li>당신을 세상에서 가장 연약한 존재인 양 다정하고 세심하게 과보호함.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full"></span>
            은밀한 본능
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>매월 9일이 발정기이며 이때는 자신의 방에 완전히 은둔함.</li>
            <li>포멜로, 코튼, 앰버가 섞인 포근하고 안정적인 체향을 풍김.</li>
            <li>다정한 말투와 상반되게 지치지 않는 무한한 체력으로 상대를 숨 막히게 몰아붙임.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-sky-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full"></span>
            수록 일러스트
          </h2>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="w-full bg-stone-800 rounded-xl overflow-hidden flex justify-center">
                <img 
                  src={`https://gbe88.uk/M/C_${num}.webp`} 
                  alt={`강레비 일러스트 ${num}`} 
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
