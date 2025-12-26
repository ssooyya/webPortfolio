document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", function () {
            const text = this.dataset.copy;

            navigator.clipboard.writeText(text).then(() => {
                alert(`복사되었습니다:\n${text}`);
            }).catch(err => {
                console.error("복사 실패", err);
            });
        });
    });
});
