import React from "react";
import { motion } from "framer-motion";

function Page4() {
  const text =
    "지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다.모든 국민은 양심의 자유를 가진다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.".split(
      ""
    );

  return (
    <div className="pf_texts">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 25,
          }}
          key={i}
        >
          {el}
          {""}
        </motion.span>
      ))}
    </div>
  );
}

export default Page4;
