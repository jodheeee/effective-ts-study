# Item29 - 사용할 때는 너그럽게, 생성할 때는 엄격하게
- **사용할 때 (함수의 매개변수 등)** 은 **범위가 넓고, 여러 타입을 입력받을 수 있는 유니온**으로 설계하면 좋다.
- 반대로, **생성할 때(함수의 반환 등)** 은 **가능한 한 좁고 구체적인 타입**을 지향해야한다.