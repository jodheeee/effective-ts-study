function Item7() {
  return (
    <div>
      <h1>타입이 값들의 집합이라고 생각하기</h1>
      <ul>
        <li>
          타입을 값의 집합으로 생각하면 이해하기 편함. 이 집합은 유한(boolean,
          리터럴 타입)하거나 무한(number 또는 string)합니다.
        </li>
        <li>
          타입스크립트 타입은 엄격한 상속 관계가 아니라 겹쳐지는 집합으로
          표현됨. 두 타입은 서로 서브타입이 아니면서도 겹쳐질 수 있음
        </li>
        <li>
          한 객체의 추가적인 속성이 타입 선언에 언급되지 않더라도 그 타입에 속할
          수 있음
        </li>
        <li>
          타입 연산은 집합의 범위에 적용됨. A와 B의 인터섹션은 A의 범위와 B의
          범위의 인터섹션임. 객체 타입에서는 A & B인 값이 A와 B의 속성을 모두
          가짐을 의미
        </li>
        <li>
          {`'A는 B를 상속', 'A는 B에 할당 가능', 'A는 B의 서브타입'은 'A는 B의 부분 집합'과 같은 의미`}
        </li>
      </ul>
    </div>
  );
}

export default Item7;

interface Person {
  name: string;
}
interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonLifespan = Person & Lifespan;

interface PersonLifespan2 extends Lifespan {
  name: string;
}

const myPerson: PersonLifespan = {
  name: "eloy",
  birth: new Date(),
};
const myPerson2: PersonLifespan2 = {
  name: "eloy",
  birth: new Date(),
};

function sortBy<K extends keyof T, T>(vals: T[], key: K) {
  //
}
const obj1: PersonLifespan2[] = [{ name: "123", birth: new Date() }];
sortBy(obj1, "name");

console.log(myPerson, myPerson2);
