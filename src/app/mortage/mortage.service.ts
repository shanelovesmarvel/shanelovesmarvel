
export let calculateMonthlyPayment = (principal, years, rate) => {
    // let 声明块级作用域变量
    // var 声明函数作用域变量
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
        console.warn(monthlyRate);
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    let monthlyPrincipal = principal * monthlyRate;
    return {principal, years, rate, monthlyRate, monthlyPayment, monthlyPrincipal};
    // 通过变量来创建对象
};

// principal 本金
// interest 利息
// balance 余额
// rate 利率
export let calculateAmortization = (principal, years, rate) => {
    let { monthlyRate, monthlyPayment, monthlyPrincipal} = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];
    for(let y = 0; y < years; y++){
        let interestY = 0; // Interest payment for year y
        let principalY = 0; // Principal payment for year y
        for(let m = 0; m < 12 ; m++){
            let interestM = balance * monthlyRate;  //Interest payment for month m
            let principalM = monthlyPayment - interestM; // Principal payment for month m
            interestY += interestM;
            principalY += principalM;
            balance = balance - principalM;
        }
        amortization.push({principalY,interestY, balance});
    }
    return {monthlyPayment, monthlyRate, monthlyPrincipal,  amortization};
};