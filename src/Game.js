import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export async function getMoney() {
  let moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  if (isNaN(Number(moneyInput))) {
    throw new Error("[ERROR]");
  }

  if (Number(moneyInput) % 1000 !== 0) {
    throw new Error("[ERROR]");
  }

  return Number(moneyInput) / 1000;
}

export function makeLottos(count) {
  Console.print(`\n${count}개를 구매했습니다.`);
  for (let i = 0; i < count; i++) {
    const makeLottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    makeLottoNumbers.sort((a, b) => a - b);
    const lotto = new Lotto(makeLottoNumbers);
  }
}

export async function getUserLottoInput() {
  const userLottoInput = await Console.readLineAsync(
    "\n당첨 번호를 입력해 주세요.\n"
  );
  const userLottoNumbers = userLottoInput.split(",");
  const userLottoBonusNum = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요.\n"
  );

  return {
    numbers: userLottoNumbers.map(Number),
    bonusNumber: Number(userLottoBonusNum),
  };
}
