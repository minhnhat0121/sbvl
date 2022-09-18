






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
    var ValueX = parseFloat(question1ValueX.value)
    var expression1 = (Math.sqrt(((4 * ValueP) / (ValueX * Math.PI))))
    var expression2 = (Math.sqrt(((16 * ValueP) / (ValueX * Math.PI))))
    var expression3 = (-ValueP * (ValueB / 10)) / (21000 * ((Math.PI * ((expression1) ** 2)) / 4))
    var expression4 = (-4 * ValueP * ((valueA ) / 10)) / (21000 * ((Math.PI * ((expression2) ** 2)) / 4))
    var result = expression3 + expression4
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
                <div>Đường kính đoạn CB: ${expression1}</div>
                <div>Đường kính đoạn BA: ${expression2}</div>
                <div>Chuyển vị dọc trục của đầu C: ${result}</div>
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