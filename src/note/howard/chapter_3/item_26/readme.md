# item26 - 타입 추론에 문맥이 어떻게 사용되는지 이해하기
- 타입 추론이 **문맥**에 따라 어떻게 동작하는지 잘 이해해야 한다.
```tsx
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language:Language){};

setLanguage('JavaScript'); // 'JavaScript'의 타입을 Language 로 추론

let language = 'JavaScript'
setLanguage(language); // language의 타입을 string으로 추론
```

- 따라서 변수 선언을 **상수(const)로 선언**하거나, **상수 단언(as const)** 를 실행하는 등 문맥에 다른 대처법을 알아둬야한다.