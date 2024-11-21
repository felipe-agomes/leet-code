class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode  | null, l2: ListNode | null): ListNode | null {
    function revertListNode(l: ListNode | null): string {
        if (l == null) {
            return '';
        }

        if (l.next == null) {
            return `${l.val}`;
        }

        return revertListNode(l.next) + `${l.val}`;
    };

    function toListNode(numbers: string[]): ListNode | null {
        if (numbers.length === 1 ) {
            return new ListNode(+numbers[0]);
        }

        return new ListNode(+numbers[numbers.length - 1], toListNode(numbers.slice(0, numbers.length - 1)));
    }

    function addStrings(num1: string, num2: string): string {
        let carry = 0;
        let result = "";

        let i = num1.length - 1;
        let j = num2.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            const digit1 = i >= 0 ? parseInt(num1[i--]) : 0;
            const digit2 = j >= 0 ? parseInt(num2[j--]) : 0;

            const sum = digit1 + digit2 + carry;
            carry = Math.floor(sum / 10);
            result = (sum % 10) + result;
        }

        return result;
    }

    const firstNum: string = revertListNode(l1);
    const secondNum: string  = revertListNode(l2);

    const sumValues: string = addStrings(firstNum, secondNum);

    const reversedSumValues = toListNode([...sumValues]);

    return reversedSumValues;
};


const a = new ListNode(1);
const b = new ListNode(0, a);
const c = new ListNode(0, b);
const d = new ListNode(0, c);
const e = new ListNode(0, d);
const f = new ListNode(0, e);
const g = new ListNode(0, f);
const h = new ListNode(0, g);
const i = new ListNode(0, h);
const j = new ListNode(0, i);
const k = new ListNode(0, j);
const l = new ListNode(0, k);
const m = new ListNode(0, l);
const n = new ListNode(0, m);
const o = new ListNode(0, n);
const p = new ListNode(0, o);
const q = new ListNode(0, p);
const r = new ListNode(0, q);
const s = new ListNode(0, r);
const t = new ListNode(0, s);
const u = new ListNode(0, t);
const v = new ListNode(0, u);
const w = new ListNode(0, v);
const x = new ListNode(0, w);
const y = new ListNode(0, x);
const z = new ListNode(0, y);
const aa = new ListNode(0, z);
const ab = new ListNode(0, aa);
const ac = new ListNode(0, ab);
const ad = new ListNode(0, ac);
const ae = new ListNode(1, ad);


const af = new ListNode(4);
const ag = new ListNode(6, af);
const ah = new ListNode(5, ag);

console.log(ah);

console.log(addTwoNumbers(ae, ah));