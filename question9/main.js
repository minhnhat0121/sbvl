






const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueQ = document.querySelector(".homework-question1-input-valueQ")
const question1ValueX = document.querySelector(".homework-question1-input-valueX")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var valueQ = parseFloat(question1ValueQ.value)
    var ValueX = parseFloat(question1ValueX.value)
    valueA = valueA * 1000
    var expression1 = ((((5 * valueQ * valueA * valueA) )) / (2 * valueA)) / 10
    var expression2 = (expression1 / ValueX)
    var expression3 = ((((2 * expression1) - (10 * valueQ * valueA)) * valueA) / (2 * 21000 * expression2))
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
                <div>Phản lực tại A là: ${expression1}</div>
                <div>Tiết diện F là: ${expression2}</div>
                <div>Tiết diện F là: ${expression3}</div>
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