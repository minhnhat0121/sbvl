






const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueB = document.querySelector(".homework-question1-input-valueB")
const question1ValueP1 = document.querySelector(".homework-question1-input-valueP1")
const question1ValueQ = document.querySelector(".homework-question1-input-valueQ")
const question1ValueD = document.querySelector(".homework-question1-input-valueD")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var ValueB = parseFloat(question1ValueB.value)
    var ValueP = parseFloat(question1ValueP1.value)
    var valueQ = parseFloat(question1ValueQ.value)
    var valueD = parseFloat(question1ValueD.value)
    var Nz1 = -ValueP
    var Nz12 = -ValueP - (ValueB * valueQ)
    var Nz22 = -ValueP - ((ValueB + valueA) * valueQ)
    var expression1 = (((1 / 2) * (Nz1 + Nz12) * ValueB) / (21000 * (Math.PI * ((valueD) ** 2)) / 4))
    var expression2 = (((1 / 2) * (Nz12 + Nz22) * valueA) / (21000 * (Math.PI * ((valueD) ** 2)) / 4))
    var result = (expression1 + expression2) * 100
    console.log(result)
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
                chuyển vị của C là: ${result}
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