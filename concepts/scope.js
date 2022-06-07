function funcA() {
    let a = 1;

    function funcB() {
        let b = 2;

        function funcC() {
            let c = 3;

            console.log(a, b, c);
        }

        funcC();
        console.log(a, b);
    }

    funcB();
    console.log(a);
}

funcA();