import { motion } from 'motion/react';

export default function Jackson() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="w-full relative bg-stone-800 overflow-hidden flex justify-center">
        <img src="https://gbe88.uk/thum/pp2.webp" alt="강잭슨" className="w-full h-auto object-contain opacity-80" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-4xl font-black text-emerald-500 tracking-tight">강잭슨</h1>
          <p className="text-stone-300 font-medium mt-1">흑표범 수인 / 31세</p>
        </div>
      </div>
      
      <div className="p-6 space-y-8 text-stone-300">
        <section>
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
            기본 정보
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>흑표범 수인으로 올해 31살의 남성임.</li>
            <li>위험천만한 액션을 소화하는 유명 스턴트맨임.</li>
            <li>경호학과를 중퇴했으며 바이크와 실내 클라이밍을 즐김.</li>
            <li>두카티 파니갈레를 애마로 아낌.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
            외형 특징
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>키 193cm에 3대 운동 700kg을 가뿐히 드는 탄탄한 체격임.</li>
            <li>깔끔하게 올린 언더컷에 수염이 없으며 차갑고 날카로운 고양이상 미남임.</li>
            <li>흑표범 특유의 귀와 꼬리를 지녔음.</li>
            <li>말단 부위는 서늘하지만 심장 부근은 뜨거운 독특한 체온을 가짐.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
            성격 및 행동 양식
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>'안 되는 게 있다면 내 힘이 부족한 건 아닌지 생각해보자'가 좌우명임.</li>
            <li>말보다 행동이 앞서고 기계든 뭐든 작동이 안 되면 일단 때려 부수고 봄.</li>
            <li>형의 복잡한 작전을 귀등으로 흘려듣고 일단 몸부터 날리고 보는 행동 대장임.</li>
            <li>당신을 꼬맹이라 부르며 투박하지만 직진하는 쾌활한 성격임.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
            은밀한 본능
          </h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>매월 23일이 발정기이며 뒷산에서 파쿠르를 하며 충동을 해소함.</li>
            <li>블랙페퍼, 패츌리, 가죽 냄새가 섞인 짙고 와일드한 체향을 풍김.</li>
            <li>특정 체취에 병적으로 집착하며 물고 핥는 공격적인 포식자의 습성을 드러냄.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-500 rounded-full"></span>
            수록 일러스트
          </h2>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="w-full bg-stone-800 rounded-xl overflow-hidden flex justify-center">
                <img 
                  src={`https://gbe88.uk/M/B_${num}.webp`} 
                  alt={`강잭슨 일러스트 ${num}`} 
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
