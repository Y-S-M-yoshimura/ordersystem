/*function onSubmit() {
    const name = document.getElementById('answer').value;
    const msg = `${name}`;
    console.log(msg);
    sendText(msg);
    return false;
}*/

$(function () {
            $('form').submit(function () {
                const name    = $('input[name="name"]').val();
                const bangou = $('input[name="count"]').val();
                const shushoujou  = $('input[name="menu"]').val();
                const msg = `${name}\n${bangou}\n${shushoujou}\n${keika}\n${hatunetu}`;
                sendText(msg);
                return false;
            });
        });
