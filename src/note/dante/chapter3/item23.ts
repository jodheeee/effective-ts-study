const p = {};
p.x = 1; // Property 'x' does not exist on type '{}'

const p2 = { x: 1, y: 2 };
const p3 = { ...p2, name: 1 };
// const p3: {
//   name: number;
//   x: number;
//   y: number;
// }

function addOptional<T extends object, U extends object>(
  a: T,
  b: U | null
): T & Partial<U> {
  return { ...a, ...b };
}

const p4 = addOptional(p2, p3);
// const p4: {
//   x: number;
//   y: number;
// } & Partial<{
//   name: number;
//   x: number;
//   y: number;
// }>
