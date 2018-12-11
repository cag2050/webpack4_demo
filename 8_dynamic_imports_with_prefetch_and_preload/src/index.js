
import(/* webpackPreload: true */ /* webpackChunkName: "divide" */ `./utilities/divide`)
    .then(divideModule => {
        console.log(divideModule.divide(6, 3)); // 2
    })
