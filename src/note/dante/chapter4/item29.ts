export const point1 = '매개변수는 느슨하게, 리턴값은 엄격하게.'
export const point2 = '기본형태와 느슨한 형태를 만들어 사용하는 것이 좋다. - 생각해보지 못했던 방법'

interface Param {
    a: string;
    b: number;
    c: boolean;
}

interface ParamLike extends Omit<Param, 'a'> {
    a?: string;
}

const getParam = (someArg: ParamLike) : Param => {
    return {
        a: someArg.a ?? '',
        b: someArg.b,
        c: someArg.c
    }
}

const function1 = () => {
    const {a, b, c} = getParam({b: 1, c:false});

    a.length
}