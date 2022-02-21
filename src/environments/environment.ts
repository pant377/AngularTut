export let environment = {

  production: true
};
let sum = 0;
function setSum(value:number) {
  sum = value;
}
export function getSum(){
  return sum
}
export { sum, setSum };
