import { motion } from 'motion/react';

export default function Parents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24"
    >
      <div className="p-6 space-y-10 text-stone-300">
        <div className="mb-2">
          <h1 className="text-4xl font-black text-amber-500 tracking-tight">부모님</h1>
          <p className="text-stone-300 font-medium mt-1">백공작 & 흑표범</p>
        </div>

        <section>
          <div className="w-full bg-stone-800 rounded-xl overflow-hidden mb-4 flex justify-center">
            <img src="https://gbe88.uk/M/E_20.webp" alt="아버지" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-bold text-amber-500 mb-4 border-b border-stone-700 pb-2">아버지 (백공작 수인)</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>당신의 친아버지로 올해 61살의 젠틀한 남성임.</li>
            <li>금융사 CEO 자리에서 은퇴한 후 귀농 생활을 즐김.</li>
            <li>키 182cm의 늘씬한 체형에 우아한 이목구비를 지녔음.</li>
            <li>어머니의 강인한 매력에 반해 재혼을 결심함.</li>
            <li>아들들이 치는 각종 대형 사고에도 당황하지 않고 호탕하게 재력으로 수습해 주는 대인배임.</li>
          </ul>
        </section>

        <section>
          <div className="w-full bg-stone-800 rounded-xl overflow-hidden mb-4 flex justify-center">
            <img src="https://gbe88.uk/M/D_19.webp" alt="어머니" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <h2 className="text-2xl font-bold text-amber-500 mb-4 border-b border-stone-700 pb-2">어머니 (흑표범 수인)</h2>
          <ul className="list-disc list-outside ml-5 space-y-2 leading-relaxed break-keep">
            <li>이름은 조엘 스미스로 캐나다 출신의 55살 여성임.</li>
            <li>삼형제의 친어머니로 전 남편의 외도로 이혼 후 2012년에 아버지와 재혼함.</li>
            <li>키 175cm의 탄탄하고 늘씬한 체형을 자랑함.</li>
            <li>여장부 스타일로 삼형제보다 오히려 피가 섞이지 않은 당신을 훨씬 더 애지중지 아낌.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
