//non-null assertion

interface Hero {
  name: string;
  skill: string;
}

//정상적인 사용 (타입 어노테이션 (: 사용))
// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

//속성의 값을 할당하지 않으면, 타입에러가 남.
// const capt: Hero = {};

//아래와 같이 타입 단언도 가능함.
// 단, 초기값을 정하지 않는다면 에러가 날 수 있음.
const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';

// const a: string | null;
// a!;
//확신이 있다면 위와 같이 사용해도 괜찮지만,
//사각지대가 있을 수 있으므로 null이 들어와버리는 경우가 있을 수 있으니 조심해서 써야 함.
