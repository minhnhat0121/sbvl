






const element = document.querySelector("section")
const question1ValueFab = document.querySelector(".homework-question1-input-valueFab")
const question1ValueFbc = document.querySelector(".homework-question1-input-valueFbc")
const question1ValueP = document.querySelector(".homework-question1-input-valueP")
const question1ValueQ = document.querySelector(".homework-question1-input-valueQ")
// const question1ValueDiameter = document.querySelector(".homework-question1-input-valueDiameter")
const submit = document.querySelector("button")
submit.addEventListener("click", (event) => {
    event.preventDefault()
    var valueFab = parseFloat(question1ValueFab.value)
    var ValueFbc = parseFloat(question1ValueFbc.value)
    var ValueP = parseFloat(question1ValueP.value)
    var ValueQ = parseFloat(question1ValueQ.value)
    // var ValueD = parseFloat(question1ValueDiameter.value)
    var expression1 = ValueP / valueFab
    var expression2 = (ValueP - (2 * ValueQ)) / ValueFbc
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
                <div>Ứng suất phát sinh trong đoạn AB: ${expression1}</div>
                <div>Ứng suất phát sinh trong đoạn BC: ${expression2}</div>
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