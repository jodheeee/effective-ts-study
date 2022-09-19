// Chopstick의 left, right 값은 둘 다 있거나 없다.
interface Chopstick {
    left?: boolean;
    right?: boolean;
} // X

interface Chopstick {
    isChopstick?: {
        left: boolean;
        right: boolean;
    }
} // O

export const point1 = '태그된 유니온을 잘 사용하자.'