export const point1 = '모든 타입은 any로 할당 가능하다.'
export const point2 = 'any 타입은 never를 제외한 모든 타입에 할당 가능하다.'

'따라서 any는 타입 시스템을 무효화한다.'

export const point3 = '모든 타입은 unknown으로 할당 가능하다.'
export const point4 = 'unknown은 오직 unknown과 any에만 할당 가능하다.'

export const point5 = '어떤 타입도 never에 할당할 수 없다.'
export const point6 = 'never는 모든 타입에 할당 가능하다.'

'따라서 어떤 값이 들어올지 모르고, 사용자가 타입을 지정하도록 강제할 때는 unknown을 사용한다.'



