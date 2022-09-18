
const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueB = document.querySelector(".homework-question1-input-valueB")
const question1ValueP1 = document.querySelector(".homework-question1-input-valueP1")
const question1ValueX = document.querySelector(".homework-question1-input-valueX")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var ValueB = parseFloat(question1ValueB.value)
    var ValueP = parseFloat(question1ValueP1.value)
    var valueX = parseFloat(question1ValueX.value)
    var expression1 = Math.abs((ValueB * ValueP) / ((4 * valueA) + ValueB))
    var expression2 = Math.sqrt(expression1 / (Math.PI * (1 / 4) * valueX))
    var expression3 = Math.abs((Math.PI * ((expression2 ** 2) / 4) * valueX * valueA * 100) / (21000 * ((Math.PI * (expression2 ** 2)) / 4)))

    var result = expression1 + expression2
    console.log(result)
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
                <div>Phản lực Na là: ${expression1}</div>
                <div>Đường kính d là: ${expression2}</div>
                <div>Chuyển vị của B là: ${-expression3}</div>
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