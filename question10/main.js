






const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueB = document.querySelector(".homework-question1-input-valueB")
const question1ValueP1 = document.querySelector(".homework-question1-input-valueP1")
const question1ValueP2 = document.querySelector(".homework-question1-input-valueP2")
const question1ValueES = document.querySelector(".homework-question1-input-valueES")
const question1ValueEA = document.querySelector(".homework-question1-input-valueEA")
const question1ValueDiameter = document.querySelector(".homework-question1-input-valueDiameter")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var ValueB = parseFloat(question1ValueB.value)
    var ValueP1 = parseFloat(question1ValueP1.value)
    var ValueP2 = parseFloat(question1ValueP2.value)
    var ValueES = parseFloat(question1ValueES.value)
    var ValueEA = parseFloat(question1ValueEA.value)
    var ValueD = parseFloat(question1ValueDiameter.value)
    var expression1 = ((ValueP1 - ValueP2) * valueA * 100) / (ValueES * 100 * ((Math.PI * ((ValueD / 10) ** 2)) / 4))
    expression1 = expression1 * 10
    var expression2 = (ValueP1 * ValueB * 100) / (ValueEA * 100 * ((Math.PI * ((ValueD / 10) ** 2)) / 4))
    var expression3 = ((ValueP1 - ValueP2) * valueA * 100) / (ValueES * 100 * ((Math.PI * ((ValueD / 10) ** 2)) / 4))
    var result = expression2 + expression3
    result = result * 10

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
                <div>Chuyển vị tại B là: ${expression1}</div>
                <div>Chuyển vị tại A là: ${result}</div>
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