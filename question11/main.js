






const element = document.querySelector("section")
const question1ValueAmpha = document.querySelector(".homework-question1-input-valueAmpha")
const question1ValueXichma = document.querySelector(".homework-question1-input-valueXichma")
const question1ValueP1 = document.querySelector(".homework-question1-input-valueP1")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueAmpha.value)
    var ValueX = parseFloat(question1ValueXichma.value)
    var ValueP1 = parseFloat(question1ValueP1.value)
    var expression1 = (Math.sqrt((ValueP1 / Math.sin((valueA * Math.PI) / 180)) / (Math.PI*ValueX*0.00001)))
    expression1 = expression1 / 10
    var expression2 = (Math.sqrt((ValueP1 / Math.tan((valueA * Math.PI) / 180)) / (Math.PI*ValueX*0.00001)))
    expression2 = expression2 / 10
    // var expression2 = ((ValueP2 - ValueP1) * valueA * 100) / (21000 * ((Math.PI * (ValueD ** 2)) / 4))
    element.insertAdjacentHTML("afterend", `    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Kết quả bài toán</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div>đường kính thanh AB là: ${expression1}</div>
            <div>đường kính thanh BC là: ${expression2}</div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </div>
        </div>
    </div>
    </div>`);
})

// function handlcaculate(valueA, ValueB, ValueP1, ValueP2, ValueD) {
//     return result
// }