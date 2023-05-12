
class EditorJS {
    editor = "js-editor"
    content = ""
    refreshing = false

    setEditor = (id) => {
        this.editor = id
    } 
    setContent = (newContent = document.getElementById(this.editor).value) => {
        console.log(newContent)
        this.content = newContent
    }
    refresh = () => {
        if (!this.refreshing) {
            this.refreshing = true
            setTimeout(() => {document.querySelector("iframe").srcdoc = this.content}, 600)
        }
        setTimeout(() => {this.refreshing = false}, 600)
    }
    onInput = (cb) => {
        const Editor = document.getElementById(this.editor)

        Editor.addEventListener("keyup", (e) => {
            if (e.key === "Tab") {
                e.preventDefault()
            }

            cb()
        })
    } 
}

const Editor = new EditorJS()

Editor.setEditor("editor")
Editor.onInput(() => {
    Editor.setContent()
    Editor.refresh()
})


