import { divide } from "./divide";

console.log(`6 / 2 = ${divide(6,2)}`);

if(module.hot) {
    module.hot.accept();
}
