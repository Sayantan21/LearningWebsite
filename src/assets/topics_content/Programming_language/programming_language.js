import java_content from "../Backend_development/Java/java"
import python_content from "../Backend_development/Python/python"
import js_content from "../Frontend_Development/JavaScript/javascript"
import c_plus_plus from "./C++/c++"
import c_content from "./C/c"
import kotlin_content from "./Kotlin/kotlin"

const programming_language_content = [
    {
        "id": 3,
        "content_name": "Programming-Langiage",
        "sub_content":[
            ...c_content,
            ...c_plus_plus,
            ...java_content,
            ...python_content,
            ...js_content,
            ...kotlin_content,
        ]
    }
]

export default programming_language_content