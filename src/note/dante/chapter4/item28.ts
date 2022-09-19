export const point1 = '유효한 상태 / 무효한 상태를 구분하는 타입을 생성해라.'
interface Message {
    type: 'text' | 'image' | 'date';
    msg?: string;
    url?: string;
    date?: Date;
} // X

interface TextMessage {
    type: 'text';
    msg: string;
}
interface ImageMessage {
    type: 'image';
    url: string;
}
interface DateMessage {
    type: 'date';
    date: Date;
}
type Message2 = TextMessage | ImageMessage | DateMessage; // O

export const point2 = '아래 표현이 코드는 더 길어지지만 결국 더 좋다.'