# Item37 - 공식 명칭에는 상표를 붙이기
- 구조적 타이핑으로 인한 오류를 방지하기 위해 **상표기법**을 사용할 수 있다.

```typescript
interface Vector2D {
	x:number;
	y:number;
}

function calculateNorm(p:Vector2D) {
	return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm({x:3, y:4}); // 5
const vec3D = {x:3, y:4, z:1}
calculateNorm(vec3D); // 5

interface brandedVector2D {
	x:number;
	y:number;
	_brand: '2d'
}

function vec2D(x:number, y:number) {
	return {x, y, _brand:'2d'};
}

function brandedCalculateNorm(brandedVector2D) {
	return Math.sqrt(p.x * p.x + p.y * p.y);
}

calculateNorm(vec2D(3,4)); // 5
// const vec3D = {x:3, y:4, z:1}
calculateNorm(vec3D); // 에러
```