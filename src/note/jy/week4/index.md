## item 28. 유효한 상태만 표현하는 타입을 지향하기

타입을 설계함에 있어서 유효한 상태를 표현하는 타입을 지향해야 한다.  
이로 인해 코드가 길어질 수 있지만, 무효한 상태를 허용하는 타입은 차후 혼란을 야기시킬 수 있다.

## item 29. 사용할 때는 너그럽게, 생성할 때는 엄격하게

함수의 매개변수는 타입의 범위가 넓어도 되지만, 결과를 반환할 때는 일반적으로 타입의 범위가 더 구체적이어야 한다.  
때문에 선택적 속성(?)과 유니온 타입은 반환 타입보다 매개변수 타입에 더 보편적이다.  
재사용을 위해서도 기본 형태(반환 타입)와 느슨한 형태(매개변수 타입)을 도입하는 것이 좋다.

## item 30. 문서에 타입 정보 쓰지 않기

주석과 코드는 동기화되지 않기 때문에 주석 사용은 차후 코드 유지보수를 더 헷갈리게 할 수 있다.  
특정 매개변수를 설명하고 싶다면 JSDoc의 @param 구문을 사용할 수 있다.

```
/** nums를 변경하지 않습니다 */
function sort(nums: number[]) {} (X)

=>
function sort(nums: readonly number[]) {} (O)
```

주석과 마찬가지로 변수명에도 타입 정보를 넣지 않아야 한다. (단위가 있는 숫자들은 예외일 수 있다.)

## item 31. 타입 주변에 null 값 배치하기

한 값의 null 여부가 다른 값의 null 여부에 관련되도록 설계하지 말아야 한다.  
API 작성 시 반환 타입을 큰 객체로 만들고 반환 타입 전체가 null이거나 null이 아니게 만들어야 한다.

## item 32. 유니온의 인터페이스보다는 인터페이스의 유니온을 사용하기

- 속성 간 다양한 조합이 허용되지 않는 경우

```
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
} (X)

=>
interface FillLayer {
  type: 'fill';
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  type: 'line';
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  type: 'point';
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer; (O)
```

- type: 'fill'이라는 태그를 통해 Layer의 타입 범위를 좁힐 수도 있다.

```
function draw(layer: Layer) {
  if (layer.type === 'fill') {
    const { paint } = layer; // 타입이 FillPaint
    const { layout } = layer; // 타입이 FillLayout
    // ...
  }
}
```

- 여러 개의 선택적 필드가 동시에 값이 있거나 동시에 undefined이어야 하는 경우

```
interface Person {
  name: string;
  placeOfBirth?: string;
  dateOfBirth?: Date;
} (X)

=>
interface Person {
  name: string;
  birth?: {
    place: string;
    date: Date;
  };
} (O)
```

## item 33. string 타입보다는 더 구체적인 타입 사용하기

string을 남발하여 선언된 코드를 지양하고, 더 구체적인 타입을 사용하는 것이 좋다.  
보다 정확한 표현을 위해 string 타입보다는 문자열 리터럴 타입의 유니온을 사용할 수 있다.  
객체의 속성 이름을 함수 매개변수로 받을 때는 string보다 keyof T를 사용하는 것이 좋다.

```
function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## item 34. 부정확한 타입보다는 미완성 타입을 사용하기

타입 안정성을 위한 과도한 정제는 피해야 한다.  
타입 정보를 구체적으로 만들수록 오류 메시지와 자동 완성 기능에 주의를 기울여야 한다.

## item 35. 데이터가 아닌, API와 명세를 보고 타입 만들기

타입 안정성을 얻기 위해 API 또는 데이터 형식에 대한 타입 생성을 고려해야 한다.  
이러한 경우 눈에 보이는 데이터보다는 명세로부터 코드를 생성하는 것이 좋다.

## item 36. 해당 분야의 용어로 타입 이름 짓기

가독성을 높이고 추상화 수준을 올리기 위해서 해당 분야에 이미 존재하는 용어를 사용해야 한다.  
의미적으로 구분되는 경우가 아니라면 동일한 용어를 사용해야 한다.

## item 37. 공식 명칭에는 상표를 붙이기

```
interface Vector2D {
  _brand: '2d';
  x: number;
  y: number;
}
function vec2D(x: number, y: number): Vector2D {
  return { _brand: '2d', x, y };
}
```

타입스크립트는 구조적 타이핑(덕 타이핑)을 사용하기 때문에, 값을 세밀하게 구분하지 못하는 경우가 있다.  
이런 경우 상표를 붙이는 것을 고려해볼 만 하다.  
상표 기법은 타입 시스템에서 동작하지만 런타임에 상표를 검사하는 것과 같은 효과를 얻을 수 있다.
