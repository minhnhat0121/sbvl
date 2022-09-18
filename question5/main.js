






const element = document.querySelector("section")
const question1ValueA = document.querySelector(".homework-question1-input-valueA")
const question1ValueB = document.querySelector(".homework-question1-input-valueB")
const question1ValueD1 = document.querySelector(".homework-question1-input-valueD1")
const question1ValueD2 = document.querySelector(".homework-question1-input-valueD2")
const question1ValueP = document.querySelector(".homework-question1-input-valueP")
const question1ValueQ = document.querySelector(".homework-question1-input-valueQ")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueA = parseFloat(question1ValueA.value)
    var ValueB = parseFloat(question1ValueB.value)
    var ValueD1 = parseFloat(question1ValueD1.value)
    var ValueD2 = parseFloat(question1ValueD2.value)
    var ValueP = parseFloat(question1ValueP.value)
    var ValueQ = parseFloat(question1ValueQ.value)
    console.log(valueA)
    var expression1 = (((-2 * ValueP) + (ValueB * ValueQ * 0.01)) * (ValueB / 2)) / (21000 * ((ValueD1 ** 2) / 4) * Math.PI)
    var expression2 = (((-ValueP) + (ValueB * ValueQ * 0.01)) * (valueA)) / (21000 * (((ValueD2 ** 2)) / 4) * Math.PI)
    var result = expression1 + expression2
    console.log((((-2 * ValueP) + (ValueB * ValueQ * 0.01)) * (ValueB / 2)))
    // console.log((21000*((ValueD1**2)/4) * Math.PI))
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