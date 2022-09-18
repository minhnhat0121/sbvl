






const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueB = document.querySelector(".homework-question1-input-valueB")
const question1ValueX = document.querySelector(".homework-question1-input-valueX")
const question1ValueD = document.querySelector(".homework-question1-input-valueDiameter")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var ValueB = parseFloat(question1ValueB.value)
    var ValueX = parseFloat(question1ValueX.value)
    var ValueD = parseFloat(question1ValueD.value)
    var expression1 = (((Math.PI * ((0.1 * ValueD) ** 2) * ValueX) / 4) / (ValueB / ((-4 * valueA) - ValueB)))
    expression1 = -expression1
    var expression2 = -(((Math.PI * ((0.1 * ValueD) ** 2))) * ValueX * (valueA / 10) / 4) / ((21000 * (Math.PI * ((0.1 * ValueD) ** 2))) / 4)
    // homeworkQuestion1.insertAdjacentElement("afterend",`MIN`)
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
                <div>Lực P là: ${expression1}</div>
                <div>Chuyển vị B là: ${expression2}</div>
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