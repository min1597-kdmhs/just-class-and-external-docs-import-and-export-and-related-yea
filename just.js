// Class 문법
class ClassName {
    private 접근제한변수 = 'Class 외부에서 접근할 수 없는 변수'
    public 접근가능변수 = 'Class 외부에서 접근할 수 있는 변수'
    기본변수 = 'public과 동일'

    static 상수 = '변경되지 않는 변수'

    constructor (parameter1, parameter2/* 함수의 Parameter 와 동일 */) {
        /* Class가 사용될때 처음으로 실행될 함수 (의도와 상관없이 Class가 사용되면 무조건 실행) */
        기본변수 = 'Class 내 변수는 static이 없을 경우 변수로 선언됨 (let과 동일)'
    }
    함수 () { /* Class 내에서 함수를 선언할때는 function 없이 사용 */
        return true
    }
}

const _class = new ClassName() /* class 호출은 new 클래스명() 형식으로 호출함 */

console.log(_class.접근제한변수) /* undefined 가 뜬다 (또는 오류) */
console.log(_class.접근가능변수) /* Class 외부에서 접근할 수 있는 변수 가 뜬다 */
_class.접근가능변수 = '이와 같이 바꿀수도 있다.'


export function execute () { /* 변수, 함수, 클래스 등에 export를 붙이면 외부 문서에서 해당 객체를 호출할 수 있다. */
    const _class = new ClassName()
    return {
        class: _class
    }
}