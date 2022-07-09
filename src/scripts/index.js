import '../styles/index.scss';
const fn = () => {
    console.log('Bismillah');
}
fn();

class myClass {

    constructor(a = 10) {
        this.a = 10
    }
    ABC() {
        console.log(this.a);
    }
}

let p = new myClass();
p.ABC()
