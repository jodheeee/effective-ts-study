type PaymentMethod = 'card' | 'kakao' | 'toss' | 'naver' | 'point';

interface PointLog {
    paymentType: PaymentMethod;
    items: string[];
    totalPrice: number;
    pointRate: number;
    createdAt: Date;
}

interface Order {
    paymentType: PaymentMethod;
    items: string[];
    totalPrice: number;
    createdAt: Date;
}

function createOrderLog(order: Order) {
    console.log(order.paymentType, order.createdAt, order.totalPrice, order.items);
}
const pointLog: PointLog = {paymentType: 'card', items: ['a', 'b'], totalPrice: 200, pointRate: 0.5, createdAt: new Date()};
createOrderLog(pointLog) // error가 없음.

interface Order2{
    _brand: 'order';
    paymentType: PaymentMethod;
    items: string[];
    totalPrice: number;
    createdAt: Date;
}
function createOrder2Log(order: Order2) {
    console.log(order.paymentType, order.createdAt, order.totalPrice, order.items, order._brand);
}
createOrder2Log(pointLog) // Argument of type 'PointLog' is not assignable to parameter of type 'Order2'. Property '_brand' is missing in type 'PointLog' but required in type 'Order2'.

interface Order3 extends Order {
    _brand: 'order2'
}
function createOrder3Log(order: Order3) {
    console.log(order.paymentType, order.createdAt, order.totalPrice, order.items);
}
createOrder3Log(pointLog) //Argument of type 'PointLog' is not assignable to parameter of type 'Order3'. Property '_brand' is missing in type 'PointLog' but required in type 'Order3'.

export const point1 = '상표 기법은 타입 시스템에서 작동하지만, 런타임에서 작동하는 것과 같은 효과를 낸다.'