# item39 - any를 구체적으로 변형해서 사용하기
- any를 굳이 사용해야 한다면 **가능한 한 구체적인 형태**로 변형하는 것이 좋다.

```typescript
// 아래 3가지형태가 any보단 낫다.
// 최소한 함수라는 것과 함수의 형태를 유추할 수 있다.
type Fn0 = () => any;
type FN1 = (arg:any) => any;
type FnN = (...args:any[]) => any;

function badGetLength (arr: any) {
	return arr.length;
}

// badGetLength 보단 이 함수가 낫다.
// 최소한 매개변수가 어떤 타입의 함수라는 것을 알수 있고, 리턴값이 number라는 것이 확실해진다.
function getLength (arr:any[]) {
	return arr.length;
}
```