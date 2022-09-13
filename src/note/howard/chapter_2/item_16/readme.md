# Item16 - number 인덱스 시그니처보다는 Array, 튜플, ArrayLike를 사용하기
- **배열**의 키 타입은 number가 아닌 **string**이다.
- 타입스크립트에서 인덱스 시그니처로 number를 허용하는 것은, **타입 에러를 잡기 위함**일 뿐, **런타임에서는 string**으로 치환된다.
- 정말 불가피한 경우를 제외하면 인덱스 시그니처로 number를 쓰는 것보다, **Array, 튜플, ArrayLike** 타입을 이용하는 것이 좋다.